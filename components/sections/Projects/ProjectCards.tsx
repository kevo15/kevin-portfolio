import React from "react";
import Image from "next/image";
import {
  Card,
  Stack,
  Typography,
  Box,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectLogo: string;
  personalLogo: string;
  projectLink: string;
  reversed?: boolean;
  buttonText: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectDescription,
  projectLogo,
  personalLogo,
  projectLink,
  reversed = false,
  buttonText,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        ...(isMobile ? {} : reversed ? { ml: "auto" } : { mr: "auto" }),
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
        spacing={isMobile ? 2 : 20}
      >
        <Box
          sx={{
            backgroundColor: "#000000",
            borderRadius: "48px",
            padding: isMobile ? "6px 12px" : "10px 20px",
            mb: isMobile ? "10px" : "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: isMobile ? "1.8rem" : "2.8rem",
              m: 0,
              overflowWrap: "break-word",
            }}
          >
            {projectTitle}
          </Typography>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              width: isMobile ? "80px" : "120px",
              borderRadius: "8px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <Image
              src={personalLogo}
              alt="Personal Logo"
              width={isMobile ? 80 : 120}
              height={isMobile ? 80 : 120}
              style={{ objectFit: "cover" }}
            />
          </Box>
        )}
      </Stack>

      <Stack
        direction={isMobile ? "column" : reversed ? "row-reverse" : "row"}
        alignItems="center"
        justifyContent="center"
        spacing={isMobile ? 2 : 3}
      >
        <Box
          sx={{
            flexShrink: 0,
            maxWidth: isMobile ? "100%" : "300px",
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
                width: isMobile ? "80%" : "300px",
                margin: "0 auto",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={projectLogo}
                alt={`${projectTitle} Logo`}
                width={isMobile ? 240 : 300}
                height={isMobile ? 180 : 225}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Link>
        </Box>

        <Stack
          spacing={isMobile ? 2 : 3}
          sx={{
            maxWidth: "500px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: isMobile ? "1rem" : "1.25rem",
              lineHeight: 1.6,
              m: 0,
              color: "#fff",
              overflowWrap: "break-word",
            }}
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
              width: isMobile ? "160px" : "200px",
              color: "#0A1128",
              fontWeight: "bold",
              fontSize: isMobile ? "14px" : "18px",
              textTransform: "none",
              py: isMobile ? "6px" : "8px",
              px: isMobile ? "12px" : "16px",
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
            {buttonText}
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};
