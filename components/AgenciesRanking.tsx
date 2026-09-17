import { QueryRow } from "@/data/queries";

export default function AgenciesRanking({ queries }: { queries: QueryRow[] }) {
  const counts = new Map<string, number>();
  for (const row of queries) {
    for (const agency of row.agencies) {
      counts.set(agency, (counts.get(agency) ?? 0) + 1);
    }
  }
  const ranked = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);

  return (
    <div className="rounded-xl border border-line-hair bg-surface p-4 sm:p-6">
      <h2 className="text-base font-semibold text-ink-primary sm:text-lg">
        Agences visibles dans les recherches
      </h2>

      <ul className="mt-3 divide-y divide-line-hair">
        {ranked.map(([agency, count]) => (
          <li
            key={agency}
            className="flex items-center justify-between gap-3 py-2.5 text-sm"
          >
            <span className="text-ink-secondary">{agency}</span>
            <span className="tabular text-ink-muted">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
