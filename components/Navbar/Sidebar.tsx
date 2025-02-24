"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onNavigate }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => () => {
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      // If we're already on the home page, scroll immediately.
      if (window.location.pathname === "/") {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home, then scroll.
        router.push("/");
        // Delay scrolling to allow the page to render.
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      router.push(path);
    }
    onNavigate();
  };

  const handleContact = () => {
    // This will work the same as a "/#footer" link.
    if (window.location.pathname === "/") {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/");
      setTimeout(() => {
        const footerElement = document.getElementById("footer");
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    onNavigate();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <nav>
        <ul>
          <li>
            <button onClick={handleNavigation("/caseStudies")}>
              Case Studies
            </button>
          </li>
          <li>
            <button onClick={handleNavigation("/#about")}>About</button>
          </li>
          <li>
            <button onClick={handleNavigation("/")}>Home</button>
          </li>
          <li>
            <button onClick={handleNavigation("/#skills")}>Skills</button>
          </li>
          <li>
            <button onClick={handleNavigation("/projects/project")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={handleContact}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
