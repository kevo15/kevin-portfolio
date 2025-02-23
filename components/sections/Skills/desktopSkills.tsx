"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { icons, minigames } from "./SkillsData";

export const SkillsDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomGameIndex, setRandomGameIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setRandomGameIndex(Math.floor(Math.random() * minigames.length));
  }, [currentIndex]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + icons.length) % icons.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % icons.length);
  };

  const currentSkill = icons[currentIndex];
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

      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
            justifyContent: "center",
          }}
        >
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
          <GameComponent
            skillIcon={currentSkill.Icon}
            skillColor={currentSkill.color}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsDesktop;
