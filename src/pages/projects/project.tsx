import Head from "next/head";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ProjectCard } from "../../../components/sections/Projects/ProjectCards";
import { projectsData } from "../../../components/sections/Projects/projectData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Kevin's professional projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kevinlogo.PNG" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable} page`}>
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

        <footer className="footer">
          <p>© {new Date().getFullYear()} Kevin's Portfolio</p>
        </footer>
      </div>
    </>
  );
};

export default ProjectsPage;
