type CourseProgressBarProps = {
  completed: number;
  total: number;
};

export function CourseProgressBar({ completed, total }: CourseProgressBarProps) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="rounded-2xl bg-white/85 p-4 shadow-lesson">
      <p className="text-sm font-bold uppercase tracking-wide text-ocean">Progresso no curso</p>
      <h2 className="mt-1 font-heading text-2xl text-slate">{completed} de {total} aulas concluidas</h2>
      <div className="mt-4 h-4 overflow-hidden rounded-full bg-dawn">
        <div
          className="h-full rounded-full bg-gradient-to-r from-mint to-ocean transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-slate">{percent}% completo</p>
    </section>
  );
}
