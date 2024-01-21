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
          orientation="vertical"
          textColor="inherit"
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              top: `${58 * (tabsIndex + 1) - 4}px`,
              height: "4px",
              width: "143px",
              left: "50%",
              translate: "-50% 0",
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: alpha(theme.palette.darkBlue.main, 0.75),
              fontWeight: 400,
              textTransform: "capitalize",
              height: "57px",
              maxWidth: "unset",
            },
            "& .Mui-selected": {
              color: theme.palette.darkBlue.main,
              fontWeight: 400,
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
            }}
            flexDirection="row"
            gap={theme.spacing(8)}
          >
            <Box
              sx={{
                position: "relative",
                flex: "0 0 100%",

                marginBlockStart: theme.spacing(18),
                paddingInline: theme.spacing(8),
              }}
            >
              {/* blue background behind the illustration */}
              <Box
                sx={{
                  position: "absolute",

                  top: { xs: "9vw" },

                  left: {
                    xs: 0,
                    lg: theme.spacing(-16),
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
                  alignItems: "center",
                  marginBlockStart: theme.spacing(17.25),
                }}
              >
                <Typography variant="h2" textAlign={{ xs: "center" }}>
                  Bookmark in one click
                </Typography>
                <Typography variant="body1" textAlign={{ xs: "center" }}>
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
            </Box>

            <Box
              sx={{
                position: "relative",
                flex: {
                  md: "1",
                },

                marginBlockStart: theme.spacing(18),
              }}
            >
              {/* blue background behind the illustration */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "22vw", sm: "90px", xl: "135px" },
                  left: {
                    lg: theme.spacing(-16),
                    [theme.breakpoints.between(1104, 1280)]: {
                      left: `calc( ((100vw - 1104px) / -2) - ${theme.spacing(
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
                  alignItems: "center",
                  marginBlockStart: theme.spacing(17.25),
                }}
              >
                <Typography variant="h2" textAlign={{ xs: "center" }}>
                  Bookmark in one click
                </Typography>
                <Typography variant="body1" textAlign={{ xs: "center" }}>
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
            </Box>

            <Box
              sx={{
                position: "relative",
                flex: {
                  md: "1",
                },

                marginBlockStart: theme.spacing(18),
              }}
            >
              {/* blue background behind the illustration */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "24vw", sm: "90px", xl: "135px" },
                  left: {
                    lg: theme.spacing(-16),
                    [theme.breakpoints.between(1104, 1280)]: {
                      left: `calc( ((100vw - 1104px) / -2) - ${theme.spacing(
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
                  alignItems: "center",
                  marginBlockStart: theme.spacing(17.25),
                }}
              >
                <Typography variant="h2" textAlign={{ xs: "center" }}>
                  Bookmark in one click
                </Typography>
                <Typography variant="body1" textAlign={{ xs: "center" }}>
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
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Features;
