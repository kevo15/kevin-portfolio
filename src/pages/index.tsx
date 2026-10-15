import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PageHead from "../../components/ui/PageHead";
import Section from "../../components/ui/Section";
import SurfaceCard from "../../components/ui/SurfaceCard";
import Reveal from "../../components/ui/Reveal";
import ProjectCard from "../../components/projects/ProjectCard";
import PhoneVideo from "../../components/games/PhoneVideo";
import TagList from "../../components/ui/TagList";
import Timeline from "../../components/experience/Timeline";
import { socialLinks } from "../../components/layout/Footer";
import { projects } from "../../data/projects";
import { experience, education, certifications } from "../../data/experience";
import { site } from "../../data/site";
import { games } from "../../data/games";

const stats = [
  { value: "2+ yrs", label: "Professional software engineering" },
  { value: "2", label: "Oracle Java certifications" },
  { value: "B.S. CS", label: "Prairie View A&M University, 2025" },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const game = games[0];

  return (
    <>
      <PageHead />

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 6, md: 12 },
          pb: { xs: 8, md: 14 },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "-30% -10% auto auto",
            width: { xs: 420, md: 720 },
            height: { xs: 420, md: 720 },
            background:
              "radial-gradient(closest-side, rgba(211,47,47,0.28), rgba(183,28,28,0.08) 60%, transparent)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                <Typography variant="overline" component="p" sx={{ color: "primary.main" }}>
                  {site.role}
                </Typography>
                <Typography variant="h1" sx={{ mt: 1.5 }}>
                  Hi, I&apos;m Kevin. I build software that{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    people enjoy using.
                  </Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", mt: 3, maxWidth: 560 }}
                >
                  I&apos;m a full stack developer at SkillStorm, consulting for EY.
                  I work across Java/Spring Boot backends and React and React Native
                  frontends, and I make games on the side.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                  <Button
                    component={NextLink}
                    href="/projects"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    View projects
                  </Button>
                  <Button
                    component={NextLink}
                    href={`/games/${game.slug}`}
                    variant="outlined"
                    size="large"
                    startIcon={<SportsEsportsOutlinedIcon />}
                  >
                    Play {game.title}
                  </Button>
                </Stack>
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal delay={0.1}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 240, sm: 300, md: "100%" },
                    maxWidth: 400,
                    mx: "auto",
                    aspectRatio: "1",
                    borderRadius: "50%",
                    p: 1,
                    background:
                      "conic-gradient(from 210deg, #d32f2f, #9a1212, rgba(255,255,255,0.08), #d32f2f)",
                  }}
                >
                  <Image
                    src={site.headshot}
                    alt="Portrait of Kevin Marks"
                    width={600}
                    height={600}
                    priority
                    style={{ width: "100%", height: "100%", borderRadius: "50%", display: "block" }}
                  />
                </Box>
              </Reveal>
            </Grid>
          </Grid>

          <Reveal delay={0.15}>
            <Grid container spacing={2} sx={{ mt: { xs: 6, md: 10 } }}>
              {stats.map((s) => (
                <Grid key={s.label} size={{ xs: 12, sm: 4 }}>
                  <SurfaceCard sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "2rem",
                        color: "primary.main",
                        lineHeight: 1.1,
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                      {s.label}
                    </Typography>
                  </SurfaceCard>
                </Grid>
              ))}
            </Grid>
          </Reveal>
        </Container>
      </Box>

      {/* Featured game */}
      <Section id="featured-game" sx={{ pt: { xs: 2, md: 4 } }}>
        <Reveal>
          <SurfaceCard
            sx={{
              p: { xs: 3, sm: 5, md: 7 },
              background:
                "radial-gradient(80% 120% at 100% 0%, rgba(211,47,47,0.22), transparent 60%), radial-gradient(70% 120% at 0% 100%, rgba(120,60,160,0.18), transparent 60%)",
            }}
          >
            <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="overline" component="p" sx={{ color: "primary.main" }}>
                  Featured game · {game.status}
                </Typography>
                <Typography variant="h2" component="h2" sx={{ mt: 1 }}>
                  {game.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2 }}>
                  {game.tagline} I designed and built it as {game.studio}, and the 30-level
                  beta is now open to Android testers on Google Play.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <TagList tags={game.tech} />
                </Box>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                  <Button
                    component={NextLink}
                    href={`/games/${game.slug}#beta`}
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    Join the beta
                  </Button>
                  <Button
                    component={NextLink}
                    href={`/games/${game.slug}`}
                    variant="outlined"
                    size="large"
                  >
                    About the game
                  </Button>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <PhoneVideo
                  src={game.video}
                  poster={game.poster}
                  label={`${game.title} gameplay`}
                  width={{ xs: 240, md: 270 }}
                />
              </Grid>
            </Grid>
          </SurfaceCard>
        </Reveal>
      </Section>

      {/* Selected projects */}
      <Section
        id="projects"
        eyebrow="Selected work"
        title="Projects"
        intro="Mobile apps, civic tech and distributed Java systems, from design to deployment."
        action={
          <Button
            component={NextLink}
            href="/projects"
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
          >
            All projects
          </Button>
        }
      >
        <Grid container spacing={3}>
          {featured.map((project, i) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal fill delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Experience preview */}
      <Section
        id="experience"
        eyebrow="Career"
        title="Experience"
        action={
          <Button
            component={NextLink}
            href="/experience"
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
          >
            Full experience
          </Button>
        }
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Timeline roles={experience} compact />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <SurfaceCard sx={{ p: 3.5 }}>
                <Typography variant="overline" component="p" sx={{ color: "text.secondary" }}>
                  Education
                </Typography>
                <Typography variant="h4" component="h3">
                  {education.degree}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {education.school} · {education.date}
                </Typography>
                <Typography
                  variant="overline"
                  component="p"
                  sx={{ color: "text.secondary", mt: 3 }}
                >
                  Certifications
                </Typography>
                <Stack spacing={1}>
                  {certifications.map((c) => (
                    <Typography key={c.name} variant="body2">
                      {c.name}
                      {c.status && (
                        <Box component="span" sx={{ color: "text.secondary" }}>
                          {" "}
                          ({c.status.toLowerCase()})
                        </Box>
                      )}
                    </Typography>
                  ))}
                </Stack>
              </SurfaceCard>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* About */}
      <Section id="about" eyebrow="About" title="Behind the code">
        <Reveal>
          <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              I&apos;m a Houston-based software engineer and a May 2025 Computer Science
              graduate of Prairie View A&amp;M University. I&apos;m a Full Stack Java
              Developer at SkillStorm, where I consult for EY&apos;s Consulting practice
              and build secure, scalable applications with Java, Spring Boot,
              PostgreSQL, and AWS.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              Before that, I spent two years at ArkaTech shipping PolitiMap and the
              PremierLeaf wellness app. I built secure sign-in flows, made MongoDB search
              faster, and delivered a React Native app backed by Google Cloud. I hold
              Oracle&apos;s Java SE 8 and SE 17 certifications and I&apos;m working toward
              Spring Professional.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              Outside of work I build games as KmGameForge, work out, and keep learning
              new tools.
            </Typography>
          </Stack>
        </Reveal>
      </Section>

      {/* Contact */}
      <Section id="contact" sx={{ pb: { xs: 10, md: 14 } }}>
        <Reveal>
          <SurfaceCard
            sx={{
              p: { xs: 4, md: 7 },
              textAlign: "center",
              background:
                "radial-gradient(90% 140% at 50% 0%, rgba(211,47,47,0.22), transparent 60%)",
            }}
          >
            <Typography variant="overline" component="p" sx={{ color: "primary.main" }}>
              Contact
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mt: 1 }}>
              Let&apos;s build something together
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mt: 2, maxWidth: 560, mx: "auto" }}
            >
              I&apos;m open to full stack and Java roles, collaborations, and conversations
              about building great software.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4, justifyContent: "center" }}
            >
              {socialLinks.map(({ label, href, Icon }, i) => (
                <Button
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  variant={i === 0 ? "contained" : "outlined"}
                  startIcon={<Icon size={18} />}
                >
                  {i === 0 ? site.email : label}
                </Button>
              ))}
            </Stack>
          </SurfaceCard>
        </Reveal>
      </Section>
    </>
  );
}
