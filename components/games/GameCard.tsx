import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SurfaceCard from "../ui/SurfaceCard";
import TagList from "../ui/TagList";
import type { Game } from "../../data/games";

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
  <SurfaceCard interactive sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: { xs: "100%", md: 320 },
        aspectRatio: "1",
      }}
    >
      <Image
        src={game.logo}
        alt={`${game.title} logo`}
        fill
        sizes="(min-width: 900px) 320px, 100vw"
        style={{ objectFit: "cover" }}
      />
    </Box>
    <Stack spacing={2} sx={{ p: { xs: 3, md: 4 }, justifyContent: "center" }}>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
        <Chip label={game.status} size="small" sx={{ bgcolor: "primary.main", color: "#fff" }} />
        {game.platforms.map((p) => (
          <Chip key={p} label={p} size="small" variant="outlined" />
        ))}
      </Stack>
      <Box>
        <Typography variant="h3" component="h3">
          {game.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          by {game.studio}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {game.tagline}
      </Typography>
      <TagList tags={game.tech} />
      <Box>
        <Button
          component={NextLink}
          href={`/games/${game.slug}`}
          variant="contained"
          endIcon={<ArrowForwardRoundedIcon />}
        >
          Play the beta
        </Button>
      </Box>
    </Stack>
  </SurfaceCard>
);

export default GameCard;
