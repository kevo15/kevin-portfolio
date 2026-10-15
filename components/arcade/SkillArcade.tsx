import React, { useState } from "react";
import { Box, Chip, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import SurfaceCard from "../ui/SurfaceCard";
import { icons, minigames } from "./arcadeData";

/**
 * Pick a skill and a mini-game; the skill's logo becomes the game sprite.
 * The games are fixed-size canvases, so the arcade only renders on desktop widths.
 */
const SkillArcade: React.FC = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [gameIndex, setGameIndex] = useState(0);

  const skill = icons[skillIndex];
  const Game = minigames[gameIndex].component;

  return (
    <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
      <Stack spacing={3}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: { sm: "center" } }}
        >
          <Box>
            <Typography variant="h4" component="h3">
              Skill Arcade
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Pick a skill and a game, then play it.
            </Typography>
          </Box>
          <ToggleButtonGroup
            exclusive
            size="small"
            value={gameIndex}
            onChange={(_, v) => v !== null && setGameIndex(v)}
            aria-label="Choose a game"
          >
            {minigames.map((g, i) => (
              <ToggleButton key={g.name} value={i} sx={{ textTransform: "none", px: 1.75 }}>
                {g.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
          {icons.map((s, i) => (
            <Chip
              key={s.name}
              label={s.name}
              icon={<s.Icon />}
              onClick={() => setSkillIndex(i)}
              variant={i === skillIndex ? "filled" : "outlined"}
              sx={
                i === skillIndex
                  ? { bgcolor: "primary.main", color: "#fff", "& .MuiChip-icon": { color: "#fff" } }
                  : { bgcolor: "transparent", borderColor: "divider" }
              }
            />
          ))}
        </Stack>

        <Box
          sx={{
            bgcolor: "#fafafa",
            borderRadius: "12px",
            p: 2,
            minHeight: 432,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Game key={`${gameIndex}-${skillIndex}`} skillIcon={skill.Icon} skillColor={skill.color} />
        </Box>
      </Stack>
    </SurfaceCard>
  );
};

export default SkillArcade;
