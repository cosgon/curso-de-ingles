import { GrammarItem } from "../data/courseTypes";

type GrammarPanelProps = {
  grammar: GrammarItem;
};

export function GrammarPanel({ grammar }: GrammarPanelProps) {
  return (
    <section className="rounded-2xl bg-white/90 p-5 shadow-lesson">
      <h2 className="font-heading text-2xl text-ocean">{grammar.title}</h2>
      <ul className="mt-3 space-y-2">
        {grammar.bullets.map((item) => (
          <li className="rounded-xl bg-dawn/70 px-3 py-2 text-slate" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
