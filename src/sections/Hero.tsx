import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Stack,
  Theme,
  Typography,
} from "@mui/material";

// ---- hero images import ----
// SVG
import bookmarkInterfaceIllustrationSvg from "../assets/images/hero-section/bookmark-interface-illustration.svg";

// PNG
import bookmarkInterfaceIllustration309wPNG from "../assets/images/hero-section/bookmark-interface-illustration-309w.png";
import bookmarkInterfaceIllustration575wPNG from "../assets/images/hero-section/bookmark-interface-illustration-575w.png";

// WEBP
import bookmarkInterfaceIllustration309wWEBP from "../assets/images/hero-section/bookmark-interface-illustration-309w.webp";
import bookmarkInterfaceIllustration575wWEBP from "../assets/images/hero-section/bookmark-interface-illustration-575w.webp";

// AVIF
import bookmarkInterfaceIllustration309wAVIF from "../assets/images/hero-section/bookmark-interface-illustration-309w.avif";
import bookmarkInterfaceIllustration575wAVIF from "../assets/images/hero-section/bookmark-interface-illustration-575w.avif";
// ---- hero images import ----

// hero data
import data from "../data/data.json";

const Hero = () => {
  const theme = useTheme() as Theme;

  const heroData = data.hero;

  return (
    <Container
      sx={{
        marginBlockStart: { xs: theme.spacing(20), lg: theme.spacing(28) },
        maxWidth: "1104px",
      }}
      component="section"
    >
      <Stack
        spacing={{ xs: theme.spacing(24), md: theme.spacing(17) }}
        direction={{ xs: "column", md: "row-reverse" }}
      >
        {/* Hero Illustration and blue background */}
        <Box
          sx={{
            position: "relative",
            flex: {
              md: "1",
            },
          }}
        >
          {/* Blue box */}
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: { xs: theme.spacing(-8), lg: 0 },
              right: {
                xs: theme.spacing(-8),
                lg: theme.spacing(-16),
              },

              bottom: { xs: "-48px", lg: "-119px" },

              overflow: "hidden",

              [theme.breakpoints.between(1104, 1280)]: {
                right: `calc((1104px - 100vw) / 2 - 64px)`,
              },

              [theme.breakpoints.up(1280)]: {
                right: `calc((1104px - 100vw) / 2)`,
              },
            }}
          >
            <Box
              sx={{
                paddingInlineStart: { xs: theme.spacing(8), lg: 0 },
                paddingInlineEnd: {
                  xs: theme.spacing(8),
                  lg: theme.spacing(16),
                },

                [theme.breakpoints.up(1104)]: {
                  paddingInlineEnd: `calc((100vw - 1104px ) / 2 + 64px)`,
                },

                [theme.breakpoints.up(1280)]: {
                  paddingInlineEnd: `calc((100vw - 1104px ) / 2)`,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: "375px", xl: "574px" },
                  aspectRatio: "auto 309 / 206",
                  marginInline: "auto",

                  [theme.breakpoints.up(1440)]: {
                    width: "574px",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: "-48px", xl: "-101px" },
                    left: { xs: "36px", xl: "152px" },

                    background: theme.palette.primary.main,

                    height: { xs: "203px", xl: "352px" },
                    width: "1000px",
                    borderRadius: "500px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Picture */}
          <Box
            component="picture"
            sx={{
              position: "relative",
              display: "block",
              width: "100%",
              maxWidth: { xs: "375px", xl: "574px" },
              marginInline: "auto",
              zIndex: 50,

              "& img": {
                display: "block",
                width: "100%",
                height: "auto",
                boxShadow: "0px 30px 40px 0px rgba(47, 59, 129, 0.2)",
                borderRadius: "5%",
                marginInline: "auto",
              },

              [theme.breakpoints.up(1440)]: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "574px",
              },
            }}
          >
            {/* SVG */}
            <source
              type="image/svg+xml"
              srcSet={bookmarkInterfaceIllustrationSvg}
            />

            {/* AVIF format */}
            <source
              type="image/avif"
              srcSet={`${bookmarkInterfaceIllustration309wAVIF} 309w, ${bookmarkInterfaceIllustration575wAVIF} 575w`}
              sizes="(max-width: 425px) 309px, 575px"
            />

            {/* WEBP format */}
            <source
              type="image/webp"
              srcSet={`${bookmarkInterfaceIllustration309wWEBP} 309w, ${bookmarkInterfaceIllustration575wWEBP} 575w`}
              sizes="(max-width: 425px) 309px, 575px"
            />

            {/* PNG format */}
            <img
              srcSet={`${bookmarkInterfaceIllustration575wPNG} 575w, ${bookmarkInterfaceIllustration309wPNG} 309w`}
              src={bookmarkInterfaceIllustration575wPNG}
              sizes="(max-width: 425px) 309px, 575px"
              alt="Bookmark web interface illustration"
              width="309"
              height="206"
              loading="lazy"
            />
          </Box>
        </Box>

        {/* Hero Text */}
        <Box
          sx={{
            marginBlockStart: {
              md: theme.spacing(4),
              lg: theme.spacing(8),
              xl: theme.spacing(18),
            },
            flex: {
              md: "1",
              xl: "0 1 540px",
            },
          }}
        >
          {/* h1 */}
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            {heroData.heading}
          </Typography>

          {/* p */}
          <Typography
            variant="body1"
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              marginBlockStart: { xs: theme.spacing(4), xl: theme.spacing(6) },
            }}
          >
            {heroData.subheading}
          </Typography>

          {/* The two Buttons */}
          <Stack
            direction="row"
            justifyContent={{ xs: "center", md: "flex-start" }}
            spacing={{ xs: theme.spacing(3), xl: theme.spacing(4) }}
            sx={{ marginBlockStart: theme.spacing(8) }}
          >
            <Button variant="contained">{heroData.CTA}</Button>
            <Button variant="outlined">{heroData.ghostButton}</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
