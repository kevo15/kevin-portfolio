import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

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
          <h1 className={styles.title}>Welcome to Kevin's Portfolio</h1>
          <p className={styles.subtitle}>
            Building scalable and modern web applications with passion.
          </p>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://github.com/kevo15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/kevinlogo4.PNG" alt="Personal Logo" width={20} height={20} />
              View My Work
            </a>
            <a
              href="mailto:k.z.marks15@gmail.com"
              className={styles.secondary}
            >
              Contact Me
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Kevin's Portfolio</p>
        </footer>
      </div>
    </>
  );
}
