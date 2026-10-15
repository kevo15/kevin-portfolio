import React from "react";
import { Box, Container, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import Reveal from "./Reveal";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

/** Page section with a consistent container width, vertical rhythm and heading block. */
const Section: React.FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  intro,
  action,
  children,
  sx,
}) => (
  <Box component="section" id={id} sx={{ py: { xs: 7, md: 11 }, ...sx }}>
    <Container maxWidth="lg">
      {(eyebrow || title) && (
        <Reveal>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "flex-end" },
              justifyContent: "space-between",
              gap: 2,
              mb: { xs: 4, md: 6 },
            }}
          >
            <Box sx={{ maxWidth: 720 }}>
              {eyebrow && (
                <Typography
                  variant="overline"
                  component="p"
                  sx={{ color: "primary.main", mb: 1 }}
                >
                  {eyebrow}
                </Typography>
              )}
              {title && (
                <Typography variant="h2" component="h2">
                  {title}
                </Typography>
              )}
              {intro && (
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", mt: 2 }}
                >
                  {intro}
                </Typography>
              )}
            </Box>
            {action}
          </Box>
        </Reveal>
      )}
      {children}
    </Container>
  </Box>
);

export default Section;
