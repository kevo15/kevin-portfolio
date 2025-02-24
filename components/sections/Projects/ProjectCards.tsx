import React from "react";
import Image from "next/image";
import { Card, Stack, Typography, Box, Link } from "@mui/material";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectLogo: string;
  personalLogo: string;
  projectLink: string;
  reversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectDescription,
  projectLogo,
  personalLogo,
  projectLink,
  reversed = false,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "900px",
        p: "30px",
        mb: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "rgba(66, 66, 66, 0.7)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
        ...(reversed ? { ml: "auto" } : { mr: "auto" }),
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box
          sx={{
            backgroundColor: "#000000",
            borderRadius: "48px",
            padding: "10px 20px",
            mb: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            display: "inline-block",
            mx: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              m: 0,
            }}
          >
            {projectTitle}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100px",
            ml: "20px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            src={personalLogo}
            alt="Personal Logo"
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Stack>

      <Stack
        direction={{
          xs: "column",
          md: reversed ? "row-reverse" : "row",
        }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 3, md: 0 }}
      >
        <Box
          sx={{
            flexShrink: 0,
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Box
              sx={{
                width: "400px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={projectLogo}
                alt={`${projectTitle} Logo`}
                width={400}
                height={300}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Link>
        </Box>

        <Stack
          spacing="30px"
          sx={{
            maxWidth: "500px",
            textAlign: "center",
          }}
          alignItems="center"
        >
          <Typography
            component="p"
            sx={{ fontSize: "1.25rem", lineHeight: 1.6, m: 0, color: "#fff" }}
          >
            {projectDescription}
          </Typography>
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-block",
              backgroundColor: "white",
              width: "180px",
              color: "#0A1128",
              fontWeight: "bold",
              fontSize: "18px",
              textTransform: "none",
              py: "8px",
              px: "16px",
              borderRadius: "20px",
              textAlign: "center",
              textDecoration: "none",
              mx: "auto",
              transition: "background-color 0.2s, transform 0.2s",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "scale(1.05)",
              },
            }}
          >
            GO TO SITE
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};
