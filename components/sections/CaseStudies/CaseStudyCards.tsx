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
      {caseStudies.map((study, index) => (
        <Link
          key={study.id || index}
          href={`/caseStudies/${study.id || index}`}
          passHref
        >
          <Card
            sx={{
              position: "relative",
              width: isMobile ? "350px" : "800px",
              height: isMobile ? "150px" : "300px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              overflow: "hidden",
              "&:hover .overlay": !isMobile ? { opacity: 1 } : {},
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: study.background,
                opacity: 0.75,
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                width: isMobile ? "30%" : "250px",
                transition: "filter 0.3s",
                zIndex: 2,
                "&:hover": !isMobile ? { filter: "brightness(0.7)" } : {},
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pl: isMobile ? 2 : 0,
              }}
            >
              <Image
                src={study.logo}
                alt={`${study.title} Logo`}
                width={250}
                height={150}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>

            {isMobile ? (
              <Box
                sx={{
                  ml: 2,
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#fff",
                    mb: 1,
                    fontSize: "0.7rem",
                  }}
                >
                  {study.overview.missionStatement}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    backgroundColor: "#fff",
                    color: study.background,
                    p: "4px 8px 4px 8px",
                    borderRadius: 1,
                    display: "inline-block",
                    fontSize: "0.7rem",
                  }}
                >
                  View Case Study
                </Typography>
              </Box>
            ) : (
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  px: 2,
                  textAlign: "center",
                  zIndex: 3,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ mb: 1, fontSize: "1.5rem", lineHeight: 1.4 }}
                >
                  {study.overview.missionStatement}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: "#fff",
                    color: study.background,
                    p: "6px 12px",
                    borderRadius: 5,
                    display: "inline-block",
                    fontWeight: 500,
                  }}
                >
                  View Case Study
                </Typography>
              </Box>
            )}
          </Card>
        </Link>
      ))}
    </Stack>
  );
};

export default CaseStudyCards;
