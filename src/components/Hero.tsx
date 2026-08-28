import { ChevronDown } from "lucide-react";
import earthHero from "@/assets/earth-hero.jpg";

const NAV = [
  { label: "Planet", href: "#tata-surya" },
  { label: "Orbit", href: "#tata-surya" },
  { label: "Data", href: "#tata-surya" },
];

export function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/60 py-5 sm:flex sm:justify-between">
          <a href="#" className="min-w-0 truncate text-lg font-semibold tracking-tight">
            tata<span className="text-primary">surya</span>
          </a>
          <div className="flex shrink-0 items-center gap-5">
            <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} className="nav-link">
                  {n.label}
                </a>
              ))}
            </div>
            <a href="#tata-surya" className="btn-space">
              Jelajahi
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-2xl pt-14 pb-[38vw] text-center sm:pt-20 sm:pb-[30vw]">
          <p className="text-eyebrow">Planet</p>
          <h1 className="font-display mt-3 text-6xl leading-[0.9] tracking-tight sm:text-8xl">
            BUMI
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Pelajari rumah kita dan tujuh planet lain yang mengorbit Matahari. Simulasi
            orbit interaktif, data astronomi, dan fakta menarik dalam satu planetarium
            digital.
          </p>
          <a href="#tata-surya" className="btn-hero mt-8">
            Mulai Menjelajah
          </a>
        </div>
      </div>

      <img
        src={earthHero}
        alt="Lengkung Bumi dengan cahaya atmosfer biru dilihat dari luar angkasa"
        width={1600}
        height={912}
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60vw] w-full object-cover object-top opacity-90 mask-earth sm:h-[46vw]"
      />
      <a
        href="#tata-surya"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-border/70 bg-card/50 p-2 backdrop-blur-md transition-transform hover:translate-y-1"
        aria-label="Gulir ke simulasi tata surya"
      >
        <ChevronDown className="size-5 text-foreground" />
      </a>
    </header>
  );
}
