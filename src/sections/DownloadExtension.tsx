import {
  Box,
  Button,
  Container,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

// ---- Images import ----
// ------ Chrome logo
import chromeSVG from "../assets/images/download-extension/chrome.svg";
import chromeAVIF from "../assets/images/download-extension/chrome.avif";
import chromeWEBP from "../assets/images/download-extension/chrome.webp";
import chromePNG from "../assets/images/download-extension/chrome.png";

// ------ Firefox logo
import firefoxSVG from "../assets/images/download-extension/firefox.svg";
import firefoxAVIF from "../assets/images/download-extension/firefox.avif";
import firefoxWEBP from "../assets/images/download-extension/firefox.webp";
import firefoxPNG from "../assets/images/download-extension/firefox.png";

// ------ Opera logo
import operaSVG from "../assets/images/download-extension/opera.svg";
import operaAVIF from "../assets/images/download-extension/opera.avif";
import operaWEBP from "../assets/images/download-extension/opera.webp";
import operaPNG from "../assets/images/download-extension/opera.png";
// ---- Images import ----

const DownloadExtension = () => {
  const theme = useTheme() as Theme;

  return (
    <Container
      component="section"
      sx={{
        marginBlockStart: { xs: theme.spacing(8.5), md: theme.spacing(41) },
        maxWidth: "1104px",
      }}
    >
      {/* Section head */}
      <Box sx={{ maxWidth: "540px", marginInline: "auto" }}>
        <Typography textAlign="center" variant="h2">
          Download the extension
        </Typography>

        <Typography
          textAlign="center"
          variant="body1"
          sx={{ marginBlockStart: { xl: theme.spacing(4) } }}
        >
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </Typography>
      </Box>

      {/* Cards */}
      <Stack
        flexDirection={{ lg: "row" }}
        alignItems={{ xs: "center", lg: "flex-start" }}
        justifyContent="center"
        gap={{ xs: theme.spacing(10) }}
        //
        sx={{
          marginBlockStart: { xs: theme.spacing(10), xl: theme.spacing(12) },
          "& .MuiButton-root": {
            paddingInline: {
              xs: theme.spacing(9),
              lg: theme.spacing(9.25),
            },
          },
        }}
      >
        {/* Chrome Card */}
        <Box
          sx={{
            boxShadow: "0px 10px 20px -5px #485cce33",
            height: "371px",
            width: "280px",
            borderRadius: "15px",
            paddingBlockStart: theme.spacing(12.25),
            paddingBlockEnd: theme.spacing(6),
          }}
        >
          {/* Browser Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& img": {
                display: "block",
              },
            }}
          >
            <picture>
              <source srcSet={chromeSVG} type="image/svg+xml" />

              <source srcSet={chromeAVIF} type="image/avif" />

              <source srcSet={chromeWEBP} type="image/webp" />

              <img
                src={chromePNG}
                width="102"
                height="100"
                alt="Chrome Logo"
                loading="lazy"
              />
            </picture>
          </Box>

          {/* Text */}
          <Box sx={{ marginBlockStart: theme.spacing(8) }}>
            <Typography textAlign="center" variant="h3">
              Add to Chrome
            </Typography>
            <Typography
              textAlign="center"
              sx={{
                marginBlockStart: theme.spacing(1.5),
                fontSize: { xl: "0.9375rem" },
                lineHeight: { xl: "1.750rem" },
              }}
            >
              Minimum version 62
            </Typography>
          </Box>

          {/* Circles banner using inline SVG */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: theme.spacing(8),
              overflow: "hidden",
              "& > svg": {
                flex: "0 0 auto",
              },
            }}
          >
            <svg
              width="284"
              height="4"
              viewBox="0 0 284 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM284 2C284 3.10457 283.105 4 282 4C280.895 4 280 3.10457 280 2C280 0.895431 280.895 0 282 0C283.105 0 284 0.895431 284 2ZM265 4C266.105 4 267 3.10457 267 2C267 0.895431 266.105 0 265 0C263.895 0 263 0.895431 263 2C263 3.10457 263.895 4 265 4ZM232 2C232 3.10457 231.105 4 230 4C228.895 4 228 3.10457 228 2C228 0.895431 228.895 0 230 0C231.105 0 232 0.895431 232 2ZM195 4C196.105 4 197 3.10457 197 2C197 0.895431 196.105 0 195 0C193.895 0 193 0.895431 193 2C193 3.10457 193.895 4 195 4ZM162 2C162 3.10457 161.105 4 160 4C158.895 4 158 3.10457 158 2C158 0.895431 158.895 0 160 0C161.105 0 162 0.895431 162 2ZM142 4C143.105 4 144 3.10457 144 2C144 0.895431 143.105 0 142 0C140.895 0 140 0.895431 140 2C140 3.10457 140.895 4 142 4ZM127 2C127 3.10457 126.105 4 125 4C123.895 4 123 3.10457 123 2C123 0.895431 123.895 0 125 0C126.105 0 127 0.895431 127 2ZM247 4C248.105 4 249 3.10457 249 2C249 0.895431 248.105 0 247 0C245.895 0 245 0.895431 245 2C245 3.10457 245.895 4 247 4ZM214 2C214 3.10457 213.105 4 212 4C210.895 4 210 3.10457 210 2C210 0.895431 210.895 0 212 0C213.105 0 214 0.895431 214 2ZM177 4C178.105 4 179 3.10457 179 2C179 0.895431 178.105 0 177 0C175.895 0 175 0.895431 175 2C175 3.10457 175.895 4 177 4ZM109 2C109 3.10457 108.105 4 107 4C105.895 4 105 3.10457 105 2C105 0.895431 105.895 0 107 0C108.105 0 109 0.895431 109 2ZM90 4C91.1046 4 92 3.10457 92 2C92 0.895431 91.1046 0 90 0C88.8954 0 88 0.895431 88 2C88 3.10457 88.8954 4 90 4ZM74 2C74 3.10457 73.1046 4 72 4C70.8954 4 70 3.10457 70 2C70 0.895431 70.8954 0 72 0C73.1046 0 74 0.895431 74 2ZM55 4C56.1046 4 57 3.10457 57 2C57 0.895431 56.1046 0 55 0C53.8954 0 53 0.895431 53 2C53 3.10457 53.8954 4 55 4ZM39 2C39 3.10457 38.1046 4 37 4C35.8954 4 35 3.10457 35 2C35 0.895431 35.8954 0 37 0C38.1046 0 39 0.895431 39 2ZM20 4C21.1046 4 22 3.10457 22 2C22 0.895431 21.1046 0 20 0C18.8954 0 18 0.895431 18 2C18 3.10457 18.8954 4 20 4Z"
                fill="#495DCF"
                fillOpacity="0.20012"
              />
            </svg>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: theme.spacing(6),
            }}
          >
            <Button variant="contained">Add & Install Extension</Button>
          </Box>
        </Box>

        {/* FireFox Card */}
        <Box
          sx={{
            marginBlockStart: { lg: theme.spacing(10) },
            boxShadow: "0px 10px 20px -5px #485cce33",
            height: "371px",
            width: "280px",
            borderRadius: "15px",
            paddingBlockStart: theme.spacing(12.25),
            paddingBlockEnd: theme.spacing(6),
          }}
        >
          {/* Browser Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& img": {
                display: "block",
              },
            }}
          >
            <picture>
              <source srcSet={firefoxSVG} type="image/svg+xml" />

              <source srcSet={firefoxAVIF} type="image/avif" />

              <source srcSet={firefoxWEBP} type="image/webp" />

              <img
                src={firefoxPNG}
                width="105"
                height="100"
                alt="Firefox logo"
              />
            </picture>
          </Box>

          {/* Text */}
          <Box sx={{ marginBlockStart: theme.spacing(8) }}>
            <Typography textAlign="center" variant="h3">
              Add to Firefox
            </Typography>
            <Typography
              textAlign="center"
              variant="body1"
              sx={{
                marginBlockStart: theme.spacing(1.5),
                lineHeight: "1.750rem",
              }}
            >
              Minimum version 55
            </Typography>
          </Box>

          {/* Circles banner using inline SVG */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: theme.spacing(8),
              overflow: "hidden",
              "& > svg": {
                flex: "0 0 auto",
              },
            }}
          >
            <svg
              width="284"
              height="4"
              viewBox="0 0 284 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM284 2C284 3.10457 283.105 4 282 4C280.895 4 280 3.10457 280 2C280 0.895431 280.895 0 282 0C283.105 0 284 0.895431 284 2ZM265 4C266.105 4 267 3.10457 267 2C267 0.895431 266.105 0 265 0C263.895 0 263 0.895431 263 2C263 3.10457 263.895 4 265 4ZM232 2C232 3.10457 231.105 4 230 4C228.895 4 228 3.10457 228 2C228 0.895431 228.895 0 230 0C231.105 0 232 0.895431 232 2ZM195 4C196.105 4 197 3.10457 197 2C197 0.895431 196.105 0 195 0C193.895 0 193 0.895431 193 2C193 3.10457 193.895 4 195 4ZM162 2C162 3.10457 161.105 4 160 4C158.895 4 158 3.10457 158 2C158 0.895431 158.895 0 160 0C161.105 0 162 0.895431 162 2ZM142 4C143.105 4 144 3.10457 144 2C144 0.895431 143.105 0 142 0C140.895 0 140 0.895431 140 2C140 3.10457 140.895 4 142 4ZM127 2C127 3.10457 126.105 4 125 4C123.895 4 123 3.10457 123 2C123 0.895431 123.895 0 125 0C126.105 0 127 0.895431 127 2ZM247 4C248.105 4 249 3.10457 249 2C249 0.895431 248.105 0 247 0C245.895 0 245 0.895431 245 2C245 3.10457 245.895 4 247 4ZM214 2C214 3.10457 213.105 4 212 4C210.895 4 210 3.10457 210 2C210 0.895431 210.895 0 212 0C213.105 0 214 0.895431 214 2ZM177 4C178.105 4 179 3.10457 179 2C179 0.895431 178.105 0 177 0C175.895 0 175 0.895431 175 2C175 3.10457 175.895 4 177 4ZM109 2C109 3.10457 108.105 4 107 4C105.895 4 105 3.10457 105 2C105 0.895431 105.895 0 107 0C108.105 0 109 0.895431 109 2ZM90 4C91.1046 4 92 3.10457 92 2C92 0.895431 91.1046 0 90 0C88.8954 0 88 0.895431 88 2C88 3.10457 88.8954 4 90 4ZM74 2C74 3.10457 73.1046 4 72 4C70.8954 4 70 3.10457 70 2C70 0.895431 70.8954 0 72 0C73.1046 0 74 0.895431 74 2ZM55 4C56.1046 4 57 3.10457 57 2C57 0.895431 56.1046 0 55 0C53.8954 0 53 0.895431 53 2C53 3.10457 53.8954 4 55 4ZM39 2C39 3.10457 38.1046 4 37 4C35.8954 4 35 3.10457 35 2C35 0.895431 35.8954 0 37 0C38.1046 0 39 0.895431 39 2ZM20 4C21.1046 4 22 3.10457 22 2C22 0.895431 21.1046 0 20 0C18.8954 0 18 0.895431 18 2C18 3.10457 18.8954 4 20 4Z"
                fill="#495DCF"
                fillOpacity="0.20012"
              />
            </svg>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: theme.spacing(6),
            }}
          >
            <Button variant="contained">Add & Install Extension</Button>
          </Box>
        </Box>

        {/* Opera Card */}
        <Box
          sx={{
            marginBlockStart: { lg: theme.spacing(20) },
            boxShadow: "0px 10px 20px -5px #485cce33",
            height: "371px",
            width: "280px",
            borderRadius: "15px",
            paddingBlockStart: theme.spacing(12.25),
            paddingBlockEnd: theme.spacing(6),
          }}
        >
          {/* Browser Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& img": {
                display: "block",
              },
            }}
          >
            <picture>
              <source srcSet={operaSVG} type="image/svg+xml" />

              <source srcSet={operaAVIF} type="image/avif" />

              <source srcSet={operaWEBP} type="image/webp" />

              <img src={operaPNG} width="96" height="100" alt="Opera Logo" />
            </picture>
          </Box>

          {/* Text */}
          <Box sx={{ marginBlockStart: theme.spacing(8) }}>
            <Typography textAlign="center" variant="h3">
              Add to Opera
            </Typography>
            <Typography
              textAlign="center"
              variant="body1"
              sx={{
                marginBlockStart: theme.spacing(1.5),
                lineHeight: "1.750rem",
              }}
            >
              Minimum version 46
            </Typography>
          </Box>

          {/* Circles banner using inline SVG */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: theme.spacing(8),
              overflow: "hidden",
              "& > svg": {
                flex: "0 0 auto",
              },
            }}
          >
            <svg
              width="284"
              height="4"
              viewBox="0 0 284 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM284 2C284 3.10457 283.105 4 282 4C280.895 4 280 3.10457 280 2C280 0.895431 280.895 0 282 0C283.105 0 284 0.895431 284 2ZM265 4C266.105 4 267 3.10457 267 2C267 0.895431 266.105 0 265 0C263.895 0 263 0.895431 263 2C263 3.10457 263.895 4 265 4ZM232 2C232 3.10457 231.105 4 230 4C228.895 4 228 3.10457 228 2C228 0.895431 228.895 0 230 0C231.105 0 232 0.895431 232 2ZM195 4C196.105 4 197 3.10457 197 2C197 0.895431 196.105 0 195 0C193.895 0 193 0.895431 193 2C193 3.10457 193.895 4 195 4ZM162 2C162 3.10457 161.105 4 160 4C158.895 4 158 3.10457 158 2C158 0.895431 158.895 0 160 0C161.105 0 162 0.895431 162 2ZM142 4C143.105 4 144 3.10457 144 2C144 0.895431 143.105 0 142 0C140.895 0 140 0.895431 140 2C140 3.10457 140.895 4 142 4ZM127 2C127 3.10457 126.105 4 125 4C123.895 4 123 3.10457 123 2C123 0.895431 123.895 0 125 0C126.105 0 127 0.895431 127 2ZM247 4C248.105 4 249 3.10457 249 2C249 0.895431 248.105 0 247 0C245.895 0 245 0.895431 245 2C245 3.10457 245.895 4 247 4ZM214 2C214 3.10457 213.105 4 212 4C210.895 4 210 3.10457 210 2C210 0.895431 210.895 0 212 0C213.105 0 214 0.895431 214 2ZM177 4C178.105 4 179 3.10457 179 2C179 0.895431 178.105 0 177 0C175.895 0 175 0.895431 175 2C175 3.10457 175.895 4 177 4ZM109 2C109 3.10457 108.105 4 107 4C105.895 4 105 3.10457 105 2C105 0.895431 105.895 0 107 0C108.105 0 109 0.895431 109 2ZM90 4C91.1046 4 92 3.10457 92 2C92 0.895431 91.1046 0 90 0C88.8954 0 88 0.895431 88 2C88 3.10457 88.8954 4 90 4ZM74 2C74 3.10457 73.1046 4 72 4C70.8954 4 70 3.10457 70 2C70 0.895431 70.8954 0 72 0C73.1046 0 74 0.895431 74 2ZM55 4C56.1046 4 57 3.10457 57 2C57 0.895431 56.1046 0 55 0C53.8954 0 53 0.895431 53 2C53 3.10457 53.8954 4 55 4ZM39 2C39 3.10457 38.1046 4 37 4C35.8954 4 35 3.10457 35 2C35 0.895431 35.8954 0 37 0C38.1046 0 39 0.895431 39 2ZM20 4C21.1046 4 22 3.10457 22 2C22 0.895431 21.1046 0 20 0C18.8954 0 18 0.895431 18 2C18 3.10457 18.8954 4 20 4Z"
                fill="#495DCF"
                fillOpacity="0.20012"
              />
            </svg>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: theme.spacing(6),
            }}
          >
            <Button variant="contained">Add & Install Extension</Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default DownloadExtension;
