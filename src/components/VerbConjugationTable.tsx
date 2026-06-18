import { VerbItem } from "../data/courseTypes";

type VerbConjugationTableProps = {
  verbs: VerbItem[];
};

export function VerbConjugationTable({ verbs }: VerbConjugationTableProps) {
  return (
    <section>
      <h2 className="font-heading text-2xl text-ocean">Verbos da aula</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-lesson">
        <table className="w-full text-sm">
          <thead className="bg-ocean text-dawn">
            <tr>
              <th className="px-4 py-3 text-left">Verbo</th>
              <th className="px-4 py-3 text-left">Tradução</th>
              <th className="px-4 py-3 text-left">Como praticar</th>
            </tr>
          </thead>
          <tbody>
            {verbs.map((item) => (
              <tr className="border-t border-dawn" key={item.verb}>
                <td className="px-4 py-3 font-bold text-slate">{item.verb}</td>
                <td className="px-4 py-3 text-slate">{item.translation}</td>
                <td className="px-4 py-3 text-slate">{item.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
