"use client";

import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

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
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        color: "#000000",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        borderRadius: "16px",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{ scale: 1.1, y: -10 }}
        variants={childVariants}
        sx={{
          width: isMobile ? { xs: "200px", sm: "300px", md: "400px" } : "640px",
          borderRadius: "8px",
          overflow: "hidden",
          mb: isMobile ? 2 : 0,
          mr: isMobile ? 0 : { md: "30px", lg: "80px" },
        }}
      >
        <Image
          src="/HeadShot.jpeg"
          alt="Kevin Marks"
          width={640}
          height={640}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          priority
        />
      </Box>

      <Box
        component={motion.div}
        variants={childVariants}
        sx={{
          maxWidth: isMobile
            ? { xs: "300px", sm: "400px", md: "600px" }
            : "800px",
          width: "100%",
          textAlign: isMobile ? "center" : "left",
          px: { xs: 2, sm: 3, md: 0 },
        }}
      >
        <Typography
          component={motion.div}
          variants={childVariants}
          sx={{
            mb: 2,
            fontSize: isMobile
              ? { xs: "28px", sm: "36px", md: "48px" }
              : "64px",
            fontWeight: "800",
            fontStyle: "italic",
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          Behind The Code
        </Typography>

        <Typography
          component={motion.div}
          variants={childVariants}
          sx={{
            fontSize: isMobile
              ? { xs: "16px", sm: "18px", md: "20px" }
              : "22px",
            lineHeight: isMobile ? { xs: "1.2", sm: "1.3", md: "1.5" } : "1.5",
            fontWeight: "500",
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          Hi, I’m Kevin Marks, a Computer Science student at Prairie View A&M
          University with a concentration in Cyber Security. Passionate about
          full-stack development, I specialize in TypeScript, React, and Google
          Cloud technologies.
          <br />
          <br />
          Through my work at Politimap, I designed secure, user-friendly login
          systems and optimized MongoDB queries for seamless search performance.
          As a contract software engineer at PremierLeaf, I built a React Native
          app focusing on self-care prioritization, integrating Google Cloud
          Storage for media management.
          <br />
          <br />I thrive in fast-paced, collaborative environments and love
          solving complex technical challenges. Outside of coding, I enjoy
          working out, gaming, and continuously learning new technologies.
        </Typography>
      </Box>
    </Box>
  );
};
