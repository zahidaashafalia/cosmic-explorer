export type Planet = {
  id: string;
  name: string;
  order: number;
  distance: string;
  diameter: string;
  rotation: string;
  revolution: string;
  moons: string;
  atmosphere: string;
  fact: string;
  /** orbit radius in % of the stage half-size */
  orbit: number;
  /** planet render size in px at desktop scale */
  size: number;
  /** seconds for a full revolution in the simulation */
  period: number;
  gradient: string;
  glow: string;
  ring?: boolean;
};

export const PLANETS: Planet[] = [
  {
    id: "merkurius",
    name: "Merkurius",
    order: 1,
    distance: "57,9 juta km (0,39 AU)",
    diameter: "4.879 km",
    rotation: "58,6 hari Bumi",
    revolution: "88 hari Bumi",
    moons: "Tidak ada",
    atmosphere: "Sangat tipis (eksosfer: natrium, oksigen, hidrogen)",
    fact: "Suhu permukaannya berayun ekstrem, dari 430 °C di siang hari hingga −180 °C di malam hari.",
    orbit: 13,
    size: 14,
    period: 8,
    gradient: "radial-gradient(circle at 32% 28%, #b8b3ad, #6b6560 55%, #2f2c29)",
    glow: "#a89f96",
  },
  {
    id: "venus",
    name: "Venus",
    order: 2,
    distance: "108,2 juta km (0,72 AU)",
    diameter: "12.104 km",
    rotation: "243 hari Bumi (retrograde)",
    revolution: "225 hari Bumi",
    moons: "Tidak ada",
    atmosphere: "Karbon dioksida tebal dengan awan asam sulfat",
    fact: "Planet terpanas di Tata Surya (±465 °C) akibat efek rumah kaca yang ekstrem.",
    orbit: 21,
    size: 22,
    period: 13,
    gradient: "radial-gradient(circle at 32% 28%, #f6e3b4, #d9a558 55%, #8a5a24)",
    glow: "#e8bd6d",
  },
  {
    id: "bumi",
    name: "Bumi",
    order: 3,
    distance: "149,6 juta km (1 AU)",
    diameter: "12.742 km",
    rotation: "23 jam 56 menit",
    revolution: "365,25 hari",
    moons: "1 (Bulan)",
    atmosphere: "Nitrogen 78%, oksigen 21%, argon & gas jejak",
    fact: "Satu-satunya planet yang diketahui memiliki air cair permanen dan kehidupan.",
    orbit: 29,
    size: 24,
    period: 20,
    gradient: "radial-gradient(circle at 30% 26%, #9fd8ff, #2f7fd6 45%, #0d3a78)",
    glow: "#4aa8ff",
  },
  {
    id: "mars",
    name: "Mars",
    order: 4,
    distance: "227,9 juta km (1,52 AU)",
    diameter: "6.779 km",
    rotation: "24 jam 37 menit",
    revolution: "687 hari Bumi",
    moons: "2 (Phobos, Deimos)",
    atmosphere: "Karbon dioksida tipis, sering diliputi badai debu",
    fact: "Memiliki Olympus Mons, gunung tertinggi di Tata Surya dengan tinggi ±22 km.",
    orbit: 37,
    size: 18,
    period: 28,
    gradient: "radial-gradient(circle at 32% 28%, #f0a179, #c1502a 52%, #6b2413)",
    glow: "#e0703f",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    order: 5,
    distance: "778,5 juta km (5,2 AU)",
    diameter: "139.820 km",
    rotation: "9 jam 56 menit",
    revolution: "11,9 tahun Bumi",
    moons: "95 (Io, Europa, Ganymede, Callisto, ...)",
    atmosphere: "Hidrogen dan helium dengan pita awan amonia",
    fact: "Bintik Merah Raksasa adalah badai selebar Bumi yang telah bertahan ratusan tahun.",
    orbit: 51,
    size: 46,
    period: 45,
    gradient:
      "radial-gradient(circle at 30% 26%, #f3ddc0, #cf9f6d 40%, #9a6a44 70%, #5c3a24)",
    glow: "#d9a06a",
  },
  {
    id: "saturnus",
    name: "Saturnus",
    order: 6,
    distance: "1,43 miliar km (9,58 AU)",
    diameter: "116.460 km",
    rotation: "10 jam 33 menit",
    revolution: "29,4 tahun Bumi",
    moons: "146 (Titan, Enceladus, Rhea, ...)",
    atmosphere: "Hidrogen, helium, jejak metana dan amonia",
    fact: "Kerapatannya lebih kecil dari air — Saturnus akan mengapung jika ada lautan sebesar itu.",
    orbit: 63,
    size: 40,
    period: 62,
    gradient: "radial-gradient(circle at 30% 26%, #f7e9c4, #dcc084 45%, #96754a)",
    glow: "#e5cf95",
    ring: true,
  },
  {
    id: "uranus",
    name: "Uranus",
    order: 7,
    distance: "2,87 miliar km (19,2 AU)",
    diameter: "50.724 km",
    rotation: "17 jam 14 menit (retrograde)",
    revolution: "84 tahun Bumi",
    moons: "28 (Titania, Oberon, Miranda, ...)",
    atmosphere: "Hidrogen, helium, dan metana yang memberi warna biru-hijau",
    fact: "Berputar hampir menggelinding: sumbu rotasinya miring sekitar 98°.",
    orbit: 76,
    size: 30,
    period: 82,
    gradient: "radial-gradient(circle at 30% 26%, #cdf6f4, #7fd4d8 48%, #2d7f92)",
    glow: "#7fd4d8",
  },
  {
    id: "neptunus",
    name: "Neptunus",
    order: 8,
    distance: "4,50 miliar km (30,1 AU)",
    diameter: "49.244 km",
    rotation: "16 jam 6 menit",
    revolution: "164,8 tahun Bumi",
    moons: "16 (Triton, Nereid, ...)",
    atmosphere: "Hidrogen, helium, metana; angin tercepat di Tata Surya",
    fact: "Angin di Neptunus dapat mencapai 2.100 km/jam, lebih cepat dari jet tempur.",
    orbit: 88,
    size: 29,
    period: 100,
    gradient: "radial-gradient(circle at 30% 26%, #a9c8ff, #3d63d6 48%, #16266e)",
    glow: "#4f76ff",
  },
];
