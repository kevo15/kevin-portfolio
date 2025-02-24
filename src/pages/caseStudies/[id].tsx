import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Box,
  Typography,
  Stack,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import caseStudies from "../../../components/sections/CaseStudies/caseStudyData";

const CaseStudyDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (typeof id !== "string") {
    return <div>Loading...</div>;
  }

  const study = caseStudies.find((study) => study.id === id);

  if (!study) {
    return <div>Case study not found.</div>;
  }

  const sections = [
    {
      title: "Overview",
      content: (
        <Box>
          <Typography variant="body1" sx={{ mb: 1, color: "#000" }}>
            <strong>Mission Statement:</strong>{" "}
            {study.overview.missionStatement}
          </Typography>
          <Typography variant="body1" sx={{ color: "#000" }}>
            <strong>Target Audience:</strong> {study.overview.targetAudience}
          </Typography>
        </Box>
      ),
    },
    {
      title: "Contributions",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.contributions}
        </Typography>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.techStack.join(", ")}
        </Typography>
      ),
    },
    {
      title: "Tools Used",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.toolsUsed.join(", ")}
        </Typography>
      ),
    },
    {
      title: "Challenges and Solutions",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.challengesAndSolutions}
        </Typography>
      ),
    },
    {
      title: "Results and Impact",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.resultsAndImpact}
        </Typography>
      ),
    },
    {
      title: "Key Takeaways & Future Improvements",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.keyTakeawaysAndFutureImprovements}
        </Typography>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.conclusion}
        </Typography>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: "900px", mx: "auto", p: "30px" }}>
      <Stack spacing={4} alignItems="center">
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "12px",
            px: 2,
            py: 1,
            textAlign: "center",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{ color: "#000", m: 0, textAlign: "center" }}
          >
            {study.title}
          </Typography>
        </Box>

        <Box sx={{ width: isMobile ? "80%" : "300px", mb: 2 }}>
          <Image
            src={study.logo}
            alt={`${study.title} Logo`}
            width={300}
            height={225}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>

        {sections.map((section, index) => (
          <Card
            key={index}
            sx={{
              width: "100%",
              p: "20px",
              backgroundColor:
                index % 2 === 0
                  ? "rgba(255,255,255,0.8)"
                  : "rgba(211,211,211,0.8)",
              color: "#000",
              borderRadius: "16px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, textAlign: "center" }}>
              {section.title}
            </Typography>
            {section.content}
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default CaseStudyDetail;
