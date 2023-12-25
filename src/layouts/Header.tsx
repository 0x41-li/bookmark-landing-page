import { Box, Container, Link, Stack } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

// Assets
import LogoSVG from "../assets/logo/LogoSVG";

// Icons
import FacebookIcon from "../assets/icons/FacebookIcon";
import XIcon from "../assets/icons/XIcon";

// Header Items
import data from "../data/data.json";
import SocialMediaIcon from "../components/SocialMediaIcon";

const Header: React.FC = () => {
  const theme = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const header = data.header;
  const menu = header.menu;
  const socialMediaIcons = header.socialMediaIcons;

  return (
    <Container sx={{ marginBlockStart: "40px" }} component="header">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Logo of the website"
          sx={{ position: "relative", display: "flex", zIndex: "9" }}
        >
          <LogoSVG
            aria-hidden
            circleFillColor={isMenuOpen ? "#FFF" : theme.palette.primary.main}
            bookmarkPathIconFillColor={
              isMenuOpen ? theme.palette.darkBlue.main : "#FFF"
            }
            bookmarkTextFillColor={
              isMenuOpen ? "#FFF" : theme.palette.darkBlue.main
            }
            sx={{
              width: 149,
              height: 25,
              "& > *": {
                transition: isMenuOpen
                  ? "fill 400ms ease-in-out 400ms"
                  : "fill 400ms ease-in-out 1700ms",
              },
            }}
          />
        </Link>

        {/* Humberger Icon */}
        <Box
          component="button"
          sx={{
            position: "relative",
            width: "18px",
            height: "15px",
            backgroundColor: "transparent",
            border: "none",
            padding: "0px",
            cursor: "pointer",
            zIndex: "9",
            "& > *": {
              position: "absolute",
              left: "0",
              width: "18px",
              height: "3px",
            },
          }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Box
            component="span"
            sx={{
              top: isMenuOpen ? "50%" : "0",
              translate: isMenuOpen ? "0 -50%" : "0 0",
              transformOrigin: "center",
              rotate: isMenuOpen ? "45deg" : "",
              backgroundColor: (theme) =>
                isMenuOpen ? "#FFF" : theme.palette.darkBlue.main,
              transition: isMenuOpen
                ? "rotate 400ms ease-in-out 800ms, translate 400ms ease-in-out 400ms, top 400ms ease-in-out 200ms, background-color 400ms ease-in-out 400ms"
                : "rotate 400ms ease-in-out, translate 400ms ease-in-out 1700ms, top 400ms ease-in-out 1700ms, background-color 400ms ease-in-out 1700ms",
            }}
          />

          <Box
            component="span"
            sx={{
              top: "6px",
              backgroundColor: (theme) =>
                isMenuOpen ? "#FFF" : theme.palette.darkBlue.main,
              opacity: isMenuOpen ? "0" : "1",
              transition: isMenuOpen
                ? "opacity 400ms ease-in-out, background-color 400ms ease-in-out 800ms"
                : "opacity 400ms ease-in-out, background-color 400ms ease-in-out 1700ms",
            }}
          />

          <Box
            component="span"
            sx={{
              bottom: isMenuOpen ? "50%" : "0",
              translate: isMenuOpen ? "0 50%" : "0 0",
              transformOrigin: "center",
              rotate: isMenuOpen ? "-45deg" : "",
              backgroundColor: (theme) =>
                isMenuOpen ? "#FFF" : theme.palette.darkBlue.main,
              transition: isMenuOpen
                ? "rotate 400ms ease-in-out 800ms, translate 400ms ease-in-out 400ms, bottom 400ms ease-in-out 200ms, background-color 400ms ease-in-out 400ms"
                : "rotate 400ms ease-in-out, translate 400ms ease-in-out 1700ms, bottom 400ms ease-in-out 1700ms, background-color 400ms ease-in-out 1700ms",
            }}
          />
        </Box>

        {/* Menu and Social Media Modal + the dark blue background */}
        <Box
          sx={{
            position: "absolute",
            top: isMenuOpen ? "0" : "-100vh",
            left: "0",
            height: "100vh",
            width: "100vw",
            transition: isMenuOpen
              ? "top 800ms ease-in-out 400ms"
              : "top 800ms ease-in-out 1200ms",
            zIndex: "8",
          }}
        >
          {/* background */}
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100vh",
              width: "100vw",
              backgroundColor: (theme) => theme.palette.darkBlue.main,
              backdropFilter: "blur(16px)",
              opacity: "0.95",
            }}
          />

          {/* Menu */}
          {menu.length > 0 && (
            <Stack
              alignItems="center"
              sx={{
                position: "absolute",
                top: "105px",
                width: "100%",
                paddingInline: theme.spacing(8),
              }}
            >
              {menu.map((link, i) => {
                if ("type" in link) {
                  return (
                    <Link
                      key={link.text}
                      href={link.href}
                      data-type="button"
                      sx={{
                        marginBlockStart: theme.spacing(6),
                        paddingBlock: theme.spacing(4),
                        width: "100%",
                        border: "2px solid #FFF",
                        borderRadius: "5px",

                        fontSize: "1.25rem",
                        lineHeight: "1.0625rem",
                        letterSpacing: "0.14rem",
                        fontWeight: "500",
                        textAlign: "center",
                        color: "#FFF",
                        textDecorationLine: "none",
                        textTransform: "uppercase",

                        opacity: isMenuOpen ? "1" : "0",

                        transition: isMenuOpen
                          ? `opacity 400ms ease-in-out ${900 + (i + 2) * 100}ms`
                          : `opacity 400ms ease-in-out ${
                              1000 - (i + 2) * 100
                            }ms`,
                      }}
                    >
                      {link.text}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.text}
                    href={link.href}
                    color="#FFF"
                    underline="none"
                    sx={{
                      paddingBlockStart: theme.spacing(6),
                      paddingBlockEnd: theme.spacing(6),
                      width: "100%",
                      borderTop: "1px solid rgba(255, 255, 255, 0.15)",

                      fontSize: "1.25rem",
                      lineHeight: "1.0625rem",
                      letterSpacing: "0.14rem",
                      textTransform: "uppercase",
                      textAlign: "center",
                      textDecorationLine: "none",
                      color: "#FFF",

                      opacity: isMenuOpen ? "1" : "0",

                      transition: isMenuOpen
                        ? `opacity 400ms ease-in-out ${900 + (i + 2) * 100}ms`
                        : `opacity 400ms ease-in-out ${1000 - (i + 2) * 100}ms`,

                      "&:nth-last-of-type(2)": {
                        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                );
              })}
            </Stack>
          )}

          {/* Social Media Icons  */}
          {socialMediaIcons.length > 0 && (
            <Stack
              alignItems="center"
              justifyContent="center"
              direction="row"
              spacing={10}
              sx={{
                position: "absolute",
                bottom: theme.spacing(12),
                width: "100%",
              }}
            >
              {socialMediaIcons.map((item, i) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    sx={{
                      display: "flex",
                      opacity: isMenuOpen ? "1" : "0",
                      transition: isMenuOpen
                        ? `opacity 400ms ease-in-out ${1400 + (i + 1) * 100}ms`
                        : `opacity 400ms ease-in-out ${(i + 1) * 100}ms`,
                    }}
                  >
                    <SocialMediaIcon
                      name={item.name}
                      sx={{ color: "#FFF", fontSize: 24 }}
                    />
                  </Link>
                );
              })}
            </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default Header;
