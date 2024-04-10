import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

// ---- Images import ----
// ------ Simple Bookmarking illustrationn
import simpleBookmarkingSVG from "../assets/images/features/simple-bookmarking.svg";

import simpleBookmarking311wPNG from "../assets/images/features/simple-bookmarking-311w.png";
import simpleBookmarking311wWEBP from "../assets/images/features/simple-bookmarking-311w.webp";
import simpleBookmarking311wAVIF from "../assets/images/features/simple-bookmarking-311w.webp";

import simpleBookmarking538wPNG from "../assets/images/features/simple-bookmarking-536w.png";
import simpleBookmarking538wWEBP from "../assets/images/features/simple-bookmarking-536w.webp";
import simpleBookmarking538wAVIF from "../assets/images/features/simple-bookmarking-536w.avif";

// ------ Speedy Searching illustrationn
import speedySearchingSVG from "../assets/images/features/speedy-searching.svg";

import speedySearch321wPNG from "../assets/images/features/speedy-searching-321w.png";
import speedySearch321wWEBP from "../assets/images/features/speedy-searching-321w.webp";
import speedySearch321wAVIF from "../assets/images/features/speedy-searching-321w.avif";

import speedySearch478wPNG from "../assets/images/features/speedy-searching-478w.png";
import speedySearch478wWEBP from "../assets/images/features/speedy-searching-478w.webp";
import speedySearch478wAVIF from "../assets/images/features/speedy-searching-478w.avif";

// ------ Easy Sharing illustrationn
import easySharingSVG from "../assets/images/features/easy-sharing.svg";
import easySharing311wPNG from "../assets/images/features/easy-sharing-311w.png";
import easySharing311wWEBP from "../assets/images/features/easy-sharing-311w.webp";
import easySharing311wAVIF from "../assets/images/features/easy-sharing-311w.avif";

import easySharing440wPNG from "../assets/images/features/easy-sharing-440w.png";
import easySharing440wWEBP from "../assets/images/features/easy-sharing-440w.webp";
import easySharing440wAVIF from "../assets/images/features/easy-sharing-440w.avif";
// ---- Images import ----

// data
import data from "../data/data.json";

