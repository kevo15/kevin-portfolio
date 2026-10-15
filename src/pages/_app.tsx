import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins, Inter } from "next/font/google";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import "@/styles/globals.css";
import theme from "@/theme";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
});

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/headshot.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {/* Font variables live on :root so portalled UI (drawers, menus) gets them too. */}
        <GlobalStyles
          styles={{
            ":root": {
              "--font-heading": heading.style.fontFamily,
              "--font-body": body.style.fontFamily,
            },
          }}
        />
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            fontFamily: "var(--font-body)",
          }}
        >
          <Navbar />
          <Box component="main" sx={{ flex: 1 }}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

export default MyApp;
