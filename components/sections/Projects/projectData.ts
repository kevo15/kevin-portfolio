export interface ProjectData {
    projectTitle: string;
    projectDescription: string;
    projectLogo: string;
    personalLogo: string;
    projectLink: string;
    reversed?: boolean;
  }
  
  export const projectsData: ProjectData[] = [
    {
      projectTitle: "Premier Leaf Wellness App",
      projectDescription:
        "Contract Software Engineer – PremierLeaf, Dallas, TX. Developed a full-stack mobile application with React Native that enables professionals to manage self-care through personalized selfcare sprints. Implemented secure media upload and storage using Google Cloud Storage.",
      projectLogo: "/premierleaf.png",
      personalLogo: "/kevinmarkslogo.png",
      projectLink: "https://www.premierleaf.com",
      reversed: false,
    },
    {
      projectTitle: "Politimap",
      projectDescription:
        "Software Engineer Intern – Politimap, Houston, TX. Designed and developed a secure, user-friendly login interface with form validation and optimized MongoDB queries for seamless search performance. Integrated secure API endpoints using Mongoose.",
      projectLogo: "/politimap.png",
      personalLogo: "/kzlogo.png",
      projectLink: "https://www.politimap.com",
      reversed: true,
    },
    {
      projectTitle: "My Portfolio",
      projectDescription:
        "Software Engineering Project – React Portfolio Showcase. Built a responsive React web application with Material-UI to effectively display my projects, skills, and resume. Designed interactive, reusable UI components and optimized user experience across devices.",
      projectLogo: "/me2.png",
      personalLogo: "/kevinmarkslogo.png",
      projectLink: "/",
      reversed: false,
    },
  ];
  