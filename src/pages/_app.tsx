import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useState } from "react";
import Sidebar from "../../components/Navbar/Sidebar";
import FlowingWavesBackground from "../../components/waves";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <FlowingWavesBackground />

      <button
        className={`hamburger-btn ${
          isSidebarOpen ? "hamburger-btn-open" : "hamburger-btn-closed"
        }`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      <Sidebar isOpen={isSidebarOpen} />

      <div
        style={{
          padding: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