const Features = () => {
  const theme = useTheme() as Theme;

  // Tabs data
  const tabsElRef = useRef<HTMLDivElement>(null);
  const [tabsElWidth, setTabsElWidth] = useState(0);
  const [tabsIndex, setTabsIndex] = useState(0);

  //
  const IsMobile = useMediaQuery(theme.breakpoints.down("md"));

  // section data
  const featuresData = data.features;

  useEffect(() => {
    if (tabsElRef.current) {
      // Get the width of the Tabs component
      const width = tabsElRef.current.clientWidth;
      setTabsElWidth(width);
    }
  }, []);

  return (
    <Container
      component="section"
      sx={{
        marginBlockStart: { xs: theme.spacing(35), md: theme.spacing(50) },
        maxWidth: "1104px",
      }}
    >
      {/* heading & Text */}
      <Box sx={{ maxWidth: { md: "540px" }, marginInline: "auto" }}>
        <Typography variant="h2" textAlign="center">
          {featuresData.heading}
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          sx={{ marginBlockStart: { xl: theme.spacing(4) } }}
        >
          {featuresData.subheading}
        </Typography>
      </Box>

      {/* Tabs  */}
      <Box
        sx={{
          marginBlockStart: { xs: theme.spacing(10), xl: theme.spacing(11.5) },
        }}
      >
        <Tabs
          ref={tabsElRef}
          value={tabsIndex}
          onChange={(_, i) => setTabsIndex(i)}
          //
          orientation={IsMobile ? "vertical" : "horizontal"}
          indicatorColor="secondary"
          //
          TabIndicatorProps={{
            style: {
              top: IsMobile ? `${58 * (tabsIndex + 1) - 4}px` : "",
              height: "4px",
              width: IsMobile ? "143px" : "240px",
              left: IsMobile ? "50%" : `${(tabsElWidth / 3) * tabsIndex}px`,
              translate: IsMobile ? "-50% 0" : "",
            },
          }}
          //
          sx={{
            maxWidth: "730px",
            marginInline: "auto",
            borderBottom: IsMobile ? "unset" : "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          {featuresData.tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                value={i}
                label={tab.tabText}
                //
                sx={{
                  color: theme.palette.darkBlue.main,
                  fontWeight: 400,
                  textTransform: "capitalize",
                  height: { xs: "58px", xl: "76px" },
                  maxWidth: "unset",
                  flex: IsMobile ? "0 0 1" : "1",
                  borderBottom: "1px solid rgba(73, 93, 207, 0.2001)",
                  opacity: tabsIndex == i ? 1 : 0.75,
                  transition: "color ease-in-out 250ms",

                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },

                  "&.Mui-selected": {
                    color: theme.palette.darkBlue.main,
                    fontWeight: 400,
                  },

                  "&.MuiDivider-root": {
                    display: { md: "none" },
                  },
                }}
              />
            );
          })}
        </Tabs>
      </Box>

      {/* Tabs Content */}
      {/* Slider outer-Wrapper */}
      <Box
        sx={{
          position: "relative",
          marginInline: { xs: theme.spacing(-8), xl: 0 },
          marginBlockStart: theme.spacing(18),
          paddingBlockEnd: { md: "48px" },
        }}
      >
        {/* Section with blue boxes behind the illustration */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            width: "100%",
            height: "100%",

            paddingInline: { xs: theme.spacing(8), xl: 0 },
            paddingBlockEnd: { xs: "0", md: "48px" },

            zIndex: -50,

            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: {
              xs: theme.spacing(17),
              md: theme.spacing(8),
              lg: theme.spacing(16),
            },

            [theme.breakpoints.up(2000)]: {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              flex: "1",

              // center the children horizontally
              display: "flex",
              alignItems: { xs: "flex-start", md: "center", xl: "flex-start" },
            }}
          >
            <Box
              sx={{
                position: "relative",

                width: "100%",
                height: "auto",

                maxWidth: () => {
                  const maxWidth = { xs: "375px", md: "536px" };

                  if (tabsIndex === 1) {
                    maxWidth["md"] = "486px";
                  }
                  if (tabsIndex === 2) {
                    maxWidth["md"] = "440px";
                  }
                  return maxWidth;
                },

                aspectRatio: () => {
                  if (tabsIndex === 0) return "311 / 201";
                  if (tabsIndex === 1) return "321 / 277";
                  if (tabsIndex === 2) return "311 / 269";
                },

                marginInline: { xs: "auto", md: 0 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "-37px", xl: "-89px" },
                  right: { xs: "35px", xl: "65px" },

                  background: theme.palette.primary.main,

                  height: { xs: "203px", xl: "352px" },
                  width: "1000px",

                  borderRadius: "500px",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ flex: "1", maxWidth: "445px" }} />
        </Box>

        {/* Slider inner-Wrapper */}
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <Stack
            flexDirection="row"
            sx={{
              translate: `${tabsIndex * -100}%`,
              transition: "translate 400ms ease-in-out",

              "& > *": {
                flex: "0 0 100%",
                paddingInline: { xs: theme.spacing(8), xl: 0 },
              },
              "& picture": {
                display: "block",
                marginInline: { xs: "auto", lg: "unset" },
              },
              "& img": {
                display: "block",
                width: "100%",
                height: "auto",
              },
            }}
          >
            {/* Slide */}
            <Stack
              flexDirection={{ md: "row" }}
              alignItems={{ md: "center", xl: "unset" }}
              justifyContent={{ xl: "space-between" }}
              gap={{
                md: theme.spacing(8),
                lg: theme.spacing(16),
                xl: 0,
              }}
              sx={{
                "& picture": {
                  maxWidth: { xs: "375px", md: "536px" },
                },
                "&>*": {
                  sm: {
                    flex: "1",
                  },
                },
              }}
            >
              {/* Illustration */}
              <picture>
                {/* SVG format  */}
                <source srcSet={simpleBookmarkingSVG} type="image/svg+xml" />

                {/* Avif format */}
                <source
                  srcSet={`${simpleBookmarking311wAVIF} 311w, ${simpleBookmarking538wAVIF} 538w`}
                  sizes="(max-width: 425px) 311px, 538px"
                  type="image/avif"
                />

                {/* Webp */}
                <source
                  srcSet={`${simpleBookmarking311wWEBP} 311w, ${simpleBookmarking538wWEBP} 538w`}
                  sizes="(max-width: 425px) 311px, 538px"
                  type="image/webp"
                />

                {/* PNG */}
                <img
                  srcSet={`${simpleBookmarking311wPNG} 311w, ${simpleBookmarking538wPNG} 538w`}
                  sizes="(max-width: 425px) 311px, 538px"
                  src={simpleBookmarking538wPNG}
                  alt="Simple Bookmarking Illustration"
                  width="311"
                  height="201"
                  loading="lazy"
                />
              </picture>

              {/* Right Text Part */}
              <Box
                sx={{
                  marginBlockStart: {
                    xs: theme.spacing(17),
                    md: theme.spacing(0),
                    xl: theme.spacing(14),
                  },
                  maxWidth: "445px",
                  marginInline: { xs: "auto", xl: "unset" },
                  "&>h2, &>p": {
                    textAlign: { xs: "center", md: "left" },
                  },
                  "&>button": {
                    marginInline: { xs: "auto", md: "unset" },
                  },
                }}
              >
                <Typography variant="h2">Bookmark in one click</Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBlockStart: { xl: theme.spacing(4) } }}
                >
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginInline: "auto",
                    display: "block",
                    marginBlockStart: {
                      xs: theme.spacing(4),
                      md: theme.spacing(8),
                    },
                    paddingInline: theme.spacing(6),
                  }}
                >
                  More Info
                </Button>
              </Box>
            </Stack>

            {/* Slide */}
            <Stack
              flexDirection={{ md: "row" }}
              alignItems={{ md: "center", xl: "unset" }}
              gap={{
                md: theme.spacing(8),
                lg: theme.spacing(16),
                xl: theme.spacing(31),
              }}
              sx={{
                "& picture": {
                  maxWidth: { xs: "375px", md: "486px" },
                },
                "&>*": {
                  sm: {
                    flex: "1",
                  },
                },
              }}
            >
              {/* Illustration */}
              <picture>
                {/* SVG format  */}
                <source srcSet={speedySearchingSVG} type="image/svg+xml" />

                {/* Avif format */}
                <source
                  srcSet={`${speedySearch321wAVIF} 321w, ${speedySearch478wAVIF} 478w`}
                  sizes="(max-width: 425px) 321px, 478px"
                  type="image/avif"
                />

                {/* Webp */}
                <source
                  srcSet={`${speedySearch321wWEBP} 321w, ${speedySearch478wWEBP} 478w`}
                  sizes="(max-width: 425px) 321px, 478px"
                  type="image/webp"
                />

                {/* PNG */}
                <img
                  srcSet={`${speedySearch321wPNG} 321w, ${speedySearch478wPNG} 478w`}
                  sizes="(max-width: 425px) 321px, 478px"
                  src={speedySearch321wPNG}
                  alt="Simple Bookmarking Illustration"
                  width="321"
                  height="277"
                  loading="lazy"
                />
              </picture>

              {/* Right Text Part */}
              <Box
                sx={{
                  marginBlockStart: {
                    xs: theme.spacing(17),
                    md: theme.spacing(0),
                    xl: theme.spacing(14),
                  },
                  maxWidth: "445px",
                  marginInline: "auto",
                  "&>h2, &>p": {
                    textAlign: { xs: "center", md: "left" },
                  },
                  "&>button": {
                    marginInline: { xs: "auto", md: "unset" },
                  },
                }}
              >
                <Typography variant="h2">Intelligent search</Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBlockStart: { xl: theme.spacing(4) } }}
                >
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginInline: "auto",
                    display: "block",
                    marginBlockStart: {
                      xs: theme.spacing(4),
                      md: theme.spacing(8),
                    },
                    paddingInline: theme.spacing(6),
                  }}
                >
                  More Info
                </Button>
              </Box>
            </Stack>

            {/* Slide */}
            <Stack
              flexDirection={{ md: "row" }}
              alignItems={{ md: "center", xl: "unset" }}
              gap={{
                md: theme.spacing(8),
                lg: theme.spacing(16),
                xl: theme.spacing(31),
              }}
              //
              sx={{
                "& picture": {
                  maxWidth: { xs: "375px", md: "440px" },
                },
                "&>*": {
                  sm: {
                    flex: "1",
                  },
                },
              }}
            >
              {/* Illustration */}
              <picture>
                {/* SVG format  */}
                <source srcSet={easySharingSVG} type="image/svg+xml" />

                {/* Avif format */}
                <source
                  srcSet={`${easySharing311wAVIF} 311w, ${easySharing440wAVIF} 440w`}
                  sizes="(max-width: 425px) 311px, 440px"
                  type="image/avif"
                />

                {/* Webp */}
                <source
                  srcSet={`${easySharing311wWEBP} 311w, ${easySharing440wWEBP} 440w`}
                  sizes="(max-width: 425px) 311px, 440px"
                  type="image/webp"
                />

                {/* PNG */}
                <img
                  srcSet={`${easySharing311wPNG} 311w, ${easySharing440wPNG} 440w`}
                  sizes="(max-width: 425px) 311px, 440px"
                  src={easySharing311wPNG}
                  alt="Simple Bookmarking Illustration"
                  width="311"
                  height="269"
                  loading="lazy"
                />
              </picture>

              {/* Right Text Part */}
              <Box
                sx={{
                  marginBlockStart: {
                    xs: theme.spacing(17),
                    md: theme.spacing(0),
                    xl: theme.spacing(14),
                  },
                  maxWidth: "445px",
                  marginInline: "auto",
                  "&>h2, &>p": {
                    textAlign: { xs: "center", md: "left" },
                  },
                  "&>button": {
                    marginInline: { xs: "auto", md: "unset" },
                  },
                }}
              >
                <Typography variant="h2">Share your bookmarks</Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBlockStart: { xl: theme.spacing(4) } }}
                >
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginInline: "auto",
                    display: "block",
                    marginBlockStart: {
                      xs: theme.spacing(4),
                      md: theme.spacing(8),
                    },
                    paddingInline: theme.spacing(6),
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
