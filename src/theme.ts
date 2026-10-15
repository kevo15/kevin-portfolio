import { createTheme, alpha } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

// Brand palette carried over from the original site.
export const brand = {
  red: "#b71c1c",
  darkRed: "#9a1212",
  lightRed: "#d32f2f",
  ink: "#0e0e0f",
  surface: "#161618",
  surfaceRaised: "#1d1d20",
  deepGray: "#212121",
  softGray: "#e0e0e0",
  offWhite: "#fafafa",
};

const headingFont = "var(--font-heading), 'Poppins', system-ui, sans-serif";
const bodyFont = "var(--font-body), 'Inter', system-ui, sans-serif";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "media" },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: brand.lightRed,
          dark: brand.darkRed,
          light: "#ef5350",
          contrastText: "#fff",
        },
        secondary: { main: brand.softGray },
        background: { default: brand.ink, paper: brand.surface },
        text: {
          primary: "#f2f2f3",
          secondary: "#a9a9b0",
        },
        divider: "rgba(255,255,255,0.08)",
      },
    },
    light: {
      palette: {
        primary: {
          main: brand.red,
          dark: brand.darkRed,
          light: brand.lightRed,
          contrastText: "#fff",
        },
        secondary: { main: brand.deepGray },
        background: { default: brand.offWhite, paper: "#ffffff" },
        text: {
          primary: "#141416",
          secondary: "#55555c",
        },
        divider: "rgba(0,0,0,0.08)",
      },
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 700,
      fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 700,
      fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
      lineHeight: 1.15,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 600,
      fontSize: "clamp(1.4rem, 2.6vw, 1.85rem)",
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.3,
    },
    h5: { fontFamily: headingFont, fontWeight: 600, fontSize: "1.1rem" },
    h6: { fontFamily: headingFont, fontWeight: 600, fontSize: "1rem" },
    subtitle1: { fontSize: "1.125rem", lineHeight: 1.6 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.925rem", lineHeight: 1.65 },
    overline: {
      fontFamily: headingFont,
      fontWeight: 600,
      fontSize: "0.8rem",
      letterSpacing: "0.18em",
      lineHeight: 1.5,
    },
    button: { fontFamily: headingFont, fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
          fontSize: "0.975rem",
        },
        outlined: ({ theme }) => ({
          borderColor: theme.vars.palette.divider,
          color: theme.vars.palette.text.primary,
          "&:hover": {
            borderColor: theme.vars.palette.primary.main,
            backgroundColor: alpha(brand.red, 0.08),
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 999,
          fontWeight: 500,
          backgroundColor: alpha(brand.red, 0.12),
          color: theme.vars.palette.text.primary,
          border: `1px solid ${alpha(brand.red, 0.28)}`,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
    },
  },
});

export default theme;
