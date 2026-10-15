import { FaJava, FaJsSquare, FaPython, FaReact, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGooglecloud,
} from "react-icons/si";
import PingPongGame from "../minigames/PingPongGame";
import MazeGame from "../minigames/MazeGame";
import FlappyBirdGame from "../minigames/FlappyBirdGame";
import SpaceInvaderGame from "../minigames/SpaceInvaderGame";

// Skills that can be "played" in the arcade; each icon becomes the game sprite.
export const icons = [
  { Icon: FaJava, color: "#E76F00", name: "Java" },
  { Icon: SiSpringboot, color: "#6DB33F", name: "Spring Boot" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: FaJsSquare, color: "#E0C210", name: "JavaScript" },
  { Icon: FaReact, color: "#149ECA", name: "React" },
  { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { Icon: FaPython, color: "#3776AB", name: "Python" },
  { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiGraphql, color: "#E10098", name: "GraphQL" },
  { Icon: SiDocker, color: "#2496ED", name: "Docker" },
  { Icon: FaAws, color: "#FF9900", name: "AWS" },
  { Icon: SiGooglecloud, color: "#4285F4", name: "Google Cloud" },
];

export const minigames = [
  { component: PingPongGame, name: "Ping Pong" },
  { component: MazeGame, name: "Maze" },
  { component: FlappyBirdGame, name: "Flappy Bird" },
  { component: SpaceInvaderGame, name: "Space Invaders" },
];
