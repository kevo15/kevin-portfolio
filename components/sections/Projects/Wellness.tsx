import React from "react";
import Image from "next/image";
import { Box, Stack, Typography, Link } from "@mui/material";
import premierLeafLogo from "../../../public/premierleaf.png";
import kevinLogo from "../../../public/kevinmarkslogo.png";

export const Wellness: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        p: { xs: "2rem 1rem", md: "2rem 1rem" },
        mx: "auto",
        maxWidth: "1200px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2rem"
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 600,
            marginTop: "50px",
            marginRight: "50px",
            marginBottom: "25px"
          }}
        >
          Premier Leaf Wellness App
        </Typography>
        <Box
          sx={{
            width: "120px",
            ml: "2rem",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image src={kevinLogo} alt="Kevin Logo" layout="responsive" />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 4, md: 0 }}
      >
        <Box
          sx={{
            flexShrink: 0,
            maxWidth: "350px",
            textAlign: "center",
          }}
        >
          <Link
            href="https://www.premierleaf.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Box
              sx={{
                width: "250px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={premierLeafLogo}
                alt="Premier Leaf Logo"
                layout="responsive"
              />
            </Box>
          </Link>
        </Box>

        <Stack spacing="50px" sx={{ maxWidth: "500px", textAlign: "center" }}>
          <Typography
            component="p"
            sx={{ fontSize: "1.25rem", lineHeight: 1.6, m: 0 }}
          >
            The PremierLeaf web application, built collaboratively with Tavarus
            Johnson using React, MaterialUI, and TypeScript, features a sleek,
            responsive design that showcases the brand’s premium hemp products
            while blending modern aesthetics with robust functionality.
          </Typography>
          <Link
            href="https://www.premierleaf.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-block",
              backgroundColor: "white",
              width: "200px",
              color: "#0A1128",
              fontWeight: 800,
              fontSize: "20px",
              textTransform: "none",
              py: "10px",
              px: "20px",
              borderRadius: "20px",
              textAlign: "center",
              textDecoration: "none",
              mx: "auto",
              alignSelf: "center",
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
    </Box>
  );
};
