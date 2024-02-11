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
import { useEffect, useRef, useState } from "react";

// images/illustrations
import simpleBookmarkingSVG from "../assets/images/features/simple-bookmarking.svg";
import speedySearchingSVG from "../assets/images/features/speedy-searching.svg";
import easySharingSVG from "../assets/images/features/easy-sharing.svg";

const Features = () => {
  const theme = useTheme() as Theme;

  const tabsElRef = useRef<HTMLDivElement>(null);
  const [tabsElWidth, setTabsElWidth] = useState(0);
  const [tabsIndex, setTabsIndex] = useState(0);

  const IsMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <Box
        sx={{
          marginBlockStart: { xs: theme.spacing(10), xl: theme.spacing(11.5) },
        }}
      >
        <Tabs
          ref={tabsElRef}
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
              left: IsMobile ? "50%" : `${(tabsElWidth / 3) * tabsIndex}px`,
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
              height: { xs: "57px", xl: "76px" },
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
      <Box
        sx={{
          marginInline: { xs: theme.spacing(-8), xl: 0 },
          marginBlockStart: theme.spacing(18),
          overflow: "hidden",
        }}
      >
        <Stack
          flexDirection="row"
          sx={{
            "& > *": {
              flex: "0 0 100%",
              paddingInline: { xs: theme.spacing(8), xl: 0 },
            },
            translate: `${tabsIndex * -100}%`,
            transition: "translate 400ms ease-in-out",
            maxWidth: { xk: "1031px" },
          }}
        >
          <Stack
            flexDirection={{ md: "row" }}
            sx={{ "&>*": { flex: { md: "1", xl: "0 0 auto" } } }}
            alignItems={{ md: "center", xl: "unset" }}
            justifyContent={{ xl: "space-between" }}
            gap={{
              md: theme.spacing(8),
              lg: theme.spacing(16),
              xl: 0,
            }}
          >
            <Box
              sx={{
                "& img, & picture": {
                  display: "block",
                  marginInline: "auto",
                },
                "& picture": {
                  maxWidth: "536px",
                },
              }}
            >
              <picture>
                <source srcSet={simpleBookmarkingSVG} type="image/svg+xml" />
                <img src="" alt="" />
              </picture>
            </Box>

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
              <Typography variant="body1">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
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

          <Stack
            flexDirection={{ md: "row" }}
            sx={{ "&>*": { flex: { md: "1" } } }}
            alignItems={{ md: "center", xl: "unset" }}
            gap={{
              md: theme.spacing(8),
              lg: theme.spacing(16),
              xl: theme.spacing(31),
            }}
          >
            <Box
              sx={{
                "& img, & picture": {
                  display: "block",
                  marginInline: "auto",
                },
                "& picture": {
                  maxWidth: "536px",
                },
              }}
            >
              <picture>
                <source srcSet={speedySearchingSVG} type="image/svg+xml" />
                <img src="" alt="" />
              </picture>
            </Box>

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
              <Typography variant="body1">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
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

          <Stack
            flexDirection={{ md: "row" }}
            sx={{ "&>*": { flex: { md: "1" } } }}
            alignItems={{ md: "center", xl: "unset" }}
            gap={{
              md: theme.spacing(8),
              lg: theme.spacing(16),
              xl: theme.spacing(31),
            }}
          >
            <Box
              sx={{
                "& img, & picture": {
                  display: "block",
                  marginInline: "auto",
                },
                "& picture": {
                  maxWidth: "536px",
                },
              }}
            >
              <picture>
                <source srcSet={easySharingSVG} type="image/svg+xml" />
                <img src="" alt="" />
              </picture>
            </Box>

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
              <Typography variant="body1">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
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
    </Container>
  );
};

export default Features;
