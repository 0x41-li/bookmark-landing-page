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
            <source
              type="image/svg+xml"
              srcSet={bookmarkInterfaceIllustrationSvg}
            />

            {/* TODO: add PNG format with responsive images */}
            <img
              className="hero-sec__img"
              src={bookmarkInterfaceIllustrationSvg}
              alt=""
            />
          </picture>

          <Box
            sx={{
              position: "absolute",
              top: { xs: "13.866666666666667vw", sm: "80px" },
              right: {
                xs: theme.spacing(-8),
                lg: theme.spacing(-16),
                xl: `-18vw`,
              },
              width: { xs: "81.4vw", sm: "60vw", md: "30vw" },
              height: "203px",

              borderBottomLeftRadius: "316px",
              borderTopLeftRadius: "316px",

              background: theme.palette.primary.main,
            }}
          />
        </Box>

        <Box
          sx={{
            marginBlockStart: {
              md: theme.spacing(4),
              lg: theme.spacing(8),
              xl: theme.spacing(17),
            },
            flex: {
              md: "1",
              xl: "0 1 540px",
            },
          }}
        >
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            A Simple Bookmark Manager
          </Typography>
          <Typography
            variant="body1"
            textAlign={{ xs: "center", md: "left" }}
            sx={{ marginBlockStart: theme.spacing(4) }}
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>
          <Stack
            direction="row"
            justifyContent={{ xs: "center", md: "flex-start" }}
            spacing={theme.spacing(3)}
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
