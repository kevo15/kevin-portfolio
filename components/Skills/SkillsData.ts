// skillsData.ts
import {
  FaJsSquare,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiMui,
  SiGraphql,
  SiMongodb,
  SiGooglecloud,
  SiJira,
  SiNotion,
} from "react-icons/si";
import PingPongGame from "../minigames/PingPongGame";
import MazeGame from "../minigames/MazeGame";
import FlappyBirdGame from "../minigames/FlappyBirdGame";
import SpaceInvaderGame from "../minigames/SpaceInvaderGame";

export const icons = [
  {
    Icon: FaJsSquare,
    color: "#F7DF1E",
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    Icon: FaPython,
    color: "#3776AB",
    name: "Python",
    link: "https://www.python.org",
  },
  {
    Icon: SiCplusplus,
    color: "#00599C",
    name: "C++",
    link: "https://isocpp.org",
  },
  {
    Icon: FaCss3Alt,
    color: "#2965F1",
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    Icon: FaHtml5,
    color: "#E34F26",
    name: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    name: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  {
    Icon: FaReact,
    color: "#61DAFB",
    name: "React",
    link: "https://reactjs.org",
  },
  {
    Icon: SiGraphql,
    color: "#E10098",
    name: "GraphQL",
    link: "https://graphql.org",
  },
  {
    Icon: SiMui,
    color: "#0081CB",
    name: "Material-UI",
    link: "https://mui.com",
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    name: "MongoDB",
    link: "https://www.mongodb.com",
  },
  {
    Icon: SiGooglecloud,
    color: "#4285F4",
    name: "Google Cloud Platform",
    link: "https://cloud.google.com",
  },
  {
    Icon: SiJira,
    color: "#0052CC",
    name: "Jira",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    Icon: SiNotion,
    color: "#000000",
    name: "Notion",
    link: "https://www.notion.so",
  },
];

export const minigames = [
  { component: PingPongGame, name: "Ping Pong" },
  { component: MazeGame, name: "Maze" },
  { component: FlappyBirdGame, name: "Flappy Bird" },
  { component: SpaceInvaderGame, name: "Space Invader" },
];
