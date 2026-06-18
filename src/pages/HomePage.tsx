import { CourseProgressBar } from "../components/CourseProgressBar";
import { LessonGridCard } from "../components/LessonGridCard";
import { LessonPlan } from "../data/courseTypes";
import { Link } from "react-router-dom";

type HomePageProps = {
  lessons: LessonPlan[];
  completedIds: string[];
  onToggleLesson: (lessonId: string) => void;
};

export function HomePage({ lessons, completedIds, onToggleLesson }: HomePageProps) {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="rounded-3xl bg-gradient-to-r from-ocean to-mint p-7 text-dawn shadow-lesson">
        <p className="text-sm uppercase tracking-[0.28em]">Curso aberto e gratuito</p>
        <h1 className="mt-2 font-heading text-4xl">Ingles Basico Interativo</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">
          Estude no seu ritmo com trilha guiada, revisoes e praticas objetivas em portugues.
        </p>
        <div className="mt-4">
          <Link className="inline-block rounded-xl bg-dawn px-4 py-2 text-sm font-bold text-ocean" to="/teacher">
            Entrar na area do professor
          </Link>
        </div>
      </header>

      <CourseProgressBar completed={completedIds.length} total={lessons.length} />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {lessons.map((lesson) => (
          <LessonGridCard
            completed={completedIds.includes(lesson.id)}
            key={lesson.id}
            lesson={lesson}
            onToggle={onToggleLesson}
          />
        ))}
      </section>
    </main>
  );
}
