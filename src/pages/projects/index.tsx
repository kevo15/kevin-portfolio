import React from "react";
import Grid from "@mui/material/Grid2";
import PageHead from "../../../components/ui/PageHead";
import Section from "../../../components/ui/Section";
import Reveal from "../../../components/ui/Reveal";
import ProjectCard from "../../../components/projects/ProjectCard";
import { projects } from "../../../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHead
        title="Projects"
        description="Projects by Kevin Marks: mobile apps, civic tech platforms, and Java/Spring Boot systems, with case studies."
      />
      <Section
        eyebrow="Work"
        title="Projects"
        intro="Things I've built at work and on my own. Each card links to a case study, the live product, or the code where available."
        sx={{ pt: { xs: 6, md: 10 } }}
      >
        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal fill delay={(i % 3) * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}
