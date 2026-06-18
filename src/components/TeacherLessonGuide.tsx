import { LessonPlan } from "../data/courseTypes";

type TeacherLessonGuideProps = {
  lesson: LessonPlan;
};

export function TeacherLessonGuide({ lesson }: TeacherLessonGuideProps) {
  return (
    <details className="rounded-2xl bg-white/90 p-4 shadow-lesson" open={lesson.order <= 1}>
      <summary className="cursor-pointer list-none">
        <p className="text-xs font-bold uppercase tracking-wider text-mint">
          {lesson.order === 0 ? "Aula Show" : `Aula ${String(lesson.order).padStart(2, "0")}`}
        </p>
        <h3 className="font-heading text-2xl text-ocean">{lesson.title}</h3>
      </summary>

      <div className="mt-4 space-y-4">
        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Objetivo pedagogico</h4>
          <p className="mt-1 text-sm text-slate">{lesson.objective}</p>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Roteiro de apresentacao</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.prep.map((item) => (
              <li key={`prep-${item}`}>Preparar: {item}</li>
            ))}
            {lesson.development.map((item) => (
              <li key={`dev-${item}`}>Explicar e praticar: {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Gabarito da pratica</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.practice.fillBlanks.map((question, index) => (
              <li key={`gap-${question.prompt}`}>{index + 1}. {question.prompt} Resposta: {question.answer}</li>
            ))}
            {lesson.practice.multipleChoice.map((question, index) => (
              <li key={`choice-${question.question}`}>
                {index + 1}. {question.question} Resposta: {question.answer}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Fechamento e homework</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.homework.map((item) => (
              <li key={`home-${item}`}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </details>
  );
}
