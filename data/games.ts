export interface Game {
  slug: string;
  title: string;
  studio: string;
  status: string;
  platforms: string[];
  tagline: string;
  description: string;
  logo: string;
  video: string;
  poster: string;
  features: { title: string; body: string }[];
  tech: string[];
  testerGroupUrl: string;
  /** Leave empty until the production listing is live; the Play badge is hidden until then. */
  playStoreUrl: string;
  privacyUrl: string;
  termsUrl: string;
}

export const games: Game[] = [
  {
    slug: "shadow-sprinter",
    title: "Shadow Sprinter",
    studio: "KmGameForge",
    status: "Closed beta",
    platforms: ["Android"],
    tagline:
      "Outrun your shadow in a 2D action platformer where your past moves become your allies.",
    description:
      "Shadow Sprinter is a mobile-first 2D action platformer. Sprint and jump through hand-built levels, past enemies, and use shadow clones that replay your earlier moves to solve puzzles. Race the clock to beat each level's par time and unlock titles as you go.",
    logo: "/games/shadow-sprinter/logo.png",
    video: "/games/shadow-sprinter/gameplay.mp4",
    poster: "/games/shadow-sprinter/poster.jpg",
    features: [
      {
        title: "Shadow clone puzzles",
        body: "Shadow clones replay your earlier moves, so every run you make becomes part of the puzzle.",
      },
      {
        title: "30 levels in the beta",
        body: "Hand-built levels across multiple worlds, starting in the village and heading into the forest.",
      },
      {
        title: "Race the par time",
        body: "Every level has a par time to beat if you want to master it, not just finish it.",
      },
      {
        title: "32 titles to unlock",
        body: "Earn and equip titles like Initiate and Village Runner by clearing levels and hitting par times.",
      },
      {
        title: "Physics-based movement",
        body: "Tight running and jumping with real-time collision detection and enemy AI.",
      },
    ],
    tech: ["React Native", "Expo", "Google Play"],
    testerGroupUrl: "https://groups.google.com/g/shadow-sprinter-testers",
    playStoreUrl: "",
    privacyUrl: "https://kevo15.github.io/privacy.html",
    termsUrl: "https://kevo15.github.io/terms.html",
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
