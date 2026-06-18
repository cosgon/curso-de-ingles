import { Link } from "react-router-dom";
import { LessonPlan } from "../data/courseTypes";

type LessonGridCardProps = {
  lesson: LessonPlan;
  completed: boolean;
  onToggle: (lessonId: string) => void;
};

export function LessonGridCard({ lesson, completed, onToggle }: LessonGridCardProps) {
  return (
    <article className="animate-riseIn rounded-2xl border border-white/50 bg-white/90 p-5 shadow-lesson">
      <p className="text-xs font-bold uppercase tracking-wider text-mint">
        {lesson.order === 0 ? "Aula Show" : `Aula ${String(lesson.order).padStart(2, "0")}`}
      </p>
      <h3 className="mt-2 font-heading text-xl text-ocean">{lesson.title}</h3>
      <p className="mt-2 text-sm text-slate">{lesson.objective}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
            completed ? "bg-mint text-white" : "bg-dawn text-ocean"
          }`}
          onClick={() => onToggle(lesson.id)}
          type="button"
        >
          {completed ? "Concluida" : "Marcar como concluida"}
        </button>
        <Link className="rounded-xl bg-ocean px-4 py-2 text-sm font-bold text-dawn" to={`/lesson/${lesson.id}`}>
          Abrir aula
        </Link>
      </div>
    </article>
  );
}
