type StudyPlanPanelProps = {
  prep: string[];
  development: string[];
  homework: string[];
};

export function StudyPlanPanel({ prep, development, homework }: StudyPlanPanelProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <article className="rounded-2xl bg-white/90 p-4 shadow-lesson">
        <h3 className="font-heading text-xl text-ocean">Preparacao</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate">
          {prep.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </article>

      <article className="rounded-2xl bg-white/90 p-4 shadow-lesson">
        <h3 className="font-heading text-xl text-ocean">Aula em classe</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate">
          {development.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </article>

      <article className="rounded-2xl bg-white/90 p-4 shadow-lesson">
        <h3 className="font-heading text-xl text-ocean">Homework</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate">
          {homework.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
