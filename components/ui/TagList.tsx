import React from "react";
import { Chip, Stack } from "@mui/material";

const TagList: React.FC<{ tags: string[]; size?: "small" | "medium" }> = ({
  tags,
  size = "small",
}) => (
  <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
    {tags.map((tag) => (
      <Chip key={tag} label={tag} size={size} />
    ))}
  </Stack>
);

export default TagList;
