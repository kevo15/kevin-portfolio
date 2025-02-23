"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => () => {
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(path);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <nav>
        <ul>
          <li>
            <button onClick={handleNavigation("/")}>Case Studies</button>
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
            <button onClick={handleNavigation("/")}>Projects</button>
          </li>
          <li>
            <button onClick={handleNavigation("/")}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
