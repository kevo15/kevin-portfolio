import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { FaGithub } from "react-icons/fa";
import SurfaceCard from "../ui/SurfaceCard";
import TagList from "../ui/TagList";
import type { Project } from "../../data/projects";

const initials = (title: string) =>
  title
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, summary, image, imageBg, tags, caseStudy, liveUrl, repoUrl } =
    project;

  return (
    <SurfaceCard interactive sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          position: "relative",
          aspectRatio: "16 / 9",
          bgcolor: imageBg ?? "transparent",
          display: "grid",
          placeItems: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
          ...(!image && {
            background:
              "radial-gradient(120% 120% at 0% 0%, rgba(211,47,47,0.35), transparent 55%), linear-gradient(135deg, #1d1d20, #0e0e0f)",
          }),
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={`${title} logo`}
            width={220}
            height={160}
            style={{ objectFit: "contain", width: "auto", maxHeight: "70%", maxWidth: "60%" }}
          />
        ) : (
          <Typography
            aria-hidden
            sx={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "3rem",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.04em",
            }}
          >
            {initials(title)}
          </Typography>
        )}
      </Box>

      <Stack spacing={2} sx={{ p: 3, flex: 1 }}>
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
          {summary}
        </Typography>
        <TagList tags={tags} />
        <Stack direction="row" spacing={1} sx={{ pt: 1, flexWrap: "wrap" }} useFlexGap>
          {caseStudy && (
            <Button
              component={NextLink}
              href={caseStudy}
              size="small"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Case study
            </Button>
          )}
          {liveUrl && (
            <Button
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="outlined"
              endIcon={<ArrowOutwardRoundedIcon />}
            >
              Live site
            </Button>
          )}
          {repoUrl && (
            <Button
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="outlined"
              startIcon={<FaGithub size={16} />}
            >
              Code
            </Button>
          )}
        </Stack>
      </Stack>
    </SurfaceCard>
  );
};

export default ProjectCard;
