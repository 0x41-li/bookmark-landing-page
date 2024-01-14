/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

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
