import { useState } from "react";
import { VocabItem } from "../data/courseTypes";

type VocabFlashcardsProps = {
  vocab: VocabItem[];
};

export function VocabFlashcards({ vocab }: VocabFlashcardsProps) {
  const [active, setActive] = useState<string[]>([]);

  function toggleCard(word: string): void {
    setActive((current) =>
      current.includes(word) ? current.filter((item) => item !== word) : [...current, word]
    );
  }

  return (
    <section>
      <h2 className="font-heading text-2xl text-ocean">Flashcards de vocabulario</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {vocab.map((item) => {
          const isOpen = active.includes(item.word);
          return (
            <button
              className="rounded-2xl border border-white/70 bg-white/90 p-4 text-left shadow-lesson transition hover:-translate-y-1"
              key={item.word}
              onClick={() => toggleCard(item.word)}
              type="button"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-mint">{isOpen ? "PT-BR" : "EN"}</p>
              <p className="mt-1 font-heading text-xl text-slate">{isOpen ? item.translation : item.word}</p>
              <p className="mt-1 text-xs text-slate/80">Contexto: {item.supportWord}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
