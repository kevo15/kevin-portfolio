import React from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SurfaceCard from "../ui/SurfaceCard";
import type { Game } from "../../data/games";

/** How to join the Google Group closed test; the group is the only way to get the beta. */
const BetaSteps: React.FC<{ game: Game }> = ({ game }) => {
  const steps = [
    <>
      Join the tester group with the Google account on your Android phone:{" "}
      <Link href={game.testerGroupUrl} target="_blank" rel="noopener noreferrer">
        {game.testerGroupUrl.replace("https://", "")}
      </Link>
    </>,
    <>
      In the group, open the <strong>Welcome to the {game.title} beta</strong>{" "}
      conversation and follow the link to download the game from Google Play.
    </>,
  ];

  return (
    <SurfaceCard
      sx={{
        p: { xs: 3, md: 5 },
        background:
          "radial-gradient(90% 140% at 0% 0%, rgba(211,47,47,0.18), transparent 60%)",
      }}
    >
      <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0 }}>
        {steps.map((step, i) => (
          <Stack
            component="li"
            key={i}
            direction="row"
            spacing={2.5}
            sx={{ alignItems: "flex-start", mb: 3 }}
          >
            <Box
              aria-hidden
              sx={{
                flexShrink: 0,
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: "primary.main",
                color: "#fff",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
              }}
            >
              {i + 1}
            </Box>
            <Typography variant="subtitle1" sx={{ pt: 0.25, overflowWrap: "anywhere" }}>
              {step}
            </Typography>
          </Stack>
        ))}
      </Box>

      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
        Use the same Google account that&apos;s signed in to the Play Store on your phone.
        The beta is Android only for now.
      </Typography>

      <Button
        href={game.testerGroupUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        size="large"
        startIcon={<GroupAddOutlinedIcon />}
      >
        Join the tester group
      </Button>
    </SurfaceCard>
  );
};

export default BetaSteps;
