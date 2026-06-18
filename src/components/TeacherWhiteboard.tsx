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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef<boolean>(false);
  const lastPointRef = useRef<Point | null>(null);

  const [lineWidth, setLineWidth] = useState<number>(3);
  const [strokeColor, setStrokeColor] = useState<string>("#1D3557");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = setupCanvasScale(canvas);
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
  }, [lineWidth, strokeColor]);

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
      if (!drawingRef.current) {
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

      context.strokeStyle = strokeColor;
      context.lineWidth = lineWidth;
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
  }, [lineWidth, strokeColor]);

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

  return (
    <section className="rounded-2xl bg-white/90 p-5 shadow-lesson">
      <h2 className="font-heading text-2xl text-ocean">Whiteboard do professor</h2>
      <p className="mt-1 text-sm text-slate">Use esta area para explicar estruturas, exemplos e corrigir respostas ao vivo.</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
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

        <button className="rounded-lg bg-ocean px-4 py-2 text-sm font-bold text-dawn" onClick={clearCanvas} type="button">
          Limpar quadro
        </button>
      </div>

      <canvas
        className="mt-4 h-[420px] w-full touch-none rounded-xl border border-ocean/20 bg-white"
        ref={canvasRef}
      />
    </section>
  );
}
