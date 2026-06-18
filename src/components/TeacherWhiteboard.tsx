import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

function getPointFromEvent(event: PointerEvent, canvas: HTMLCanvasElement): Point {
  const bounds = canvas.getBoundingClientRect();
  return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
}

function setupCanvasScale(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const ratio = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas 2D context not available. Expected browser support for 2d context.");
  }

  context.scale(ratio, ratio);
  context.lineCap = "round";
  context.lineJoin = "round";
  return context;
}

export function TeacherWhiteboard() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef<boolean>(false);
  const lastPointRef = useRef<Point | null>(null);

  const [lineWidth, setLineWidth] = useState<number>(3);
  const [strokeColor, setStrokeColor] = useState<string>("#1D3557");
  const [mode, setMode] = useState<"pen" | "eraser" | "text">("pen");
  const [textInput, setTextInput] = useState<string>("");
  const [textSize, setTextSize] = useState<number>(16);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = setupCanvasScale(canvas);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = lineWidth;
    context.strokeStyle = mode === "eraser" ? "#FFFFFF" : strokeColor;
  }, [lineWidth, strokeColor, mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const drawingCanvas = canvas;

    function onPointerDown(event: PointerEvent): void {
      drawingRef.current = true;
      lastPointRef.current = getPointFromEvent(event, drawingCanvas);
    }

    function onPointerMove(event: PointerEvent): void {
      if (!drawingRef.current || mode === "text") {
        return;
      }

      const context = drawingCanvas.getContext("2d");
      if (!context) {
        return;
      }

      const current = getPointFromEvent(event, drawingCanvas);
      const previous = lastPointRef.current;
      if (!previous) {
        lastPointRef.current = current;
        return;
      }

      context.lineWidth = lineWidth;
      context.strokeStyle = mode === "eraser" ? "#FFFFFF" : strokeColor;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(current.x, current.y);
      context.stroke();
      lastPointRef.current = current;
    }

    function onPointerEnd(): void {
      drawingRef.current = false;
      lastPointRef.current = null;
    }

    drawingCanvas.addEventListener("pointerdown", onPointerDown);
    drawingCanvas.addEventListener("pointermove", onPointerMove);
    drawingCanvas.addEventListener("pointerup", onPointerEnd);
    drawingCanvas.addEventListener("pointerleave", onPointerEnd);

    return () => {
      drawingCanvas.removeEventListener("pointerdown", onPointerDown);
      drawingCanvas.removeEventListener("pointermove", onPointerMove);
      drawingCanvas.removeEventListener("pointerup", onPointerEnd);
      drawingCanvas.removeEventListener("pointerleave", onPointerEnd);
    };
  }, [lineWidth, strokeColor, mode]);

  function clearCanvas(): void {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function addText(event: React.MouseEvent<HTMLCanvasElement>): void {
    if (mode !== "text" || !textInput) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    context.fillStyle = strokeColor;
    context.font = `${textSize}px Arial`;
    context.fillText(textInput, x, y);
  }

  function toggleFullscreen(): void {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }

  return (
    <section className="rounded-2xl bg-white/90 p-5 shadow-lesson" ref={containerRef}>
      <h2 className="font-heading text-2xl text-ocean">Whiteboard do professor</h2>
      <p className="mt-1 text-sm text-slate">Use esta area para explicar estruturas, exemplos e corrigir respostas ao vivo.</p>

      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm font-bold text-slate" htmlFor="mode-select">
            Ferramenta
          </label>
          <select
            id="mode-select"
            onChange={(event) => setMode(event.target.value as "pen" | "eraser" | "text")}
            value={mode}
            className="rounded-lg border border-ocean/20 px-3 py-2 text-sm"
          >
            <option value="pen">Caneta</option>
            <option value="eraser">Borracha</option>
            <option value="text">Texto</option>
          </select>
        </div>

        {mode === "pen" && (
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-sm font-bold text-slate" htmlFor="line-width">
              Espessura
            </label>
            <input
              id="line-width"
              max={10}
              min={1}
              onChange={(event) => setLineWidth(Number(event.target.value))}
              type="range"
              value={lineWidth}
            />

            <label className="text-sm font-bold text-slate" htmlFor="line-color">
              Cor
            </label>
            <input
              id="line-color"
              onChange={(event) => setStrokeColor(event.target.value)}
              type="color"
              value={strokeColor}
            />
          </div>
        )}

        {mode === "eraser" && (
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-sm font-bold text-slate" htmlFor="eraser-width">
              Tamanho da borracha
            </label>
            <input
              id="eraser-width"
              max={30}
              min={1}
              onChange={(event) => setLineWidth(Number(event.target.value))}
              type="range"
              value={lineWidth}
            />
          </div>
        )}

        {mode === "text" && (
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="rounded-lg border border-ocean/20 px-3 py-2 text-sm"
              onChange={(event) => setTextInput(event.target.value)}
              placeholder="Digite o texto"
              type="text"
              value={textInput}
            />
            <label className="text-sm font-bold text-slate" htmlFor="text-size">
              Tamanho
            </label>
            <input
              id="text-size"
              max={48}
              min={8}
              onChange={(event) => setTextSize(Number(event.target.value))}
              type="range"
              value={textSize}
            />
            <label className="text-sm font-bold text-slate" htmlFor="text-color">
              Cor
            </label>
            <input
              id="text-color"
              onChange={(event) => setStrokeColor(event.target.value)}
              type="color"
              value={strokeColor}
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button className="rounded-lg bg-ocean px-4 py-2 text-sm font-bold text-dawn" onClick={clearCanvas} type="button">
            Limpar quadro
          </button>
          <button className="rounded-lg border border-ocean bg-white px-4 py-2 text-sm font-bold text-ocean" onClick={toggleFullscreen} type="button">
            {isFullscreen ? "Sair de tela cheia" : "Tela cheia"}
          </button>
        </div>
      </div>

      <canvas
        className="mt-4 h-[420px] w-full touch-none rounded-xl border border-ocean/20 bg-white cursor-crosshair"
        onClick={addText}
        ref={canvasRef}
      />
    </section>
  );
}
