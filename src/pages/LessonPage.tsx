import { Link, useParams } from "react-router-dom";
import { GrammarPanel } from "../components/GrammarPanel";
import { StudyPlanPanel } from "../components/StudyPlanPanel";
import { VerbConjugationTable } from "../components/VerbConjugationTable";
import { VocabFlashcards } from "../components/VocabFlashcards";
import { LessonPlan } from "../data/courseTypes";

type LessonPageProps = {
  lessons: LessonPlan[];
  completedIds: string[];
  onToggleLesson: (lessonId: string) => void;
};

export function LessonPage({ lessons, completedIds, onToggleLesson }: LessonPageProps) {
  const { lessonId } = useParams();
  const lesson = lessons.find((item) => item.id === lessonId);

  if (!lesson) {
    return (
      <div className="mx-auto mt-16 max-w-xl rounded-3xl bg-white/85 p-8 text-center shadow-lesson">
        <h1 className="font-heading text-2xl text-ocean">Aula nao encontrada</h1>
        <Link className="mt-4 inline-block rounded-xl bg-ocean px-4 py-2 font-bold text-dawn" to="/">
          Voltar para inicio
        </Link>
      </div>
    );
  }

  const isCompleted = completedIds.includes(lesson.id);

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="rounded-3xl bg-gradient-to-r from-sun to-ocean p-7 text-white shadow-lesson">
        <Link className="text-sm font-bold underline" to="/">
          Voltar para trilha
        </Link>
        <p className="mt-4 text-xs uppercase tracking-[0.22em]">Aula individual</p>
        <h1 className="mt-2 font-heading text-3xl">{lesson.title}</h1>
        <p className="mt-2 max-w-3xl text-sm">{lesson.objective}</p>
        <button
          className={`mt-5 rounded-xl px-4 py-2 text-sm font-bold ${
            isCompleted ? "bg-mint text-white" : "bg-dawn text-ocean"
          }`}
          onClick={() => onToggleLesson(lesson.id)}
          type="button"
        >
          {isCompleted ? "Aula concluida" : "Marcar aula como concluida"}
        </button>
      </header>

      <VocabFlashcards vocab={lesson.vocab} />
      <VerbConjugationTable verbs={lesson.verbs} />
      <GrammarPanel grammar={lesson.grammar} />
      <StudyPlanPanel development={lesson.development} homework={lesson.homework} prep={lesson.prep} />
    </main>
  );
}
