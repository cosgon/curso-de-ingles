import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { TeacherLessonGuide } from "../components/TeacherLessonGuide";
import { TeacherWhiteboard } from "../components/TeacherWhiteboard";
import { TeacherGuidePlan } from "../data/courseTypes";
import { useTeacherAccess } from "../hooks/useTeacherAccess";

type TeacherPageProps = {
  lessons: TeacherGuidePlan[];
};

export function TeacherPage({ lessons }: TeacherPageProps) {
  const { isUnlocked, lock, unlock, validatePassword } = useTeacherAccess();
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (validatePassword(password)) {
      setErrorText("");
      unlock();
      return;
    }

    setErrorText("Senha invalida. Use a senha compartilhada com professores.");
  }

  if (!isUnlocked) {
    return (
      <main className="mx-auto max-w-xl px-4 py-10">
        <section className="rounded-2xl bg-white/90 p-6 shadow-lesson">
          <p className="text-xs font-bold uppercase tracking-wider text-mint">Acesso restrito</p>
          <h1 className="mt-2 font-heading text-3xl text-ocean">Area do professor</h1>
          <p className="mt-2 text-sm text-slate">
            Esta pagina contem gabaritos e guia de conducao da aula. Digite a senha para continuar.
          </p>

          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <label className="block text-sm font-bold text-slate" htmlFor="teacher-password">
              Senha
            </label>
            <input
              className="w-full rounded-xl border border-ocean/20 px-3 py-2"
              id="teacher-password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite a senha"
              type="password"
              value={password}
            />
            {errorText ? <p className="text-sm font-bold text-red-600">{errorText}</p> : null}
            <button className="rounded-xl bg-ocean px-5 py-2 font-bold text-dawn" type="submit">
              Entrar
            </button>
          </form>

          <Link className="mt-4 inline-block text-sm font-bold text-ocean underline" to="/">
            Voltar para curso
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="rounded-3xl bg-gradient-to-r from-ocean to-slate p-7 text-white shadow-lesson">
        <p className="text-xs uppercase tracking-[0.22em]">Painel do professor</p>
        <h1 className="mt-2 font-heading text-3xl">Guia completo + gabarito por aula</h1>
        <p className="mt-2 text-sm">
          Use os blocos abaixo para conduzir cada aula do curso com roteiro, respostas e quadro digital.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="rounded-xl bg-dawn px-4 py-2 text-sm font-bold text-ocean" to="/">
            Voltar para inicio
          </Link>
          <button className="rounded-xl border border-white px-4 py-2 text-sm font-bold" onClick={lock} type="button">
            Sair da area do professor
          </button>
        </div>
      </header>

      <TeacherWhiteboard />

      <section className="space-y-4">
        {lessons.map((lesson) => (
          <TeacherLessonGuide key={lesson.id} lesson={lesson} />
        ))}
      </section>
    </main>
  );
}
