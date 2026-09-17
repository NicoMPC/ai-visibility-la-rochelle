"use client";

import { useMemo, useState } from "react";
import { QueryRow, queries } from "@/data/queries";
import AgenciesRanking from "./AgenciesRanking";

type Filter = "all" | "yes" | "no";

function QueryCard({ row }: { row: QueryRow }) {
  return (
    <article
      className={
        "rounded-xl border p-4 sm:p-5 " +
        (row.visible
          ? "border-line-hair bg-surface"
          : "border-status-critical/30 bg-status-critical/[0.04]")
      }
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold leading-snug text-ink-primary sm:text-base">
          {row.query}
        </h3>
        <span
          className={
            "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold " +
            (row.visible
              ? "bg-status-good/10 text-status-good"
              : "bg-status-critical/10 text-status-critical")
          }
        >
          <span
            className={
              "h-1.5 w-1.5 rounded-full " +
              (row.visible ? "bg-status-good" : "bg-status-critical")
            }
          />
          {row.visible ? "OUI" : "NON"}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-ink-secondary">
        <span className="text-ink-muted">Autres acteurs visibles : </span>
        {row.agencies.join(" · ")}
      </p>
    </article>
  );
}

export default function Dashboard() {
  const [filter, setFilter] = useState<Filter>("all");

  const yesCount = queries.filter((q) => q.visible).length;
  const noCount = queries.length - yesCount;

  const filtered = useMemo(() => {
    if (filter === "yes") return queries.filter((q) => q.visible);
    if (filter === "no") return queries.filter((q) => !q.visible);
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
          Benchmark de visibilité — recherches immobilières orientées vendeur
        </p>
      </header>

      {/* KPI */}
      <section className="mb-5 grid grid-cols-2 gap-3 sm:mb-10 sm:gap-5">
        <div className="rounded-xl border border-status-good/30 bg-status-good/[0.04] p-4 sm:p-6">
          <p className="tabular text-3xl font-bold text-status-good sm:text-5xl">
            {yesCount}
            <span className="text-lg font-semibold text-ink-muted sm:text-2xl">
              /{queries.length}
            </span>
          </p>
          <p className="mt-1 text-xs font-medium text-ink-secondary sm:text-sm">
            requêtes où Agence Principale est visible
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
            requêtes où elle n&rsquo;est pas visible
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

      {/* Agencies visible in the results — secondary section */}
      <section className="mb-10">
        <AgenciesRanking queries={queries} />
      </section>

      <footer className="border-t border-line-hair pt-4 text-xs leading-relaxed text-ink-muted sm:pt-6">
        <p className="font-semibold text-ink-secondary">Méthodologie</p>
        <p className="mt-1.5">
          Benchmark réalisé à partir de recherches web locales portant sur des
          intentions de vente immobilière à La Rochelle. La présence est
          considérée comme OUI lorsqu&rsquo;Agence Principale apparaît dans
          les résultats observés pour la requête, et NON lorsqu&rsquo;elle
          n&rsquo;y apparaît pas. Les résultats des moteurs peuvent varier
          selon le moment, l&rsquo;appareil, la localisation et la
          personnalisation. Ce benchmark ne constitue pas une garantie de
          positionnement Google ni de réponse ChatGPT.
        </p>
      </footer>
    </main>
  );
}
