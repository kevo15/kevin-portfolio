import Head from "next/head";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import CaseStudyCards from "../../../components/sections/CaseStudies/CaseStudyCards";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const CaseStudyCardsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <title>Case Studies | Kevin&apos;s Portfolio</title>
        <meta name="description" content="Kevin's case studies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kevinlogo.PNG" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable} page`}>
        <Box
          sx={{
            backgroundColor: "#000000",
            borderRadius: "48px",
            padding: { xs: "8px 16px", md: "10px 20px" },
            marginBottom: { xs: "20px", md: "50px" },
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: { xs: "90%", md: "100%" },
            mx: "auto",
            fontStyle: "italic",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h1"}
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: isMobile ? "4px" : "15px",
              fontSize: isMobile ? "inherit" : "64px",
              py: isMobile ? 1 : "10px",
              px: isMobile ? 0 : "50px",
            }}
          >
            Case Studies
          </Typography>
        </Box>

        <main
          className="main"
          style={{ maxWidth: "900px", margin: "0 auto", padding: "30px" }}
        >
          <CaseStudyCards />
        </main>
      </div>
    </>
  );
};

export default CaseStudyCardsPage;
