import Head from "next/head";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ProjectCard } from "../../../components/sections/Projects/ProjectCards";
import { projectsData } from "../../../components/sections/Projects/projectData";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ProjectsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Kevin's professional projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kevinlogo.PNG" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable} page`}>
        {isMobile ? (
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
              Projects
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              backgroundColor: "#000000",
              borderRadius: "48px",
              padding: "10px 20px",
              marginBottom: "50px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "100%",
              fontStyle: "italic",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "15px",
                fontSize: "64px",
                paddingX: "50px",
                paddingY: "10px",
              }}
            >
              Projects
            </Typography>
          </Box>
        )}

        <main className="main">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              projectLogo={project.projectLogo}
              personalLogo={project.personalLogo}
              projectLink={project.projectLink}
              reversed={project.reversed}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default ProjectsPage;
