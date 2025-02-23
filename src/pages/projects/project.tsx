import Head from "next/head";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ProjectCard } from "../../../components/sections/Projects/ProjectCards";
import premierLeafLogo from "../../../public/premierleaf.png";
import kevinLogo from "../../../public/kevinmarkslogo.png";
import poltimapLogo from "../../../public/politimap.png";
import kzlogo from "../../../public/kzlogo.png";
import personalLogo from "../../../public/me2.png";

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

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <ProjectCard
            projectTitle="Premier Leaf Wellness App"
            projectDescription="The PremierLeaf web application, built collaboratively..."
            projectLogo={premierLeafLogo.src}
            personalLogo={kevinLogo.src}
            projectLink="https://www.premierleaf.com"
            reversed={false}
          />

          <ProjectCard
            projectTitle="Politimap"
            projectDescription="Politimap is a React-based app that helps users..."
            projectLogo={poltimapLogo.src}
            personalLogo={kzlogo.src}
            projectLink="https://www.politimap.com"
            reversed={true}
          />

          <ProjectCard
            projectTitle="My Portfolio"
            projectDescription="The current website you are viewing took a lot of..."
            projectLogo={personalLogo.src}
            personalLogo={kevinLogo.src}
            projectLink="/"
            reversed={false}
          />
        </main>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Kevin's Portfolio</p>
        </footer>
      </div>
    </>
  );
};

export default ProjectsPage;
