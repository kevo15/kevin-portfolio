import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PageHead from "../../../components/ui/PageHead";
import SurfaceCard from "../../../components/ui/SurfaceCard";
import TagList from "../../../components/ui/TagList";
import Reveal from "../../../components/ui/Reveal";
import caseStudies, { type CaseStudy } from "../../../data/caseStudies";

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  <Box
    component="ul"
    sx={{
      pl: 2.5,
      my: 1,
      color: "text.secondary",
      "& li": { mb: 1 },
      "& li::marker": { color: "primary.main" },
    }}
  >
    {items.map((item) => (
      <Typography component="li" variant="body1" key={item}>
        {item}
      </Typography>
    ))}
  </Box>
);

const ArticleSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Reveal>
    <Box component="section" sx={{ py: { xs: 4, md: 5 } }}>
      <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
    <Divider />
  </Reveal>
);

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      <PageHead
        title={study.title}
        description={study.overview.missionStatement}
        image={study.logo}
      />

      <Container maxWidth="md" sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 8, md: 12 } }}>
        <Button
          component={NextLink}
          href="/projects"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{ color: "text.secondary", ml: -1.5, mb: 3 }}
        >
          All projects
        </Button>

        <Reveal>
          <Typography variant="overline" component="p" sx={{ color: "primary.main" }}>
            Case study
          </Typography>
          <Typography variant="h1" sx={{ fontSize: "clamp(2.1rem, 5vw, 3.25rem)" }}>
            {study.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2 }}>
            {study.overview.missionStatement}
          </Typography>

          <Box
            sx={{
              mt: 4,
              borderRadius: "16px",
              bgcolor: study.background,
              aspectRatio: { xs: "16 / 10", md: "21 / 9" },
              display: "grid",
              placeItems: "center",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Image
              src={study.logo}
              alt={`${study.title} logo`}
              width={300}
              height={225}
              priority
              style={{ objectFit: "contain", width: "auto", maxHeight: "70%", maxWidth: "50%" }}
            />
          </Box>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <SurfaceCard sx={{ p: 2.5 }}>
                <Typography variant="overline" component="p" sx={{ color: "text.secondary" }}>
                  Audience
                </Typography>
                <Typography variant="body2">{study.overview.targetAudience}</Typography>
              </SurfaceCard>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <SurfaceCard sx={{ p: 2.5 }}>
                <Typography variant="overline" component="p" sx={{ color: "text.secondary" }}>
                  Tech stack
                </Typography>
                <TagList tags={study.techStack} />
                <Typography
                  variant="overline"
                  component="p"
                  sx={{ color: "text.secondary", mt: 1.5 }}
                >
                  Tools
                </Typography>
                <TagList tags={study.toolsUsed} />
              </SurfaceCard>
            </Grid>
          </Grid>
        </Reveal>

        <Box sx={{ mt: 4 }}>
          <ArticleSection title="My contributions">
            <Stack spacing={2}>
              {study.contributions.map((c) => (
                <Box key={c.title}>
                  <Typography variant="h5" component="h3">
                    {c.title}
                  </Typography>
                  <Bullets items={c.details} />
                </Box>
              ))}
            </Stack>
          </ArticleSection>

          <ArticleSection title="Challenges & solutions">
            <Stack spacing={3}>
              {study.challengesAndSolutions.map((ch) => (
                <SurfaceCard key={ch.title} sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    {ch.title}
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant="overline" component="p" sx={{ color: "text.secondary" }}>
                        Problem
                      </Typography>
                      <Bullets items={ch.problem} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant="overline" component="p" sx={{ color: "primary.main" }}>
                        Solution
                      </Typography>
                      <Bullets items={ch.solution} />
                    </Grid>
                  </Grid>
                </SurfaceCard>
              ))}
            </Stack>
          </ArticleSection>

          <ArticleSection title="Results & impact">
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {study.resultsAndImpact}
            </Typography>
          </ArticleSection>

          <ArticleSection title="Takeaways & next steps">
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {study.keyTakeawaysAndFutureImprovements}
            </Typography>
          </ArticleSection>

          <Reveal>
            <Box component="section" sx={{ pt: { xs: 4, md: 5 } }}>
              <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
                Conclusion
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {study.conclusion}
              </Typography>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudies.map((s) => ({ params: { id: s.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const study = caseStudies.find((s) => s.id === params?.id);
  if (!study) return { notFound: true };
  return { props: { study } };
};
