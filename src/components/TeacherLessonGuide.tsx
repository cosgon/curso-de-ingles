import { TeacherGuidePlan } from "../data/courseTypes";
import { useAutoTranslate } from "../hooks/useAutoTranslate";

type TeacherLessonGuideProps = {
  lesson: TeacherGuidePlan;
};

export function TeacherLessonGuide({ lesson }: TeacherLessonGuideProps) {
  const previewVocab = lesson.vocab.slice(0, 10);
  const { getTranslation } = useAutoTranslate(previewVocab);

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
          <p className="mt-1 text-xs text-slate/80">Duracao: {lesson.duration} | Nivel: {lesson.level}</p>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Vocabulos e traducoes</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {previewVocab.map((item) => (
              <li key={`vocab-${item}`}>
                {item}: {getTranslation(item)}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Verbos alvo</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.verbs.map((item) => (
              <li key={`verb-${item.verb}`}>
                {item.verb}: {item.translation}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Estruturas da aula</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.structures.map((item) => (
              <li key={`structure-${item}`}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Roteiro de apresentacao</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.timeline.map((item) => (
              <li key={`timeline-${item}`}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Gabarito da pratica</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.controlledPractice.map((item, index) => (
              <li key={`practice-${item}`}>
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-dawn/70 p-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-ocean">Fechamento e resumo</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.wrapUp.map((item) => (
              <li key={`wrap-${item}`}>{item}</li>
            ))}
          </ul>
          <h5 className="mt-3 text-sm font-bold uppercase tracking-wide text-ocean">Resumo da aula</h5>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {lesson.lessonSummary.map((item) => (
              <li key={`summary-${item}`}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </details>
  );
}
