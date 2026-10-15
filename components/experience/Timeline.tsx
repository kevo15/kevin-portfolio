import React from "react";
import NextLink from "next/link";
import { Box, Link, Stack, Typography } from "@mui/material";
import Reveal from "../ui/Reveal";
import TagList from "../ui/TagList";
import type { ExperienceRole } from "../../data/experience";

interface TimelineProps {
  roles: ExperienceRole[];
  /** Compact mode shows only role headers and project names (used on the home page). */
  compact?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ roles, compact = false }) => (
  <Box
    component="ol"
    sx={{
      listStyle: "none",
      m: 0,
      p: 0,
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 7,
        top: 8,
        bottom: 8,
        width: 2,
        bgcolor: "divider",
      },
    }}
  >
    {roles.map((role) => (
      <Box component="li" key={role.company} sx={{ position: "relative", pl: 5, pb: 6 }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            top: 6,
            width: 16,
            height: 16,
            borderRadius: "50%",
            bgcolor: "background.default",
            border: "3px solid",
            borderColor: "primary.main",
          }}
        />
        <Reveal>
          <Typography variant="overline" component="p" sx={{ color: "text.secondary" }}>
            {role.dates}
          </Typography>
          <Typography variant="h3" component="h3">
            {role.title}{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              @ {role.company}
            </Box>
          </Typography>
          {role.note && (
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
              {role.note}
            </Typography>
          )}

          {compact ? (
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
              {role.projects.map((p) => p.name).join(" · ")}
            </Typography>
          ) : (
            <Stack spacing={3.5} sx={{ mt: 3 }}>
              {role.projects.map((project) => (
                <Box key={project.name}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: "baseline", flexWrap: "wrap" }}
                    useFlexGap
                  >
                    <Typography variant="h5" component="h4">
                      {project.name}
                    </Typography>
                    {project.caseStudy && (
                      <Link component={NextLink} href={project.caseStudy} variant="body2">
                        Case study
                      </Link>
                    )}
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                      >
                        {project.link.includes("github.com") ? "Code" : "Live site"} ↗
                      </Link>
                    )}
                  </Stack>
                  <Box
                    component="ul"
                    sx={{
                      mt: 1,
                      mb: project.tech ? 1.5 : 0,
                      pl: 2.5,
                      color: "text.secondary",
                      "& li": { mb: 0.75 },
                      "& li::marker": { color: "primary.main" },
                    }}
                  >
                    {project.bullets.map((b) => (
                      <Typography component="li" variant="body2" key={b}>
                        {b}
                      </Typography>
                    ))}
                  </Box>
                  {project.tech && <TagList tags={project.tech} />}
                </Box>
              ))}
            </Stack>
          )}
        </Reveal>
      </Box>
    ))}
  </Box>
);

export default Timeline;
