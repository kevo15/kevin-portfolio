import React from "react";
import NextLink from "next/link";
import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { navLinks, site } from "../../data/site";
import { games } from "../../data/games";

export const socialLinks = [
  { label: "Email", href: `mailto:${site.email}`, Icon: MdEmail },
  { label: "GitHub", href: site.github, Icon: FaGithub },
  { label: "LinkedIn", href: site.linkedin, Icon: FaLinkedin },
];

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{ borderTop: "1px solid", borderColor: "divider", py: { xs: 5, md: 6 } }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <Box>
          <Typography variant="h6" component="p">
            {site.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {site.role} · {site.location}
          </Typography>
        </Box>

        <Stack
          direction="row"
          component="nav"
          aria-label="Footer"
          spacing={3}
          sx={{ flexWrap: "wrap" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              component={NextLink}
              href={link.href}
              color="text.secondary"
              variant="body2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            color="text.secondary"
            variant="body2"
          >
            Résumé
          </Link>
        </Stack>

        <Stack direction="row" spacing={1}>
          {socialLinks.map(({ label, href, Icon }) => (
            <IconButton
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: "text.secondary",
                border: "1px solid",
                borderColor: "divider",
                "&:hover": { color: "primary.main", borderColor: "primary.main" },
              }}
            >
              <Icon size={18} />
            </IconButton>
          ))}
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 3 }}
        sx={{ mt: 4, justifyContent: "space-between" }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.825rem" }}>
          © {new Date().getFullYear()} {site.name}. Built with Next.js and Material UI.
        </Typography>
        {games.map((game) => (
          <Typography
            key={game.slug}
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.825rem" }}
          >
            {game.title}:{" "}
            <Link href={game.privacyUrl} target="_blank" rel="noopener noreferrer" color="inherit">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href={game.termsUrl} target="_blank" rel="noopener noreferrer" color="inherit">
              Terms
            </Link>
          </Typography>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default Footer;
