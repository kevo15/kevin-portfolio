import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { navLinks, site } from "../../data/site";

const isActive = (pathname: string, href: string) =>
  !href.includes("#") && pathname.startsWith(href);

const Wordmark = () => (
  <Box
    component={NextLink}
    href="/"
    aria-label={`${site.name}, home`}
    sx={{ display: "flex", alignItems: "center", gap: 1.25 }}
  >
    <Box
      aria-hidden
      sx={{
        width: 34,
        height: 34,
        borderRadius: "10px",
        display: "grid",
        placeItems: "center",
        bgcolor: "primary.main",
        color: "#fff",
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: "0.95rem",
        letterSpacing: "0.02em",
      }}
    >
      KM
    </Box>
    <Typography
      component="span"
      sx={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
    >
      {site.name}
    </Typography>
  </Box>
);

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={(theme) => ({
        height: "var(--nav-height)",
        justifyContent: "center",
        backdropFilter: "saturate(180%) blur(14px)",
        backgroundColor: scrolled
          ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.78)`
          : "transparent",
        borderBottom: "1px solid",
        borderColor: scrolled ? "divider" : "transparent",
        transition: "background-color 200ms ease, border-color 200ms ease",
      })}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Wordmark />

          <Box
            component="nav"
            aria-label="Main"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}
          >
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Button
                  key={link.href}
                  component={NextLink}
                  href={link.href}
                  color="inherit"
                  aria-current={active ? "page" : undefined}
                  sx={{
                    position: "relative",
                    color: active ? "text.primary" : "text.secondary",
                    "&:hover": { color: "text.primary", bgcolor: "transparent" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 22,
                      right: 22,
                      bottom: 4,
                      height: 2,
                      borderRadius: "2px",
                      bgcolor: "primary.main",
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 200ms ease",
                    },
                    "&:hover::after": { transform: "scaleX(1)" },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
            <Button
              variant="contained"
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: 1.5 }}
            >
              Résumé
            </Button>
          </Box>

          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" }, color: "text.primary" }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: "min(80vw, 320px)", p: 2 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <List component="nav" aria-label="Main">
          {[{ label: "Home", href: "/" }, ...navLinks].map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : isActive(pathname, link.href);
            return (
              <ListItemButton
                key={link.href}
                component={NextLink}
                href={link.href}
                onClick={() => setOpen(false)}
                selected={active}
                sx={{ borderRadius: "10px", mb: 0.5 }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: { sx: { fontFamily: "var(--font-heading)", fontWeight: 600 } },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
        <Button
          variant="contained"
          fullWidth
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: 2 }}
        >
          Download résumé
        </Button>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
