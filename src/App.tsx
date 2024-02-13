import { ThemeProvider, alpha, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";

// sass
import "./sass/app.scss";

// Website parts
import Header from "./shared/Header.tsx";
import Hero from "./sections/Hero.tsx";
import Features from "./sections/Features.tsx";
import DownloadExtension from "./sections/DownloadExtension.tsx";

// Mui module extension
// ! I tried to put in another file, but I faced a lot of issues
declare module "@mui/material/styles" {
  interface Palette {
    darkBlue: Palette["primary"];
    gray: Palette["primary"];
  }

  interface PaletteOptions {
    darkBlue?: PaletteOptions["primary"];
    gray: PaletteOptions["primary"];
  }
}

const colors = {
  primary: "#5267DF",
  secondary: "#FA5959",
  darkBlue: "#242A45",
  gray: "#9194A2",

  bodyText: "rgba(32, 46, 69, 0.5)",
};

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },

    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      darkBlue: {
        main: colors.darkBlue,
      },
      gray: {
        main: colors.gray,
      },
    },

    typography: {
      fontFamily: "Rubik, Arial, sans-serif",
      fontSize: 16,

      h1: {
        fontSize: "1.875rem",
        lineHeight: "2.5rem",
        letterSpacing: "-0.095px",
        fontWeight: 500,
        color: colors.darkBlue,

        "@media (min-width: 1280px)": {
          fontSize: "3rem",
          lineHeight: "3.25rem",
        },
      },

      h2: {
        fontSize: "1.5rem",
        lineHeight: "3.25rem",
        fontWeight: 500,
        color: colors.darkBlue,

        "@media (min-width: 1280px)": {
          fontSize: "2rem",
          lineHeight: "3.25rem",
        },
      },

      h3: {
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
        fontWeight: 500,
        color: colors.darkBlue,
      },

      body1: {
        fontSize: "0.9375rem",
        lineHeight: "1.5625rem",
        fontWeight: 400,
        color: colors.gray,

        "@media (min-width: 1280px)": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
        },
      },
    },

    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: false,
          disableGutters: true,
        },

        styleOverrides: {
          root: {
            paddingInlineStart: "32px",
            paddingInlineEnd: "32px",

            "@media (min-width:1024px)": {
              paddingInlineStart: "64px",
              paddingInlineEnd: "64px",
            },

            "@media (min-width:1280px)": {
              paddingInlineStart: "0",
              paddingInlineEnd: "0",
            },
          },
        },
      },

      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "0.875rem",
            textTransform: "capitalize",

            paddingInline: "16px",
            paddingBlock: "10px",

            "@media (min-width:1024px)": {
              paddingInline: "24px",
            },

            border: "none",
            "&:hover": {
              border: "none",
            },
          },

          contained: {
            boxShadow: `0px 8px 8px -4px rgba(73, 93, 207, 0.20)`,
            border: "2px solid transparent",
            "&:hover": {
              backgroundColor: "white",
              border: `2px solid ${colors.primary}`,

              color: colors.primary,
            },
          },

          outlined: {
            color: alpha(colors.darkBlue, 0.75),
            backgroundColor: "#F7F7F7",
            boxShadow: "0px 8px 8px -4px rgba(73, 93, 207, 0.20)",

            border: "2px solid transparent",
            "&:hover": {
              backgroundColor: "white",
              border: `2px solid ${alpha(colors.darkBlue, 0.75)}`,
            },
          },
        },
      },
    },

    spacing: 4,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // prevent scrolling when menu open on mobile devices
  // ! Overflow hidden will not be removed if the menu was open in a small size device, and the device size changed to a tablet+ size, this can be done using dev tool, or rotating

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Features />
      <DownloadExtension />
    </ThemeProvider>
  );
}

export default App;
