import { AGENCE_PRINCIPALE, QueryRow } from "@/data/queries";

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
        Agences les plus visibles
      </h2>
      <p className="mt-1 text-xs text-ink-secondary sm:text-sm">
        Nombre de requêtes (sur {queries.length}) où l&rsquo;agence apparaît.
      </p>

      <ol className="mt-4 divide-y divide-line-hair">
        {ranked.map(([agency, count], i) => {
          const isAP = agency === AGENCE_PRINCIPALE;
          return (
            <li
              key={agency}
              className="flex items-center justify-between gap-3 py-2.5"
            >
              <span className="flex items-center gap-3">
                <span className="tabular w-5 text-sm text-ink-muted">
                  {i + 1}
                </span>
                <span
                  className={
                    "text-sm " +
                    (isAP
                      ? "font-semibold text-ink-primary"
                      : "text-ink-secondary")
                  }
                >
                  {agency}
                </span>
              </span>
              <span
                className={
                  "tabular text-sm " +
                  (isAP ? "font-semibold text-accent" : "text-ink-muted")
                }
              >
                {count}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
