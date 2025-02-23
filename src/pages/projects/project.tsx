import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import { Wellness } from "../../../components/sections/Projects/Wellness";
import { Politimap } from "../../../components/sections/Projects/Politimap";
// import { Portfolio } from "../../../components/sections/Projects/Portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Project: React.FC = () => {
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
          <section>
            <Wellness />
          </section>
          <section><Politimap /></section>
          <section>{/* <Portfolio /> */}</section>
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Kevin's Portfolio</p>
        </footer>
      </div>
    </>
  );
};

export default Project;
