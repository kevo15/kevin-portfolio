import React from "react";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PageHead from "../../components/ui/PageHead";
import Section from "../../components/ui/Section";
import SurfaceCard from "../../components/ui/SurfaceCard";
import TagList from "../../components/ui/TagList";
import Reveal from "../../components/ui/Reveal";
import Timeline from "../../components/experience/Timeline";
import SkillArcade from "../../components/arcade/SkillArcade";
import { experience, education, certifications } from "../../data/experience";
import { skillGroups } from "../../data/skills";
import { site } from "../../data/site";

export default function ExperiencePage() {
  return (
    <>
      <PageHead
        title="Experience"
        description="Kevin Marks's experience: Full Stack Java Developer at SkillStorm consulting for EY, previously Software Engineer at ArkaTech. Education, certifications, and skills."
      />

      {/* Intro */}
      <Section sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Reveal>
              <Typography variant="overline" component="p" sx={{ color: "primary.main" }}>
                Experience
              </Typography>
              <Typography variant="h1" sx={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
                Full stack engineer with a Java core
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2.5 }}>
                I design and ship end-to-end applications: Spring Boot services and
                PostgreSQL schemas, secure auth, AWS deployments, and React and React
                Native interfaces. I&apos;m currently a Full Stack Java Developer at
                SkillStorm, consulting for EY.
              </Typography>
              <Button
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={<FileDownloadOutlinedIcon />}
                sx={{ mt: 4 }}
              >
                Download résumé (PDF)
              </Button>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: "none", md: "block" } }}>
            <Reveal delay={0.1}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  ml: "auto",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  p: 0.75,
                  background: "conic-gradient(from 210deg, #d32f2f, #9a1212, rgba(255,255,255,0.08), #d32f2f)",
                }}
              >
                <Image
                  src={site.headshot}
                  alt="Portrait of Kevin Marks"
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "100%", borderRadius: "50%", display: "block" }}
                />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Timeline + side cards */}
      <Section eyebrow="Work history" title="Where I've worked" sx={{ pt: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Timeline roles={experience} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3} sx={{ position: { md: "sticky" }, top: { md: 96 } }}>
              <Reveal>
                <SurfaceCard sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.5 }}>
                    <SchoolOutlinedIcon sx={{ color: "primary.main" }} />
                    <Typography variant="h5" component="h3">
                      Education
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {education.degree}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {education.school}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Graduated {education.date}
                  </Typography>
                </SurfaceCard>
              </Reveal>
              <Reveal delay={0.05}>
                <SurfaceCard sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.5 }}>
                    <WorkspacePremiumOutlinedIcon sx={{ color: "primary.main" }} />
                    <Typography variant="h5" component="h3">
                      Certifications
                    </Typography>
                  </Stack>
                  <Stack spacing={1.25}>
                    {certifications.map((c) => (
                      <Box key={c.name}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {c.name}
                        </Typography>
                        {c.status && (
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {c.status}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </SurfaceCard>
              </Reveal>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        eyebrow="Toolbox"
        title="Skills"
        intro="The languages, frameworks, and platforms I use day to day."
      >
        <Grid container spacing={3}>
          {skillGroups.map((group, i) => (
            <Grid key={group.label} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal fill delay={(i % 3) * 0.05}>
                <SurfaceCard sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    {group.label}
                  </Typography>
                  <TagList tags={group.items} />
                </SurfaceCard>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, display: { xs: "none", md: "block" } }}>
          <Reveal>
            <SkillArcade />
          </Reveal>
        </Box>
      </Section>
    </>
  );
}
