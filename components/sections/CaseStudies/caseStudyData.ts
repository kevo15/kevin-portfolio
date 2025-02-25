interface CaseStudy {
  id: string;
  title: string;
  logo: string;
  overview: {
    missionStatement: string;
    targetAudience: string;
  };
  contributions: {
    title: string;
    details: string[];
  }[];
  techStack: string[];
  toolsUsed: string[];
  challengesAndSolutions: {
    title: string;
    problem: string[];
    solution: string[];
  }[];
  resultsAndImpact: string;
  keyTakeawaysAndFutureImprovements: string;
  conclusion: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "premierleaf-wellness-app-case-study",
    title: "Premier Leaf Wellness App",
    logo: "/premierleaf.png",
    overview: {
      missionStatement:
        "Helping busy professionals beat burnout, prioritize self-care, and reclaim their energy—all in less than 15 minutes a day.",
      targetAudience:
        "High-achieving and driven professionals looking for effective self-care solutions.",
    },
    contributions: [
      {
        title: "Full Stack Implementation",
        details: [
          "Developed a detailed Task page that tracks the current task including its status, type, and rendering components.",
          "Created a Questionnaire page for user feedback at account creation to offer tailored health objectives.",
          "Built a Profile page allowing users to log out when done for the day and update their information.",
        ],
      },
      {
        title: "Feature Planning and Team Collaboration",
        details: [
          "Collaborated with a team of three to plan the app, overcome challenges in mobile development, address technical bottlenecks, and meet deadlines.",
        ],
      },
      {
        title: "Data Management",
        details: [
          "Utilized GraphQL for efficient data storage and retrieval.",
          "Integrated Google Cloud Storage for rendering video instructions, music, and images as guides throughout self-care sprints.",
        ],
      },
    ],
    techStack: [
      "React Native",
      "GraphQL Apollo Server",
      "Google Firebase",
      "Google Cloud Storage",
      "Jest",
      "Github",
    ],
    toolsUsed: ["Figma", "Jira", "Slack", "Github"],
    challengesAndSolutions: [
      {
        title: "Implementing Task for a Smooth App Flow",
        problem: [
          "Coordinating multiple services (TaskService, UserService)",
          "Managing asynchronous operations while retrieving and mapping data",
          "Translating complex backend logic into GraphQL resolvers",
        ],
        solution: [
          "Used TypeDI for clean dependency injection, ensuring services are properly integrated.",
          "Implemented async functions with proper instrumentation to handle calls and responses effectively.",
          "Designed dedicated resolver methods for data retrieval and error handling.",
        ],
      },
      {
        title: "Adjusting User Sprint Framework to Improve Functionality",
        problem: [
          "Managing scenarios where expected data (like sprint or task IDs) is missing or invalid.",
          "Combining data from several asynchronous service calls to build comprehensive responses.",
        ],
        solution: [
          "Implemented custom exceptions and validations to provide clear error feedback.",
          "Utilized async/await and Promise.all to efficiently perform parallel data retrieval and mapping.",
        ],
      },
    ],
    resultsAndImpact:
      "Delivered a fully functional mobile app that enables users to manage self-care, track milestones, and complete guided sprints. The integration of Google Cloud services ensured smooth media implementation, and the scalable architecture allows for future feature additions. The project was delivered on time, meeting business requirements and providing a high-quality, user-friendly experience.",
    keyTakeawaysAndFutureImprovements:
      "Gained enhanced proficiency in GraphQL Apollo Server, React Native, Google Cloud, and Firebase Authentication, while improving team collaboration and problem-solving skills. Future improvements include updates based on user feedback, integration of notification support, and more developed self-care sprint recommendations.",
    conclusion:
      "The PremierLeaf Wellness Mobile App project provided extensive experience in full-stack mobile development, collaborative teamwork, and feature-driven implementation. By integrating modern technologies and ensuring scalability, the project highlights technical proficiency, innovative problem-solving skills, and the ability to deliver robust, user-centric solutions in a fast-paced environment.",
  },
  {
    id: "my-portfolio-case-study",
    title: "My Personal Portfolio",
    logo: "/me.png",
    overview: {
      missionStatement:
        "Showcasing innovative web apps that simplify complexity and spark creativity.",
      targetAudience:
        "Potential clients, employers, and collaborators seeking innovative web development solutions.",
    },
    contributions: [
      {
        title: "Design and Layout",
        details: [
          "Crafted a cohesive and modern UI by selecting a balanced color theme that enhances readability and visual appeal.",
          "Incorporated unique design elements, including a mini-game, to engage users and add an interactive, playful touch to the portfolio.",
        ],
      },
      {
        title: "Web Page Creation and Implementation",
        details: [
          "Developed responsive and user-friendly web pages using modern frameworks and best practices.",
          "Implemented a dynamic sidebar for intuitive navigation, ensuring seamless integration of interactive components and a smooth user experience.",
        ],
      },
      {
        title: "Deployment",
        details: [
          "Streamlined the deployment process by leveraging Vercel, enabling fast, reliable hosting with continuous integration.",
          "Utilized automated builds and environment variables to ensure consistency and scalability across updates.",
        ],
      },
    ],
    techStack: ["Next.js", "React Native", "ESLint", "Prettier", "Material UI"],
    toolsUsed: ["Jira", "Uizard", "Github", "Vercel"],
    challengesAndSolutions: [
      {
        title: "Minigame Implementation",
        problem: [
          "Identifying engaging minigames that align with a mobile-first design philosophy.",
          "Developing original minigame logic from scratch while ensuring seamless integration with the existing UI.",
        ],
        solution: [
          "Researched user engagement trends and brainstormed interactive concepts that enhance the portfolio experience without detracting from its professional purpose.",
          "Engineered custom game modules with modular, reusable code and integrated them into the app using best practices for mobile performance and responsiveness.",
        ],
      },
      {
        title: "Time Constraints",
        problem: [
          "The idea of creating a portfolio website was introduced at the last minute, requiring rapid conceptualization and development.",
          "Balancing work on multiple projects simultaneously.",
          "Maintaining academic commitments while managing a demanding project workload.",
        ],
        solution: [
          "Prioritized tasks by employing agile methodologies and setting clear, achievable milestones to accommodate the last-minute idea.",
          "Adopted a context-switching approach by dedicating focused two-hour intervals to each project with scheduled 15-minute breaks to maximize productivity.",
          "Implemented rigorous time management strategies to ensure that academic and project deadlines were consistently met.",
        ],
      },
      {
        title: "Ensuring a Mobile Friendly Transition",
        problem: [
          "Adapting design elements and interactive components to maintain usability and visual appeal on smaller screens.",
        ],
        solution: [
          "Conducted thorough testing across various mobile devices and screen sizes to identify and resolve layout inconsistencies.",
          "Utilized responsive design techniques and media queries to ensure that navigation, content, and interactive elements adjusted fluidly to mobile environments.",
        ],
      },
    ],
    resultsAndImpact:
      "The project was successfully completed in time for the career fair, serving as a comprehensive showcase of my technical skills, strong work ethic, and deep passion for innovation. It highlights the extensive effort and attention to detail invested in each component, reflecting my commitment to excellence and continuous professional growth.",
    keyTakeawaysAndFutureImprovements:
      "Key takeaways from this project include the critical importance of modular design and the opportunity to deepen my expertise in Next.js and Material UI. I gained valuable insights into building engaging, user-friendly minigames and refined my skills in planning effective webpage layouts. Looking ahead, I plan to incorporate additional projects into my portfolio as I continue to learn and innovate, further optimizing system performance and enhancing the overall user experience.",
    conclusion:
      "My personal portfolio exemplifies my commitment to tackling complex challenges with innovative solutions. Leveraging Next.js and Material UI, I built a responsive platform that balances creativity and performance. This project honed my skills in modular design, time management, and agile development, fueling my continuous drive for excellence as I expand my portfolio.",
  },
  {
    id: "politimap-case-study",
    title: "Senior Design Project Politimap",
    logo: "/politimap.png",
    overview: {
      missionStatement:
        "Empowering citizens to search, learn about, and engage with politicians—bringing clarity and transparency to political participation.",
      targetAudience:
        "Civic-minded citizens, active voters, community organizers, educators, and journalists who are eager to gain detailed insights into political figures and enhance local political transparency and engagement.",
    },
    contributions: [
      {
        title: "UI Design",
        details: [
          "Conceptualized and implemented a professional, user-friendly login screen based on high-fidelity designs from Uizard, ensuring responsive design across devices.",
          "Developed a visually engaging search interface from Uizard mockups, incorporating iterative feedback and usability testing to enhance overall user experience.",
        ],
      },
      {
        title: "Search Query and Implementation",
        details: [
          "Engineered comprehensive MongoDB queries to accurately pull detailed political profiles, ensuring optimal data retrieval performance.",
          "Implemented robust filtering mechanisms that seamlessly integrate with the queries, allowing users to fine-tune search results.",
        ],
      },
    ],
    techStack: [
      "React Native",
      "Firebase",
      "MongoDB",
      "Python",
      "SpaCy",
      "Open AI",
      "LLaMA",
    ],
    toolsUsed: ["Slack", "GitHub", "Jira", "Uizard"],
    challengesAndSolutions: [
      {
        title: "Dynamic Data Extraction",
        problem: [
          "Identifying a suitable tool for robust data extraction and processing.",
          "Rapidly acquiring the necessary skills to effectively utilize the chosen tool.",
          "Seamlessly integrating the tool with a MongoDB database to ensure accurate data retrieval.",
        ],
        solution: [
          "Conducted thorough research on LLaMA, OpenAI, and SpaCy, ultimately selecting LLaMA as the optimal solution for our needs.",
          "Utilized comprehensive documentation and community resources to quickly build proficiency and implement best practices.",
          "Established a reliable connection to MongoDB, ensuring that dynamic data extraction was both efficient and scalable.",
        ],
      },
      {
        title: "Team Collaboration and Onboarding",
        problem: [
          "Adapting to a new tech stack while collaborating with a diverse team for the first time.",
          "Coordinating effectively with team members to align on project goals and technical approaches.",
        ],
        solution: [
          "Engaged in intensive learning and hands-on experimentation to quickly master the new technologies, while leveraging team workshops and code reviews for mutual support.",
          "Implemented clear communication strategies and agile methodologies to streamline collaboration, ensuring that project milestones were met and technical challenges were resolved collectively.",
        ],
      },
    ],
    resultsAndImpact:
      "The project is in its final development stages, with plans to deploy a beta version by mid-March 2025. This beta release will allow us to gather comprehensive user feedback, refine key features, and optimize system performance. By analyzing early user interactions and insights, we aim to implement data-driven improvements to ensure the final product is robust, user-centric, and ready for market adoption.",
    keyTakeawaysAndFutureImprovements:
      "Enhanced teamwork and communication skills through collaborative project work and exposure to new technologies such as React Native, Jira, SpaCy, and MongoDB. This experience reinforced the value of team projects during school, leading to increased contributions across multiple initiatives. Future improvements will focus on integrating user feedback to refine the app, with the goal of presenting a polished senior design project by the end of the semester.",
    conclusion:
      "Politimap has provided a significant learning experience, substantially enhancing my technical skills and deepening my passion for coding. The project has not only refined my ability to work with modern technologies and frameworks but also reinforced the value of collaboration and continuous improvement in software development.",
  },
];

export default caseStudies;
