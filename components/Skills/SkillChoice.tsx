"use client";

import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import SkillsDesktop from "./desktopSkills";
import SkillsMobile from "./mobileSkills";

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return <SkillsMobile />;
  } else {
    return <SkillsDesktop />;
  }
};

export default Skills;
