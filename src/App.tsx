import { CssBaseline, ThemeProvider, alpha, createTheme } from "@mui/material";

import "./sass/app.scss";

// Website parts
import Header from "./shared/Header.tsx";
import Hero from "./Hero.tsx";

// fonts
import RubikRegular from "./assets/fonts/Rubik/static/Rubik-Regular.ttf";
import RubikMedium from "./assets/fonts/Rubik/static/Rubik-Medium.ttf";

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
        fontSize: "1.5reem",
        lineHeight: "2.5rem",
        fontWeight: 500,
        color: colors.darkBlue,

        "@media (min-width: 1280px)": {
          fontSize: "3rem",
          lineHeight: "3.25rem",
        },
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
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Rubik'), local('Rubik-Regular'), url(${RubikRegular}) format('truetype');
        }

        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Rubik'), local('Rubik-Medium'), url(${RubikMedium}) format('truetype');
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        `,
      },

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
            letterSpacing: "0.0156rem",
            textTransform: "capitalize",

            paddingInline: "16px",
            paddingBlock: "10px",

            border: "none",
            "&:hover": {
              border: "none",
            },
          },

          contained: {
            boxShadow: `0px 8px 8px -4px rgba(73, 93, 207, 0.20)`,
          },

          outlined: {
            color: alpha(colors.darkBlue, 0.75),
            backgroundColor: "#F7F7F7",
            boxShadow: "0px 8px 8px -4px rgba(73, 93, 207, 0.20)",
          },
        },
      },
    },

    spacing: 4,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
