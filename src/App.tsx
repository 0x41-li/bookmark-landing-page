import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./layouts/Header.tsx";

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

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
    palette: {
      primary: {
        main: "#5267DF",
        contrastText: "#FFF",
      },
      secondary: {
        main: "#FA5959",
        contrastText: "#FFF",
      },
      darkBlue: {
        main: "#242A45",
      },
      gray: {
        main: "#9194A2",
      },
    },
    typography: {
      fontFamily: "Rubik, Arial, sans-serif",
      fontSize: 16,
      h1: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
        fontWeight: 500,
        "@media (min-width:600px)": {
          fontSize: "3rem",
          lineHeight: "3.25rem",
        },
      },
      h2: {
        fontSize: "1.5reem",
        lineHeight: "2.5rem",
        fontWeight: 500,
        "@media (min-width:600px)": {
          fontSize: "3rem",
          lineHeight: "3.25rem",
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
        `,
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            "@media (max-width:1024px)": {
              paddingInlineStart: "32px",
              paddingInlineEnd: "32px",
            },
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
    },
    spacing: 4,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}

export default App;
