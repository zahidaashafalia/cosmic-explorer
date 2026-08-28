import { useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { PLANETS, type Planet } from "@/data/planets";
import { PlanetInfo } from "@/components/PlanetInfo";

export function SolarSystem() {
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [active, setActive] = useState<Planet | null>(null);

  const reset = () => {
    setActive(null);
    setPaused(false);
    setCycle((c) => c + 1);
  };

  return (
    <section id="tata-surya" className="relative px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl pt-16 text-center sm:pt-24">
          <p className="text-eyebrow">Planetarium digital</p>
          <h2 className="font-display mt-3 text-4xl leading-tight sm:text-6xl">
            Delapan planet, satu orbit hidup
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Setiap planet bergerak dengan kecepatan orbitnya sendiri. Klik sebuah planet
            untuk memfokuskan dan membuka data lengkapnya.
          </p>
        </header>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button className="btn-space" onClick={() => setPaused((p) => !p)}>
            {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
            {paused ? "Lanjutkan orbit" : "Hentikan orbit"}
          </button>
          <button className="btn-ghost-space" onClick={reset}>
            <RotateCcw className="size-4" />
            Reset simulasi
          </button>
        </div>

        <div className="relative mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-center">
          <div className="flex justify-center">
            <div
              key={cycle}
              className="orbit-stage"
              data-paused={paused || !!active}
              data-focused={active ? "true" : "false"}
            >
              <div className="sun" aria-hidden />
              <span className="sun-label">Matahari</span>

              {PLANETS.map((p) => (
                <div
                  key={p.id}
                  className="orbit-ring"
                  style={{ width: `${p.orbit * 2}%`, height: `${p.orbit * 2}%` }}
                >
                  <div
                    className="orbit-arm"
                    style={{ animationDuration: `${p.period}s` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      aria-label={`Lihat informasi ${p.name}`}
                      className="planet-btn"
                      data-active={active?.id === p.id}
                      data-dim={!!active && active.id !== p.id}
                      style={{
                        animationDuration: `${p.period}s`,
                        // @ts-expect-error custom props
                        "--planet-size": `${p.size}px`,
                        "--planet-glow": p.glow,
                        "--planet-surface": p.gradient,
                      }}
                    >
                      <span className="planet-body">
                        {p.ring && <span className="planet-ring" />}
                      </span>
                      <span className="planet-name">{p.name}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {active ? (
              <PlanetInfo planet={active} onBack={() => setActive(null)} />
            ) : (
              <div className="glass-panel w-full max-w-md p-6 sm:p-7">
                <p className="text-eyebrow">Panduan</p>
                <h3 className="font-display mt-2 text-3xl">Mulai dari sini</h3>
                <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                  {[
                    "Klik salah satu planet untuk mode fokus dengan efek zoom & glow.",
                    "Gunakan tombol hentikan/lanjutkan untuk membekukan orbit.",
                    "Reset mengembalikan seluruh planet ke posisi awal.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-4 gap-2">
                  {PLANETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActive(p)}
                      className="chip-space"
                      style={{
                        // @ts-expect-error custom props
                        "--planet-glow": p.glow,
                      }}
                    >
                      {p.name.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
