"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaJsSquare, FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PingPongGame from "../minigames/PingPongGame";
import MazeGame from "../minigames/MazeGame";
import FlappyBirdGame from "../minigames/FlappyBirdGame";
import SpaceInvaderGame from "../minigames/SpaceInvaderGame";

const icons = [
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

// Array of available mini-games.
const minigames = [
  { component: PingPongGame, name: "Ping Pong" },
  { component: MazeGame, name: "Maze" },
  { component: FlappyBirdGame, name: "Flappy Bird" },
  { component: SpaceInvaderGame, name: "Space Invader" },
];

export const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomGameIndex, setRandomGameIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // When currentIndex changes, randomly choose a new mini-game.
  useEffect(() => {
    setRandomGameIndex(Math.floor(Math.random() * minigames.length));
  }, [currentIndex]);

  // Simulate a load animation on mount.
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + icons.length) % icons.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % icons.length);
  };

  // Grab the current skill
  const currentSkill = icons[currentIndex];
  // Retrieve the random mini-game component based on our current selection.
  const GameComponent = minigames[randomGameIndex].component;

  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        width: "100%",
        margin: "auto",
        marginBottom: "200px",
        animation: isLoaded ? "fadeInLoad 1s ease-in-out" : "none",
        "@keyframes fadeInLoad": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#000000",
          borderRadius: "48px",
          padding: "10px 20px",
          marginBottom: "50px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "15px",
            fontSize: "64px",
            paddingX: "50px",
            paddingY: "10px",
            fontStyle: "italic",
          }}
        >
          Skills Overview
        </Typography>
      </Box>

      {/* Main content split into two columns */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          justifyContent: "space-between",
        }}
      >
        {/* Left side: Current Skill with horizontal navigation */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
            justifyContent: "center",
          }}
        >
          {/* Navigation row with left arrow, logo, right arrow */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <IconButton onClick={goToPrevious} aria-label="previous skill">
              <ChevronLeftIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />
            </IconButton>
            <Box
              sx={{
                borderRadius: "50%",
                width: 180,
                height: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 2,
              }}
            >
              <a
                href={currentSkill.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <currentSkill.Icon size={150} color={currentSkill.color} />
              </a>
            </Box>
            <IconButton onClick={goToNext} aria-label="next skill">
              <ChevronRightIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />
            </IconButton>
          </Box>
          {/* Skill name */}
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            {currentSkill.name}
          </Typography>
        </Box>

        {/* Right side: Mini Game container with white background */}
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "20px",
            width: "65%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Render the random mini-game component */}
          <GameComponent skillIcon={currentSkill.Icon} skillColor={currentSkill.color} />
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
