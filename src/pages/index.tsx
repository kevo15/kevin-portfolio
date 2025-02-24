import Head from "next/head";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Hero } from "../../components/sections/Hero";
import { About } from "../../components/sections/About";
import Skills from "../../components/sections/Skills/SkillChoice";

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
        <title>Kevin&apos;s Portfolio</title>
        <meta
          name="description"
          content="Welcome to Kevin&apos;s professional portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.png" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} page`}>
        <main className="main">
          <Hero />
          <Skills />
          <About />
        </main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Kevin&apos;s Portfolio</p>
        </footer>
      </div>
    </>
  );
}
