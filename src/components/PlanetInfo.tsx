import { ArrowLeft } from "lucide-react";
import type { Planet } from "@/data/planets";

const rows = (p: Planet) => [
  ["Urutan dari Matahari", `Planet ke-${p.order}`],
  ["Jarak dari Matahari", p.distance],
  ["Diameter", p.diameter],
  ["Rotasi", p.rotation],
  ["Revolusi", p.revolution],
  ["Satelit alami", p.moons],
  ["Atmosfer", p.atmosphere],
];

export function PlanetInfo({ planet, onBack }: { planet: Planet; onBack: () => void }) {
  return (
    <aside
      key={planet.id}
      className="glass-panel animate-panel-in pointer-events-auto w-full max-w-md p-6 sm:p-7"
    >
      <button onClick={onBack} className="btn-ghost-space mb-5 gap-2">
        <ArrowLeft className="size-4" />
        Seluruh Tata Surya
      </button>

      <p className="text-eyebrow">Planet ke-{planet.order}</p>
      <h2
        className="font-display mt-1 text-4xl leading-none tracking-tight sm:text-5xl"
        style={{ textShadow: `0 0 34px ${planet.glow}66` }}
      >
        {planet.name}
      </h2>
      <div
        className="mt-4 h-px w-24"
        style={{ background: `linear-gradient(90deg, ${planet.glow}, transparent)` }}
      />

      <dl className="mt-5 divide-y divide-border/60">
        {rows(planet).map(([label, value]) => (
          <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-2.5">
            <dt className="text-xs tracking-wide text-muted-foreground uppercase">
              {label}
            </dt>
            <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 rounded-xl border border-border/70 bg-accent/40 p-4">
        <p className="text-eyebrow">Fakta menarik</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{planet.fact}</p>
      </div>
    </aside>
  );
}
