interface CaseStudy {
  id: string;
  title: string;
  logo: string;
  overview: {
    missionStatement: string;
    targetAudience: string;
  };
  contributions: string;
  techStack: string[];
  toolsUsed: string[];
  challengesAndSolutions: string;
  resultsAndImpact: string;
  keyTakeawaysAndFutureImprovements: string;
  conclusion: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "0",
    title: "Project Alpha",
    logo: "/kevinmarkslogo.png",
    overview: {
      missionStatement:
        "To revolutionize the way users interact with technology through innovative design.",
      targetAudience: "Tech enthusiasts and early adopters",
    },
    contributions: "My contributions: [Details to be added]",
    techStack: ["React", "Node.js", "TypeScript"],
    toolsUsed: ["VSCode", "Git", "Docker"],
    challengesAndSolutions:
      "Encountered scalability issues which were resolved by refactoring key components.",
    resultsAndImpact: "Results: [Details to be added]",
    keyTakeawaysAndFutureImprovements:
      "Key learnings include improved performance and future improvements will focus on enhanced user experience.",
    conclusion:
      "Project Alpha successfully demonstrated our capability to deliver innovative and robust solutions.",
  },
  {
    id: "1",
    title: "Project Beta",
    logo: "/kevinmarkslogo.png",
    overview: {
      missionStatement:
        "To create an intuitive platform that simplifies complex workflows.",
      targetAudience: "Businesses and enterprise users",
    },
    contributions: "My contributions: [Details to be added]",
    techStack: ["Angular", "Express.js", "MongoDB"],
    toolsUsed: ["WebStorm", "Jira", "Postman"],
    challengesAndSolutions:
      "Faced integration challenges which were overcome by implementing modular design principles.",
    resultsAndImpact: "Results: [Details to be added]",
    keyTakeawaysAndFutureImprovements:
      "Key takeaways involve the importance of modularity, with plans to further optimize system performance.",
    conclusion:
      "Project Beta underscores our commitment to solving complex business problems with elegant solutions.",
  },
  {
    id: "2",
    title: "Project Gamma",
    logo: "/kevinmarkslogo.png",
    overview: {
      missionStatement:
        "To empower users by providing a seamless, user-friendly application experience.",
      targetAudience: "General consumers seeking efficiency in daily tasks",
    },
    contributions: "My contributions: [Details to be added]",
    techStack: ["Vue.js", "Firebase", "Sass"],
    toolsUsed: ["Figma", "Slack", "GitHub"],
    challengesAndSolutions:
      "Encountered real-time data synchronization issues which were resolved with Firebase’s advanced features.",
    resultsAndImpact: "Results: [Details to be added]",
    keyTakeawaysAndFutureImprovements:
      "Key takeaways include the necessity of thorough testing; future improvements will target increased stability and scalability.",
    conclusion:
      "Project Gamma proved to be a valuable learning experience and a testament to our ability to innovate under pressure.",
  },
];

export default caseStudies;
