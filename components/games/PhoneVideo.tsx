import React from "react";
import { Box } from "@mui/material";

interface PhoneVideoProps {
  src: string;
  poster: string;
  label: string;
  /** Rendered width of the phone frame. */
  width?: { xs: number; md: number };
}

/**
 * Portrait screen recording inside a phone-shaped frame.
 * preload="metadata" keeps the large video from downloading until the visitor presses play.
 */
const PhoneVideo: React.FC<PhoneVideoProps> = ({
  src,
  poster,
  label,
  width = { xs: 260, md: 300 },
}) => (
  <Box
    sx={{
      width,
      mx: "auto",
      p: "10px",
      borderRadius: "40px",
      bgcolor: "#050506",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow:
        "0 30px 80px -30px rgba(183,28,28,0.6), inset 0 0 0 2px rgba(255,255,255,0.04)",
    }}
  >
    <Box
      component="video"
      controls
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
      sx={{
        display: "block",
        width: "100%",
        aspectRatio: "1080 / 2340",
        objectFit: "cover",
        borderRadius: "30px",
        bgcolor: "#000",
      }}
    >
      <source src={src} type="video/mp4" />
    </Box>
  </Box>
);

export default PhoneVideo;
