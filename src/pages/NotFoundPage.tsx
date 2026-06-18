import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="mx-auto mt-16 max-w-xl rounded-3xl bg-white/80 p-8 text-center shadow-lesson">
      <h1 className="font-heading text-3xl text-ocean">Pagina nao encontrada</h1>
      <p className="mt-3 text-slate">
        Esta rota nao existe no curso. Volte para a lista de aulas para continuar sua jornada.
      </p>
      <Link className="mt-6 inline-block rounded-xl bg-ocean px-5 py-3 font-bold text-dawn" to="/">
        Ir para inicio
      </Link>
    </div>
  );
}
