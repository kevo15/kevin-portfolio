import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Hero } from "../../components/sections/Hero";
import { About } from "../../components/sections/About";
import { Skills } from "../../components/sections/Skills";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin's Portfolio</title>
        <meta name="description" content="Welcome to Kevin's professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kevinlogo.PNG" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <Hero />
          <Skills />
          <About />
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Kevin's Portfolio</p>
        </footer>
      </div>
    </>
  );
}
