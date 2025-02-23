"use client";

import React from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        paddingX: { xs: "20px", sm: "40px", md: "75px" },
        paddingY: { xs: "50px", sm: "75px", md: "150px" },
        gap: { xs: "50px", md: "100px" },
        mx: "auto",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{ scale: 1.1, y: -10 }}
        sx={{
          width: { xs: "150px", sm: "200px", md: "300px" },
          borderRadius: "10px",
        }}
      >
        <Image
          src="/kevinlogo4.PNG"
          alt="Kevin Marks Logo"
          width={300}
          height={300}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </Box>

      <Stack
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        sx={{
          maxWidth: { xs: "300px", md: "500px" },
          width: "100%",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "15px",
            fontSize: { xs: "1.5rem", md: "2rem" },
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          Explore My Case Studies
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            marginBottom: "20px",
            fontSize: { xs: "0.9rem", md: "1rem" },
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          Discover how I build scalable and efficient applications, solve
          complex problems, and create intuitive user experiences.
        </Typography>
        <Button
          variant="contained"
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          sx={{
            backgroundColor: "white",
            color: "#0A1128",
            fontWeight: "bold",
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            textTransform: "none",
            padding: { xs: "8px 16px", md: "10px 20px" },
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          VIEW CASE STUDIES
        </Button>
      </Stack>
    </Stack>
  );
};
