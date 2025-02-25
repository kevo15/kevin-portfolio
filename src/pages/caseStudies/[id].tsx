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
  List,
  ListItem,
  ListItemText,
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
      center: false,
    },
    {
      title: "Contributions",
      content: (
        <Box sx={{ textAlign: "left" }}>
          {study.contributions.map((contrib, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                {contrib.title}
              </Typography>
              <List>
                {contrib.details.map((detail, idx) => (
                  <ListItem key={idx} sx={{ py: 0 }}>
                    <ListItemText primary={detail} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      ),
      center: false,
    },
    {
      title: "Tech Stack",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.techStack.join(", ")}
        </Typography>
      ),
      center: true,
    },
    {
      title: "Tools Used",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.toolsUsed.join(", ")}
        </Typography>
      ),
      center: true,
    },
    {
      title: "Challenges and Solutions",
      content: (
        <Box sx={{ textAlign: "left" }}>
          {study.challengesAndSolutions.map((challenge, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                {challenge.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                Problems:
              </Typography>
              <List>
                {challenge.problem.map((p, idx) => (
                  <ListItem key={idx} sx={{ py: 0 }}>
                    <ListItemText primary={p} />
                  </ListItem>
                ))}
              </List>
              <Typography
                variant="subtitle1"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                Solutions:
              </Typography>
              <List>
                {challenge.solution.map((s, idx) => (
                  <ListItem key={idx} sx={{ py: 0 }}>
                    <ListItemText primary={s} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      ),
      center: false,
    },
    {
      title: "Results and Impact",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.resultsAndImpact}
        </Typography>
      ),
      center: true,
    },
    {
      title: "Key Takeaways & Future Improvements",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.keyTakeawaysAndFutureImprovements}
        </Typography>
      ),
      center: true,
    },
    {
      title: "Conclusion",
      content: (
        <Typography variant="body1" sx={{ color: "#000" }}>
          {study.conclusion}
        </Typography>
      ),
      center: true,
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
            sx={{
              color: "#000",
              m: 0,
              textAlign: "center",
              fontWeight: "bold",
            }}
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
              textAlign: section.center ? "center" : "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 1, textAlign: "center", fontWeight: "bold" }}
            >
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
