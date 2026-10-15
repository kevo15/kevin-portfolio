import React from "react";
import { Paper } from "@mui/material";
import type { PaperProps } from "@mui/material";

interface SurfaceCardProps extends PaperProps {
  interactive?: boolean;
}

/** Bordered card used across the site; `interactive` adds the hover lift and red edge. */
const SurfaceCard: React.FC<SurfaceCardProps> = ({
  interactive = false,
  sx,
  children,
  ...rest
}) => (
  <Paper
    elevation={0}
    {...rest}
    sx={[
      (theme) => ({
        position: "relative",
        height: "100%",
        border: `1px solid ${theme.vars.palette.divider}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition:
          "transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
        ...(interactive && {
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "rgba(211, 47, 47, 0.55)",
            boxShadow: "0 18px 40px -20px rgba(183, 28, 28, 0.55)",
          },
        }),
      }),
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {children}
  </Paper>
);

export default SurfaceCard;
