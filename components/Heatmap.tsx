"use client";

import { AGENCE_PRINCIPALE, HEATMAP_AGENCIES, QueryRow } from "@/data/queries";

function Cell({
  present,
  isAP,
  apStatus,
  query,
  agency,
}: {
  present: boolean;
  isAP: boolean;
  apStatus: QueryRow["apStatus"];
  query: string;
  agency: string;
}) {
  if (!present) {
    return (
      <td className="px-2 py-3 text-center">
        <span className="text-line-baseline" aria-hidden>
          —
        </span>
        <span className="sr-only">
          {agency} absente sur &laquo;{query}&raquo;
        </span>
      </td>
    );
  }

  let dotClass = "bg-ink-primary";
  let label = `${agency} présente sur « ${query} »`;

  if (isAP) {
    if (apStatus === "present") {
      dotClass = "bg-status-good";
      label = `Agence Principale clairement trouvée sur « ${query} »`;
    } else {
      dotClass = "border-2 border-status-warning bg-transparent";
      label = `Agence Principale — présence à confirmer sur « ${query} »`;
    }
  }

  return (
    <td className="px-2 py-3 text-center" title={label}>
      <span
        className={`inline-block h-2.5 w-2.5 rounded-full ${dotClass}`}
        aria-hidden
      />
      <span className="sr-only">{label}</span>
    </td>
  );
}

export default function Heatmap({ queries }: { queries: QueryRow[] }) {
  return (
    <section className="rounded-2xl border border-line-hair bg-surface p-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-ink-primary">
          Vue d&rsquo;ensemble — requêtes × agences
        </h2>
        <p className="mt-1 text-sm text-ink-secondary">
          Présence dans le relevé, sans score ni position précise.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line-hair">
              <th className="w-64 py-2 pr-4 text-left font-medium text-ink-muted">
                Requête
              </th>
              {HEATMAP_AGENCIES.map((agency) => (
                <th
                  key={agency}
                  className={
                    "px-2 py-2 text-center font-medium " +
                    (agency === AGENCE_PRINCIPALE
                      ? "text-ink-primary"
                      : "text-ink-muted")
                  }
                >
                  {agency === AGENCE_PRINCIPALE ? "AP" : agency}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {queries.map((row) => (
              <tr
                key={row.id}
                className="border-b border-line-hair/70 last:border-0 hover:bg-plane/60"
              >
                <td className="py-2.5 pr-4 text-ink-secondary">
                  {row.query}
                </td>
                {HEATMAP_AGENCIES.map((agency) => (
                  <Cell
                    key={agency}
                    present={row.agencies.includes(agency)}
                    isAP={agency === AGENCE_PRINCIPALE}
                    apStatus={row.apStatus}
                    query={row.query}
                    agency={agency}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-status-good" />
          AP clairement trouvée
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-status-warning" />
          AP — présence à confirmer
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-ink-primary" />
          Agence présente
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-line-baseline">—</span> Absente du relevé
        </span>
      </div>
    </section>
  );
}
