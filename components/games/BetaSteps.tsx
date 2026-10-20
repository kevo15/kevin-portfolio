import React from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import SurfaceCard from "../ui/SurfaceCard";
import type { Game } from "../../data/games";

const StepList: React.FC<{ steps: React.ReactNode[] }> = ({ steps }) => (
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
);

/** Android testers join the Google Group closed test; iOS testers join through TestFlight. */
const BetaSteps: React.FC<{ game: Game }> = ({ game }) => {
  const androidSteps = [
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

  const iosSteps = [
    <>
      Install{" "}
      <Link
        href="https://apps.apple.com/app/testflight/id899247664"
        target="_blank"
        rel="noopener noreferrer"
      >
        TestFlight
      </Link>{" "}
      from the App Store on your iPhone.
    </>,
    <>
      Open the invite link on your iPhone and tap <strong>Accept</strong>, then{" "}
      <strong>Install</strong>:{" "}
      <Link href={game.testFlightUrl} target="_blank" rel="noopener noreferrer">
        {game.testFlightUrl.replace("https://", "")}
      </Link>
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
      <Grid container spacing={{ xs: 5, md: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 3 }}>
            Android
          </Typography>
          <StepList steps={androidSteps} />
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            Use the same Google account that&apos;s signed in to the Play Store on your phone.
          </Typography>
          <Button
            href={game.testerGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            startIcon={<AndroidOutlinedIcon />}
          >
            Join the tester group
          </Button>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 3 }}>
            iOS
          </Typography>
          <StepList steps={iosSteps} />
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            TestFlight builds expire after 90 days; TestFlight will prompt you when a new one
            is ready.
          </Typography>
          <Button
            href={game.testFlightUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            startIcon={<AppleIcon />}
          >
            Join on TestFlight
          </Button>
        </Grid>
      </Grid>
    </SurfaceCard>
  );
};

export default BetaSteps;
