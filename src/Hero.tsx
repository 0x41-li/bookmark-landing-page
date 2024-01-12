import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Stack,
  Theme,
  Typography,
} from "@mui/material";

// hero section images
import bookmarkInterfaceIllustrationSvg from "./assets/images/hero-section/bookmark-interface-illustration.svg";
import bookmarkInterfaceIllustration309wPNG from "./assets/images/hero-section/bookmark-interface-illustration-309w.png";
import bookmarkInterfaceIllustration575wPNG from "./assets/images/hero-section/bookmark-interface-illustration-575w.png";

const Hero = () => {
  const theme = useTheme() as Theme;
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
        {/* Hero Illustration */}
        <Box
          sx={{
            position: "relative",
            flex: {
              md: "1",
            },
          }}
        >
          {/* TODO: add AVIF, WEBP formats with resposive images */}
          <picture className="hero-sec__picture">
            {/* <source
              type="image/svg+xml"
              srcSet={bookmarkInterfaceIllustrationSvg}
            /> */}

            <img
              className="hero-sec__img"
              srcSet={`${bookmarkInterfaceIllustration575wPNG} 575w, ${bookmarkInterfaceIllustration309wPNG} 309w`}
              src={bookmarkInterfaceIllustration575wPNG}
              sizes="(max-width: 425px) 304px, 574px"
              alt="Bookmark web interface illustration"
            />
          </picture>

          {/* blue background behind the illustration */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "13vw", sm: "90px", xl: "135px" },
              right: {
                xs: theme.spacing(-8),
                lg: theme.spacing(-16),
                [theme.breakpoints.between(1104, 1280)]: {
                  right: `calc( ((100vw - 1104px) / -2) - ${theme.spacing(
                    16
                  )})`,
                },
                xl: "calc((100vw - 1104px ) / -2)",
              },
              width: {
                xs: "81.4vw",
                sm: "70vw",
                md: "30vw",
                xl: "35.8vw",
                [theme.breakpoints.up(1980)]: {
                  display: "none",
                },
              },
              height: { xs: "203px", xl: "24.4vw" },
              maxHeight: "400px",

              borderBottomLeftRadius: "316px",
              borderTopLeftRadius: "316px",

              background: theme.palette.primary.main,
            }}
          />
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
            A Simple Bookmark Manager
          </Typography>

          {/* p */}
          <Typography
            variant="body1"
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              marginBlockStart: { sm: theme.spacing(4), xl: theme.spacing(6) },
            }}
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>

          {/* The two Buttons */}
          <Stack
            direction="row"
            justifyContent={{ xs: "center", md: "flex-start" }}
            spacing={{ xs: theme.spacing(3), xl: theme.spacing(4) }}
            sx={{ marginBlockStart: theme.spacing(8) }}
          >
            <Button variant="contained">Get it on Chrome</Button>
            <Button variant="outlined">Get it on Firefox</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
