import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Tab,
  Tabs,
  Theme,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

// images/illustrations
import simpleBookmarkingSVG from "../assets/images/features/simple-bookmarking.svg";
import speedySearchingSVG from "../assets/images/features/speedy-searching.svg";
import easySharingSVG from "../assets/images/features/easy-sharing.svg";

const Features = () => {
  const theme = useTheme() as Theme;

  const [tabsIndex, setTabsIndex] = useState(0);

  const IsMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sx={{ marginBlockStart: theme.spacing(35) }}>
      {/* Text */}
      <Box sx={{ maxWidth: { md: "540px" }, marginInline: "auto" }}>
        <Typography variant="h2" textAlign="center">
          Features
        </Typography>
        <Typography variant="body1" textAlign="center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Typography>
      </Box>

      {/* Tabs  */}
      <Box sx={{ marginBlockStart: theme.spacing(10) }}>
        <Tabs
          value={tabsIndex}
          onChange={(_, i) => setTabsIndex(i)}
          orientation={IsMobile ? "vertical" : "horizontal"}
          textColor="inherit"
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              top: IsMobile ? `${58 * (tabsIndex + 1) - 4}px` : "",
              height: "4px",
              width: IsMobile ? "143px" : "240px",
              left: IsMobile ? "50%" : `${234 * tabsIndex}px`,
              translate: IsMobile ? "-50% 0" : "",
            },
          }}
          sx={{
            maxWidth: "730px",
            marginInline: "auto",
            borderBottom: IsMobile ? "unset" : "1px solid rgba(0, 0, 0, 0.12)",
            "& .MuiTab-root": {
              color: alpha(theme.palette.darkBlue.main, 0.75),
              fontWeight: 400,
              textTransform: "capitalize",
              height: "57px",
              maxWidth: "unset",
              flex: IsMobile ? "0 0 1" : "1",
            },
            "& .Mui-selected": {
              color: theme.palette.darkBlue.main,
              fontWeight: 400,
            },
            "& .MuiDivider-root": {
              display: { md: "none" },
            },
          }}
        >
          <Divider />
          <Tab value={0} label="Simple Bookmarking" />
          <Divider />
          <Tab value={1} label="Speedy Searching" />
          <Divider />
          <Tab value={2} label="Easy Sharing" />
          <Divider />
        </Tabs>
      </Box>

      {/* Tabs Content */}
      <Box sx={{ position: "relative" }}>
        {/* Images/Illustrations & Text */}
        <Box sx={{ overflow: "hidden", marginInline: theme.spacing(-8) }}>
          <Stack
            sx={{
              position: "relative",
              translate: `calc(-${tabsIndex * 100}% - ${tabsIndex * 32}px) 0%`,
              "&>*": { flex: "0 0 100%" },
              transition: "translate 400ms ease-in-out",
              paddingBlockEnd: { md: theme.spacing(8) },
            }}
            flexDirection="row"
            gap={theme.spacing(8)}
          >
            <Stack
              sx={{
                position: "relative",

                marginBlockStart: theme.spacing(18),
                paddingInline: theme.spacing(8),
              }}
              gap={{ xs: theme.spacing(17.25) }}
              flexDirection={{ md: "row" }}
              alignItems={{ md: "flex-start" }}
            >
              {/* blue background behind the illustration */}
              <Box
                sx={{
                  position: "absolute",

                  top: { xs: "9vw", md: "5vw" },

                  left: {
                    xs: 0,
                    lg: theme.spacing(-16),
                  },

                  width: {
                    xs: "81.4vw",
                    md: "40vw",
                    xl: "35.8vw",
                    [theme.breakpoints.up(1980)]: {
                      display: "none",
                    },
                  },

                  height: { xs: "203px", xl: "24.4vw" },
                  maxHeight: "400px",

                  borderBottomRightRadius: "316px",
                  borderTopRightRadius: "316px",

                  background: theme.palette.primary.main,
                  zIndex: "-999",
                }}
              />

              {/* Image/Illustration */}
              <picture className="features-sec__picture">
                {/* SVG */}
                <source type="image/svg+xml" srcSet={simpleBookmarkingSVG} />

                {/* AVIF format */}
                {/* <source
              type="image/avif"
              srcSet={`${bookmarkInterfaceIllustration309wAVIF} 309w, ${bookmarkInterfaceIllustration575wAVIF} 575w`}
              sizes="(max-width: 425px) 308px, 574px"
            /> */}

                {/* WEBP format */}
                {/* <source
              type="image/webp"
              srcSet={`${bookmarkInterfaceIllustration309wWEBP} 309w, ${bookmarkInterfaceIllustration575wWEBP} 575w`}
              sizes="(max-width: 425px) 308px, 574px"
            /> */}

                {/* PNG format */}
                <img src="" alt="" />
                {/* <img
              className="hero-sec__img"
              srcSet={`${bookmarkInterfaceIllustration575wPNG} 575w, ${bookmarkInterfaceIllustration309wPNG} 309w`}
              src={bookmarkInterfaceIllustration575wPNG}
              sizes="(max-width: 425px) 308px, 574px"
              alt="Bookmark web interface illustration"
            /> */}
              </picture>

              {/* Text */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Typography
                  variant="h2"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Bookmark in one click
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginBlockStart: theme.spacing(3.5),
                    flexBasis: "1",
                    paddingInline: "24px",
                  }}
                >
                  More Info
                </Button>
              </Box>
            </Stack>

            <Stack
              sx={{
                position: "relative",

                marginBlockStart: theme.spacing(18),
                paddingInline: theme.spacing(8),
              }}
              gap={{ xs: theme.spacing(17.25) }}
              flexDirection={{ md: "row" }}
              alignItems={{ md: "flex-start" }}
            >
              {/* blue background behind the illustration */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "22vw", md: "12vw" },
                  left: {
                    xs: 0,
                    lg: theme.spacing(-16),
                  },
                  width: {
                    xs: "81.4vw",
                    md: "34vw",
                    xl: "35.8vw",
                    [theme.breakpoints.up(1980)]: {
                      display: "none",
                    },
                  },
                  height: { xs: "203px", xl: "24.4vw" },
                  maxHeight: "400px",

                  borderBottomRightRadius: "316px",
                  borderTopRightRadius: "316px",

                  background: theme.palette.primary.main,
                  zIndex: "-999",
                }}
              />

              {/* Image/Illustration */}
              <picture className="features-sec__picture">
                {/* SVG */}
                <source type="image/svg+xml" srcSet={speedySearchingSVG} />

                {/* AVIF format */}
                {/* <source
              type="image/avif"
              srcSet={`${bookmarkInterfaceIllustration309wAVIF} 309w, ${bookmarkInterfaceIllustration575wAVIF} 575w`}
              sizes="(max-width: 425px) 308px, 574px"
            /> */}

                {/* WEBP format */}
                {/* <source
              type="image/webp"
              srcSet={`${bookmarkInterfaceIllustration309wWEBP} 309w, ${bookmarkInterfaceIllustration575wWEBP} 575w`}
              sizes="(max-width: 425px) 308px, 574px"
            /> */}

                {/* PNG format */}
                <img src="" alt="" />
                {/* <img
              className="hero-sec__img"
              srcSet={`${bookmarkInterfaceIllustration575wPNG} 575w, ${bookmarkInterfaceIllustration309wPNG} 309w`}
              src={bookmarkInterfaceIllustration575wPNG}
              sizes="(max-width: 425px) 308px, 574px"
              alt="Bookmark web interface illustration"
            /> */}
              </picture>

              {/* Text */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Typography
                  variant="h2"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Intelligent search
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginBlockStart: theme.spacing(3.5),
                    flexBasis: "1",
                    paddingInline: "24px",
                  }}
                >
                  More Info
                </Button>
              </Box>
            </Stack>

            <Stack
              sx={{
                position: "relative",

                marginBlockStart: theme.spacing(18),
                paddingInline: theme.spacing(8),
              }}
              gap={{ xs: theme.spacing(17.25) }}
              flexDirection={{ md: "row" }}
              alignItems={{ md: "flex-start" }}
            >
              {/* blue background behind the illustration */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "24vw", sm: "90px", xl: "135px" },
                  left: {
                    xs: 0,
                    lg: theme.spacing(-16),
                  },
                  width: {
                    xs: "81.4vw",
                    md: "40vw",
                    xl: "35.8vw",
                    [theme.breakpoints.up(1980)]: {
                      display: "none",
                    },
                  },
                  height: { xs: "203px", xl: "24.4vw" },
                  maxHeight: "400px",

                  borderBottomRightRadius: "316px",
                  borderTopRightRadius: "316px",

                  background: theme.palette.primary.main,
                  zIndex: "-999",
                }}
              />

              {/* Image/Illustration */}
              <picture className="features-sec__picture">
                {/* SVG */}
                <source type="image/svg+xml" srcSet={easySharingSVG} />

                {/* AVIF format */}
                {/* <source
              type="image/avif"
              srcSet={`${bookmarkInterfaceIllustration309wAVIF} 309w, ${bookmarkInterfaceIllustration575wAVIF} 575w`}
              sizes="(max-width: 425px) 308px, 574px"
            /> */}

                {/* WEBP format */}
                {/* <source
              type="image/webp"
              srcSet={`${bookmarkInterfaceIllustration309wWEBP} 309w, ${bookmarkInterfaceIllustration575wWEBP} 575w`}
              sizes="(max-width: 425px) 308px, 574px"
            /> */}

                {/* PNG format */}
                <img src="" alt="" />
                {/* <img
              className="hero-sec__img"
              srcSet={`${bookmarkInterfaceIllustration575wPNG} 575w, ${bookmarkInterfaceIllustration309wPNG} 309w`}
              src={bookmarkInterfaceIllustration575wPNG}
              sizes="(max-width: 425px) 308px, 574px"
              alt="Bookmark web interface illustration"
            /> */}
              </picture>

              {/* Text */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Typography
                  variant="h2"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Share your bookmarks
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginBlockStart: theme.spacing(3.5),
                    flexBasis: "1",
                    paddingInline: "24px",
                  }}
                >
                  More Info
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Features;
