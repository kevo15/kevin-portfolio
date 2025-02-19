"use client";

import React from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();

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
        gap: "50px",
      }}
    >
      {/* Logo Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{ scale: 1.1, y: -10 }}
        sx={{
          width: { xs: "200px", sm: "250px", md: "300px" },
          height: { xs: "200px", sm: "250px", md: "300px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <Image
          src="/headshot.PNG"
          alt="Kevin Marks Logo"
          width={300}
          height={300}
          objectFit="contain"
          priority
        />
      </Box>
      
      {/* Text and Button Section */}
      <Stack
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        sx={{
          maxWidth: "500px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Explore My Case Studies
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            marginBottom: "20px",
          }}
        >
          Discover how I build scalable and efficient applications, solve complex problems, and create intuitive user experiences.
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
          onClick={() => {/*router.push("/cases")*/}}
        >
          VIEW CASE STUDIES
        </Button>
      </Stack>
    </Stack>
  );
};
