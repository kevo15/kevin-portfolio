export interface Project {
  id: string;
  title: string;
  summary: string;
  image?: string;
  imageBg?: string;
  /** Fill the card's image area instead of centering a logo in it. */
  imageCover?: boolean;
  tags: string[];
  /** Internal case study route, if one exists. */
  caseStudy?: string;
  /** Button label for the internal link; defaults to "Case study". */
  caseStudyLabel?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "shadow-sprinter",
    title: "Shadow Sprinter",
    summary:
      "A mobile 2D action platformer with shadow-clone replay puzzles, physics-based movement, and enemy AI. 30 levels, now in closed beta on Google Play.",
    image: "/games/shadow-sprinter/logo.png",
    imageCover: true,
    tags: ["React Native", "Expo", "Game Dev", "Google Play"],
    caseStudy: "/games/shadow-sprinter",
    caseStudyLabel: "Play the beta",
  },
  {
    id: "premierleaf",
    title: "PremierLeaf Wellness Suite",
    summary:
      "A full-stack React Native app that helps busy professionals manage self-care through guided sprints, with secure media storage on Google Cloud.",
    image: "/premierleaf.png",
    imageBg: "#103831",
    tags: ["React Native", "GraphQL", "Google Cloud Storage", "Firebase"],
    caseStudy: "/projects/premierleaf-wellness-app-case-study",
    liveUrl: "https://www.pmleaf.com/",
    featured: true,
  },
  {
    id: "politimap",
    title: "PolitiMap",
    summary:
      "A civic platform for researching politicians. I built the secure login flow and optimized MongoDB search queries and real-time search APIs.",
    image: "/politimap.png",
    imageBg: "#25324d",
    tags: ["React Native", "MongoDB", "Mongoose", "Python"],
    caseStudy: "/projects/politimap-case-study",
    liveUrl: "https://politimap.vercel.app/",
    featured: true,
  },
  {
    id: "client-engagement-platform",
    title: "Client Engagement & Staffing Platform",
    summary:
      "Distributed Spring Boot microservices for clients, engagements, and staffing, with RabbitMQ events and role-based access, deployed to AWS ECS through GitHub Actions.",
    tags: ["Java", "Spring Boot", "RabbitMQ", "Docker", "AWS"],
    featured: true,
  },
  {
    id: "retirement-goal-planner",
    title: "Personal Retirement Goal Planner",
    summary:
      "A multi-user planning app with JWT authentication, per-user data isolation, and a PostgreSQL model of goals, funding sources, and contributions, deployed to AWS.",
    tags: ["Java", "Spring Security", "JWT", "PostgreSQL", "AWS"],
  },
  {
    id: "investment-goal-tracker",
    title: "Investment Goal Tracker",
    summary:
      "A Spring Boot and PostgreSQL dashboard for tracking investment goals by category, priority, and target date, with configurable validation rules.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JavaScript"],
    repoUrl: "https://github.com/kevo15/investment-goal-tracker",
  },
  {
    id: "personal-website",
    title: "This Website",
    summary:
      "My personal site, built with Next.js, TypeScript, and Material UI, with a custom theme, responsive layouts, and a few playable mini-games.",
    image: "/kevinmarkslogo.png",
    imageBg: "#0e0e0f",
    tags: ["Next.js", "TypeScript", "Material UI", "Vercel"],
    caseStudy: "/projects/my-portfolio-case-study",
    repoUrl: "https://github.com/kevo15/kevin-portfolio",
  },
];
