"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { icons } from "./SkillsData";
import MazeGame from "../minigames/MazeGame";
import { motion, AnimatePresence } from "framer-motion";

const SkillsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSkill = icons[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + icons.length) % icons.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % icons.length);
  };

  return (
    <Box
      id="skills"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 4,
        paddingX: 2,
        gap: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000000",
          borderRadius: "48px",
          padding: "8px 16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "90%",
          mx: "auto",
          mb: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "4px",
            fontStyle: "italic",
            py: 1,
          }}
        >
          Skills Overview
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mb: 2,
        }}
      >
        <IconButton onClick={goToPrevious} aria-label="previous skill">
          <ChevronLeftIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />
        </IconButton>

        <Box
          sx={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSkill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href={currentSkill.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <currentSkill.Icon size={80} color={currentSkill.color} />
              </a>
            </motion.div>
          </AnimatePresence>
        </Box>

        <IconButton onClick={goToNext} aria-label="next skill">
          <ChevronRightIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />
        </IconButton>
      </Box>

      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "18px",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        {currentSkill.name}
      </Typography>

      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          width: "100%",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          mb: 6,
        }}
      >
        <MazeGame
          skillIcon={currentSkill.Icon}
          skillColor={currentSkill.color}
        />
      </Box>
    </Box>
  );
};

export default SkillsMobile;
