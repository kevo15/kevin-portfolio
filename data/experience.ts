// Mirrors resume/resume.html; keep the two in sync when updating.

export interface ExperienceProject {
  name: string;
  link?: string;
  caseStudy?: string;
  tech?: string[];
  bullets: string[];
}

export interface ExperienceRole {
  company: string;
  title: string;
  dates: string;
  note?: string;
  projects: ExperienceProject[];
}

export const experience: ExperienceRole[] = [
  {
    company: "SkillStorm",
    title: "Full Stack Java Developer",
    dates: "April 2026 – Present",
    note: "Consultant to Ernst & Young LLP (EY), Consulting practice — August 2026 – Present",
    projects: [
      {
        name: "Client Engagement & Staffing Platform",
        tech: [
          "Spring Boot microservices",
          "Spring Security",
          "RabbitMQ",
          "AWS",
          "Docker",
          "ECS/ECR",
          "GitHub Actions",
        ],
        bullets: [
          "Designed three independently deployable Spring Boot microservices (Client, Engagement, Staffing), each owning its own database, with role-based access separating Engagement Managers from Consultants.",
          "Coordinated services synchronously with Spring RestClient and asynchronously with RabbitMQ staffing events, decoupling notifications from the core assignment workflow.",
          "Containerized services with Docker, published images to Amazon ECR, and deployed through ECS with a GitHub Actions CI/CD pipeline.",
        ],
      },
      {
        name: "Personal Retirement Goal Planner",
        tech: [
          "Spring Boot",
          "Spring Security",
          "JWT",
          "PostgreSQL",
          "AWS",
          "JUnit",
          "Vitest",
        ],
        bullets: [
          "Delivered a multi-user retirement planning platform with strict per-user data isolation, deployed to Elastic Beanstalk, RDS, and S3 + CloudFront.",
          "Implemented stateless JWT authentication with a custom validation filter and BCrypt hashing, replacing session-based login.",
          "Modeled goals, funding sources, and contributions in PostgreSQL with Spring Data JPA; covered edge cases with JUnit and Vitest/Jest suites.",
        ],
      },
      {
        name: "Investment Goal Tracker",
        link: "https://github.com/kevo15/investment-goal-tracker",
        tech: ["Spring Boot", "PostgreSQL", "JavaScript"],
        bullets: [
          "Built a Spring Boot + PostgreSQL app for managing investment goals across five categories with priorities and target dates.",
          "Created a sortable, responsive dashboard with configurable block/warn validation for past dates and negative values.",
        ],
      },
    ],
  },
  {
    company: "ArkaTech",
    title: "Software Engineer Intern/I",
    dates: "January 2024 – December 2025",
    projects: [
      {
        name: "PolitiMap Platform",
        link: "https://politimap.vercel.app/",
        caseStudy: "/projects/politimap-case-study",
        bullets: [
          "Improved sign-in completion and onboarding by engineering a secure, user-friendly login with inline validation, reducing friction and cutting down on password-reset requests.",
          "Delivered smoother search scale by optimizing complex MongoDB/Mongoose queries and indexes, decreasing perceived wait time and stabilizing performance under heavy load.",
          "Increased relevance and engagement by building real-time search APIs on MongoDB, enabling instant results.",
        ],
      },
      {
        name: "PremierLeaf Wellness Suite",
        link: "https://www.pmleaf.com/",
        caseStudy: "/projects/premierleaf-wellness-app-case-study",
        bullets: [
          "Enabled better habit adherence and tracking by delivering a full-stack React Native app for managing self-care sprints.",
          "Reduced overhead maintenance by designing and documenting a clear architecture component hierarchy, data flow, and conventions so features ship faster and stay consistent.",
          "Improved content reliability and privacy by implementing secure media uploads to Google Cloud Storage with in-app file management.",
        ],
      },
    ],
  },
];

export const education = {
  school: "Prairie View A&M University",
  degree: "B.S. Computer Science",
  date: "May 2025",
};

export const certifications = [
  { name: "Oracle Certified Professional: Java SE 17 Developer", status: "" },
  { name: "Oracle Certified Associate, Java SE 8 Programmer", status: "" },
  { name: "Spring Certified Professional", status: "In progress" },
];
