import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Box, Button, Chip, Container, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PageHead from "../../../components/ui/PageHead";
import Section from "../../../components/ui/Section";
import SurfaceCard from "../../../components/ui/SurfaceCard";
import TagList from "../../../components/ui/TagList";
import Reveal from "../../../components/ui/Reveal";
import PhoneVideo from "../../../components/games/PhoneVideo";
import BetaSteps from "../../../components/games/BetaSteps";
import { games, getGame, type Game } from "../../../data/games";

export default function GamePage({ game }: { game: Game }) {
  return (
    <>
      <PageHead title={game.title} description={game.tagline} image={game.logo} />

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 4, md: 8 },
          pb: { xs: 8, md: 12 },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "-20% -15% auto auto",
            width: { xs: 420, md: 760 },
            height: { xs: 420, md: 760 },
            background:
              "radial-gradient(closest-side, rgba(211,47,47,0.26), rgba(120,60,160,0.12) 60%, transparent)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Button
            component={NextLink}
            href="/games"
            startIcon={<ArrowBackRoundedIcon />}
            sx={{ color: "text.secondary", ml: -1.5, mb: 3 }}
          >
            All games
          </Button>

          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: 72,
                      height: 72,
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "1px solid",
                      borderColor: "divider",
                      flexShrink: 0,
                    }}
                  >
                    <Image src={game.logo} alt="" fill sizes="72px" priority />
                  </Box>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                    <Chip
                      label={game.status}
                      size="small"
                      sx={{ bgcolor: "primary.main", color: "#fff" }}
                    />
                    {game.platforms.map((p) => (
                      <Chip key={p} label={p} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Stack>

                <Typography variant="h1">{game.title}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                  A game by {game.studio}
                </Typography>
                <Typography variant="h3" component="p" sx={{ mt: 3, fontWeight: 500 }}>
                  {game.tagline}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2 }}>
                  {game.description}
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                  <Button
                    href="#beta"
                    variant="contained"
                    size="large"
                    startIcon={<SportsEsportsOutlinedIcon />}
                  >
                    Join the playtest
                  </Button>
                  {game.playStoreUrl && (
                    <Button
                      href={game.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="large"
                    >
                      Get it on Google Play
                    </Button>
                  )}
                </Stack>
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal delay={0.1}>
                <PhoneVideo
                  src={game.video}
                  poster={game.poster}
                  label={`${game.title} gameplay from the 30-level beta`}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textAlign: "center", mt: 2 }}
                >
                  Gameplay from the 30-level beta
                </Typography>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features */}
      <Section eyebrow="The game" title="What you'll play">
        <Grid container spacing={3}>
          {game.features.map((f, i) => (
            <Grid key={f.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal fill delay={(i % 3) * 0.05}>
                <SurfaceCard sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {f.body}
                  </Typography>
                </SurfaceCard>
              </Reveal>
            </Grid>
          ))}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal fill delay={0.1}>
              <SurfaceCard sx={{ p: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 1.5 }}>
                  Built with
                </Typography>
                <TagList tags={game.tech} />
              </SurfaceCard>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Beta */}
      <Section
        id="beta"
        eyebrow="Beta testing"
        title={`Play ${game.title} early`}
        intro="The beta is a closed test on Google Play. Join the tester group and you'll get access in two steps."
      >
        <Reveal>
          <BetaSteps game={game} />
        </Reveal>
      </Section>

      {/* Legal */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {game.title} by {game.studio}.{" "}
          <Link href={game.privacyUrl} target="_blank" rel="noopener noreferrer">
            Privacy policy
          </Link>{" "}
          ·{" "}
          <Link href={game.termsUrl} target="_blank" rel="noopener noreferrer">
            Terms of use
          </Link>
        </Typography>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: games.map((g) => ({ params: { slug: g.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const game = getGame(String(params?.slug));
  if (!game) return { notFound: true };
  return { props: { game } };
};
