"use client";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useState } from "react";
import Sidebar from "../../components/Navbar/Sidebar";
import FlowingWavesBackground from "../../components/waves";
import { useRouter } from "next/router";
import ContactFooter from "../../components/Footer/footer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const showWaves = router.pathname !== "/caseStudies/[id]";

  return (
    <>
      {showWaves && <FlowingWavesBackground />}

      <button
        className={`hamburger-btn ${
          isSidebarOpen ? "hamburger-btn-open" : "hamburger-btn-closed"
        }`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      <Sidebar isOpen={isSidebarOpen} onNavigate={closeSidebar} />

      <div
        style={{
          padding: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Component {...pageProps} />
      </div>

      <ContactFooter />
    </>
  );
}

export default MyApp;
