import React from "react";
import Image from "next/image";
import { Card, Stack, Typography, Box, Link } from "@mui/material";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectLogo: string;
  personalLogo: string;
  projectLink: string;
  reversed?: boolean; 
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectDescription,
  projectLogo,
  personalLogo,
  projectLink,
  reversed = false,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "1200px", // larger card width
        p: 6,             // increased padding
        mb: 6,            // increased margin bottom
        display: "flex",
        flexDirection: "column",
        gap: 4,           // increased gap between sections
        backgroundColor: "#424242", // grey background matching nav bar
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Header Row: Title + Personal Logo */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>
          {projectTitle}
        </Typography>
        <Box sx={{ width: 60, height: 60, borderRadius: "50%", overflow: "hidden" }}>
          <Image
            src={personalLogo}
            alt="Personal Logo"
            width={60}
            height={60}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Stack>

      {/* Content Row: Image + Description */}
      <Stack
        direction={{ xs: "column", md: reversed ? "row-reverse" : "row" }}
        alignItems="center"
        spacing={3}
      >
        {/* Project Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "300px" },
            borderRadius: 2,
            overflow: "hidden",
            mx: "auto",
          }}
        >
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Image
              src={projectLogo}
              alt={`${projectTitle} Logo`}
              width={300}    // adjust as needed for your design
              height={200}   // adjust according to your image ratio
              style={{ objectFit: "contain" }}
            />
          </Link>
        </Box>

        {/* Text + Button */}
        <Stack spacing={2} sx={{ textAlign: "center", flex: 1 }}>
          <Typography sx={{ color: "#fff" }}>
            {projectDescription}
          </Typography>
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-block",
              backgroundColor: "white",
              width: "200px",
              color: "#0A1128",
              fontWeight: "bold",
              fontSize: "20px",
              textTransform: "none",
              py: "10px",
              px: "20px",
              borderRadius: "20px",
              textAlign: "center",
              textDecoration: "none",
              mx: "auto",
              alignSelf: "center",
              transition: "background-color 0.2s, transform 0.2s",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "scale(1.05)",
              },
            }}
          >
            GO TO SITE
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};
