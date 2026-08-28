import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SolarSystem } from "@/components/SolarSystem";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tata Surya Interaktif — Planetarium Digital" },
      {
        name: "description",
        content:
          "Jelajahi 8 planet yang mengorbit Matahari lewat simulasi orbit interaktif: jarak, diameter, rotasi, revolusi, satelit, atmosfer, dan fakta menarik.",
      },
      { property: "og:title", content: "Tata Surya Interaktif — Planetarium Digital" },
      {
        property: "og:description",
        content:
          "Simulasi orbit 8 planet dengan data astronomi lengkap dan visual planetarium digital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="starfield" aria-hidden />
      <div className="nebula" aria-hidden />
      <div className="relative z-10">
        <Hero />
        <SolarSystem />
        <footer className="border-t border-border/60 px-4 py-8 text-center text-xs text-muted-foreground sm:px-6">
          Data astronomi merujuk pada NASA Planetary Fact Sheet.
        </footer>
      </div>
    </main>
  );
}
