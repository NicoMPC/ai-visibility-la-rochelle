"use client";

import { useMemo, useState } from "react";
import { AGENCE_PRINCIPALE, QueryRow, queries } from "@/data/queries";
import AgenciesRanking from "./AgenciesRanking";
import Heatmap from "./Heatmap";

type Filter = "all" | "yes" | "no";

function isVisible(row: QueryRow) {
  return row.agencies.includes(AGENCE_PRINCIPALE);
}

function QueryCard({ row }: { row: QueryRow }) {
  const visible = isVisible(row);
  const others = row.agencies.filter((a) => a !== AGENCE_PRINCIPALE);

  return (
    <article
      className={
        "rounded-xl border p-4 sm:p-5 " +
        (visible
          ? "border-line-hair bg-surface"
          : "border-status-critical/30 bg-status-critical/[0.04]")
      }
    >
      <div className="mb-1.5 flex items-start justify-between gap-3">
        <span className="tabular pt-0.5 text-xs font-medium text-ink-muted">
          {String(row.id).padStart(2, "0")}
        </span>
        <span
          className={
            "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold " +
            (visible
              ? "bg-status-good/10 text-status-good"
              : "bg-status-critical/10 text-status-critical")
          }
        >
          <span
            className={
              "h-1.5 w-1.5 rounded-full " +
              (visible ? "bg-status-good" : "bg-status-critical")
            }
          />
          {visible ? "OUI" : "NON"}
        </span>
      </div>

      <h3 className="mb-3 text-[15px] font-semibold leading-snug text-ink-primary sm:text-base">
        {row.query}
      </h3>

      <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-ink-muted">
        Autres agences
      </p>
      <p className="text-sm leading-relaxed text-ink-secondary">
        {others.join(" · ")}
      </p>
    </article>
  );
}

export default function Dashboard() {
  const [filter, setFilter] = useState<Filter>("all");

  const yesCount = queries.filter(isVisible).length;
  const noCount = queries.length - yesCount;

  const filtered = useMemo(() => {
    if (filter === "yes") return queries.filter(isVisible);
    if (filter === "no") return queries.filter((q) => !isVisible(q));
    return queries;
  }, [filter]);

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "Toutes", count: queries.length },
    { key: "yes", label: "OUI", count: yesCount },
    { key: "no", label: "NON", count: noCount },
  ];

  return (
    <main className="mx-auto max-w-[1320px] px-4 py-6 sm:px-8 sm:py-12 lg:py-16">
      {/* Header */}
      <header className="mb-5 sm:mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink-muted sm:text-sm">
          AI VISIBILITY
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-ink-primary sm:text-5xl lg:text-6xl">
          LA ROCHELLE
        </h1>
        <p className="mt-1.5 text-sm text-ink-secondary sm:mt-3 sm:text-lg">
          20 recherches vendeurs · visibilité des agences immobilières locales
        </p>
      </header>

      {/* Stats */}
      <section className="mb-5 grid grid-cols-2 gap-3 sm:mb-10 sm:gap-5">
        <div className="rounded-xl border border-status-good/30 bg-status-good/[0.04] p-4 sm:p-6">
          <p className="tabular text-3xl font-bold text-status-good sm:text-5xl">
            {yesCount}
            <span className="text-lg font-semibold text-ink-muted sm:text-2xl">
              /{queries.length}
            </span>
          </p>
          <p className="mt-1 text-xs font-medium text-ink-secondary sm:text-sm">
            Agence Principale visible
          </p>
        </div>
        <div className="rounded-xl border border-status-critical/30 bg-status-critical/[0.04] p-4 sm:p-6">
          <p className="tabular text-3xl font-bold text-status-critical sm:text-5xl">
            {noCount}
            <span className="text-lg font-semibold text-ink-muted sm:text-2xl">
              /{queries.length}
            </span>
          </p>
          <p className="mt-1 text-xs font-medium text-ink-secondary sm:text-sm">
            Agence Principale absente
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-4 grid grid-cols-3 gap-2 sm:mb-6 sm:flex sm:gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={
              "min-h-[44px] rounded-lg border px-3 text-sm font-semibold transition-colors sm:rounded-full sm:px-4 " +
              (filter === f.key
                ? "border-ink-primary bg-ink-primary text-white"
                : "border-line-hair bg-surface text-ink-secondary active:bg-plane")
            }
          >
            {f.label} <span className="tabular opacity-70">{f.count}</span>
          </button>
        ))}
      </section>

      {/* Query list */}
      <section className="mb-10 space-y-3 sm:space-y-4">
        {filtered.map((row) => (
          <QueryCard key={row.id} row={row} />
        ))}
      </section>

      {/* Agencies ranking */}
      <section className="mb-10">
        <AgenciesRanking queries={queries} />
      </section>

      {/* Heatmap — desktop only, avoids horizontal scroll on mobile */}
      <section className="mb-10 hidden lg:block">
        <Heatmap queries={queries} />
      </section>

      <footer className="border-t border-line-hair pt-4 text-xs leading-relaxed text-ink-muted sm:pt-6">
        Relevé manuel de recherches réelles pour «&nbsp;Agence
        Principale&nbsp;» (La Rochelle). OUI signifie qu&rsquo;Agence
        Principale figure parmi les agences observées pour cette recherche ;
        NON signifie qu&rsquo;elle n&rsquo;y figure pas. Pas de score ni de
        position précise — les résultats varient selon le moteur, la
        localisation et le moment de la recherche.
      </footer>
    </main>
  );
}
