import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import PageHead from "../../../components/ui/PageHead";
import Section from "../../../components/ui/Section";
import Reveal from "../../../components/ui/Reveal";
import GameCard from "../../../components/games/GameCard";
import SkillArcade from "../../../components/arcade/SkillArcade";
import { games } from "../../../data/games";

export default function GamesPage() {
  return (
    <>
      <PageHead
        title="Games"
        description="Games by Kevin Marks (KmGameForge), including Shadow Sprinter, a 2D action platformer in closed beta on Google Play."
        image={games[0]?.logo}
      />
      <Section
        eyebrow="KmGameForge"
        title="Games"
        intro="Games I design and build under the KmGameForge name. Join a beta to play them before release."
        sx={{ pt: { xs: 6, md: 10 } }}
      >
        <Stack spacing={3}>
          {games.map((game) => (
            <Reveal key={game.slug}>
              <GameCard game={game} />
            </Reveal>
          ))}
        </Stack>
      </Section>

      <Section
        id="arcade"
        eyebrow="Just for fun"
        title="Arcade"
        intro="Small browser games I built for this site. Each one uses a skill logo as the player."
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Reveal>
            <SkillArcade />
          </Reveal>
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary", display: { md: "none" } }}>
          The arcade needs a larger screen. Open this page on a laptop or desktop to play.
        </Typography>
      </Section>
    </>
  );
}
