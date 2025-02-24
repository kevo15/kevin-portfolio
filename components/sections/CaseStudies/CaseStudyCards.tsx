import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  Stack,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import caseStudies from "./caseStudyData";

const CaseStudyCards: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack spacing={8} alignItems="center">
      {caseStudies.map((study, index) => {
        const flexDirection = isMobile
          ? "column"
          : index % 2 === 0
            ? "row"
            : "row-reverse";
        const backgroundColor =
          index % 2 === 0 ? "rgba(66,66,66,0.7)" : "rgba(255,255,255,0.8)";
        const textColor = index % 2 === 0 ? "#FFFFFF" : "#333";

        return (
          <Link
            key={study.id || index}
            href={`/caseStudies/${study.id || index}`}
            passHref
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "900px",
                p: "30px",
                display: "flex",
                flexDirection: flexDirection,
                alignItems: "center",
                gap: "20px",
                backgroundColor: backgroundColor,
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                sx={{
                  width: isMobile ? "80%" : "200px",
                  mr: isMobile ? 0 : index % 2 === 0 ? 2 : 0,
                  ml: isMobile ? 0 : index % 2 === 0 ? 0 : 2,
                }}
              >
                <Image
                  src={study.logo}
                  alt={`${study.title} Logo`}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{ color: textColor, textAlign: "center" }}
              >
                {study.title}
              </Typography>
            </Card>
          </Link>
        );
      })}
    </Stack>
  );
};

export default CaseStudyCards;
