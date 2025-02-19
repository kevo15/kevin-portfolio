"use client";

import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      id="about"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        paddingBottom: "100px",
      }}
    >
      <Box
        component={motion.img}
        src="/headshot.png"
        alt="Kevin Marks"
        variants={childVariants}
        sx={{
          height: isMobile ? { xs: "200px", sm: "300px", md: "400px" } : "640px",
          width: "auto",
          marginBottom: isMobile ? 3 : 0,
          marginRight: isMobile ? 0 : { md: "50px", lg: "200px" },
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <Box
        component={motion.div}
        variants={childVariants}
        sx={{
          textAlign: isMobile ? "center" : "left",
          maxWidth: isMobile ? { xs: "90%", sm: "80%" } : "800px",
        }}
      >
        <Typography
          component={motion.div}
          variants={childVariants}
          sx={{
            marginBottom: 2,
            fontSize: isMobile ? { xs: "28px", sm: "36px", md: "48px" } : "64px",
            fontWeight: "800",
            fontStyle: "italic",
          }}
        >
          Behind The Code
        </Typography>

        <Typography
          component={motion.div}
          variants={childVariants}
          sx={{
            fontSize: isMobile ? { xs: "16px", sm: "18px", md: "20px" } : "22px",
            lineHeight: isMobile ? { xs: "1.2", sm: "1.3", md: "1.5" } : "1.5",
            fontWeight: "500",
          }}
        >
          Hi, I’m Kevin Marks, a Computer Science student at Prairie View A&M University with a concentration in Cyber Security. 
          Passionate about full-stack development, I specialize in TypeScript, React, and Google Cloud technologies.
          <br /><br />
          Through my work at Politimap, I designed secure, user-friendly login systems and optimized MongoDB queries for seamless search performance. 
          As a contract software engineer at PremierLeaf, I built a React Native app focusing on self-care prioritization, integrating Google Cloud Storage for media management.
          <br /><br />
          I thrive in fast-paced, collaborative environments and love solving complex technical challenges. 
          Outside of coding, I enjoy working out, gaming, and continuously learning new technologies.
        </Typography>
      </Box>
    </Box>
  );
};
