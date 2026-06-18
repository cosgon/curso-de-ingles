import { useState } from "react";
import { LessonPractice } from "../data/courseTypes";

type PracticeZoneProps = {
  practice: LessonPractice;
};

export function PracticeZone({ practice }: PracticeZoneProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function updateAnswer(key: string, value: string): void {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function hasCorrectAnswer(key: string, expected: string): boolean {
    return answers[key]?.trim().toLowerCase() === expected.trim().toLowerCase();
  }

  return (
    <section className="space-y-6 rounded-2xl bg-white/90 p-5 shadow-lesson">
      <h2 className="font-heading text-2xl text-ocean">Pratica guiada</h2>

      <div>
        <h3 className="text-lg font-bold text-slate">Complete as lacunas</h3>
        <div className="mt-3 space-y-3">
          {practice.fillBlanks.map((item, index) => {
            const key = `gap-${index}`;
            return (
              <div className="rounded-xl bg-dawn/70 p-3" key={item.prompt}>
                <p className="text-slate">{item.prompt}</p>
                <input
                  className="mt-2 w-full rounded-lg border border-mint/50 px-3 py-2"
                  onChange={(event) => updateAnswer(key, event.target.value)}
                  placeholder={item.tip}
                  value={answers[key] ?? ""}
                />
                <p className="mt-2 text-sm font-bold text-mint">
                  {hasCorrectAnswer(key, item.answer) ? "Correto!" : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate">Multipla escolha</h3>
        <div className="mt-3 space-y-3">
          {practice.multipleChoice.map((item, index) => {
            const key = `choice-${index}`;
            return (
              <article className="rounded-xl bg-dawn/70 p-3" key={item.question}>
                <p className="text-slate">{item.question}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.options.map((option) => (
                    <button
                      className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-slate"
                      key={option}
                      onClick={() => updateAnswer(key, option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm font-bold text-mint">
                  {hasCorrectAnswer(key, item.answer) ? "Resposta certa!" : ""}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
