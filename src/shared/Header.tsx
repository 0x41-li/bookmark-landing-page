import { Box, Container, Link, Stack, Theme } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

// Assets
import LogoSVG from "../assets/logo/LogoSVG";

// Header Items
import data from "../data/data.json";
import SocialMediaIcon from "../components/SocialMediaIcon";

const Header: React.FC = () => {
  const theme = useTheme() as Theme;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const header = data.header;
  const menu = header.menu;
  const socialMediaIcons = header.socialMediaLinksAndIcons;

  return (
    <Container
      sx={{
        marginBlockStart: { xs: "40px", md: "48px" },
        marginInline: "auto",
        maxWidth: "1104px",
      }}
      component="header"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Logo of the website"
          sx={{ position: "relative", display: "flex", zIndex: "999" }}
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
            display: {
              xs: "block",
              md: "none",
            },

            position: "relative",
            width: "18px",
            height: "15px",
            border: "none",
            padding: "0px",

            backgroundColor: "transparent",

            cursor: "pointer",

            zIndex: "999",

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
            position: { xs: "absolute", md: "static" },
            top: isMenuOpen ? "0" : "-100vh",
            left: "0",
            height: { xs: "100vh", md: "auto" },
            width: { xs: "100vw", md: "auto" },
            transition: isMenuOpen
              ? "top 800ms ease-in-out 400ms"
              : "top 800ms ease-in-out 1200ms",
            zIndex: "990",
          }}
        >
          {/* background */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
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
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: "", md: theme.spacing(11) }}
              sx={{
                position: { xs: "absolute", md: "static" },
                top: "105px",
                width: "100%",
                paddingInline: { xs: theme.spacing(8), md: "0" },
              }}
            >
              {menu.map((link, i) => {
                if (link.type == "button") {
                  return (
                    <Link
                      key={link.text}
                      href={link.href}
                      sx={{
                        marginBlockStart: { xs: theme.spacing(6), md: "0" },
                        paddingBlock: {
                          xs: theme.spacing(4),
                          md: theme.spacing(2.5),
                        },
                        paddingInline: { xs: "0", md: theme.spacing(7.5) },
                        width: "100%",
                        border: {
                          xs: "2px solid #FFF",
                          md: "2px solid transparent",
                        },
                        borderRadius: "5px",

                        fontSize: { xs: "1.25rem", md: "0.8125rem" },
                        lineHeight: "1.0625rem",
                        letterSpacing: "0.14rem",
                        fontWeight: "500",
                        textAlign: "center",
                        color: "#FFF",
                        textDecorationLine: "none",
                        textTransform: "uppercase",

                        opacity: { xs: isMenuOpen ? "1" : "0", md: "1" },

                        background: {
                          xs: "transparent",
                          md: theme.palette.secondary.main,
                        },

                        boxShadow: "0 8px 8px -4px rgba(73, 93, 207, 0.20)",

                        transition: isMenuOpen
                          ? `opacity 400ms ease-in-out ${900 + (i + 2) * 100}ms`
                          : `opacity 400ms ease-in-out ${
                              1000 - (i + 2) * 100
                            }ms, background-color 200ms ease-in-out, color 200ms ease-in-out, border-color 200ms ease-in-out`,

                        "&:hover": {
                          backgroundColor: "transparent",
                          border: `2px solid ${theme.palette.secondary.main}`,
                          color: theme.palette.secondary.main,
                        },
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
                      paddingBlock: { xs: theme.spacing(6), md: "0" },
                      width: "100%",
                      borderTop: {
                        xs: "1px solid rgba(255, 255, 255, 0.15)",
                        md: "none",
                      },

                      fontSize: { xs: "1.25rem", md: "0.8125rem" },
                      lineHeight: "1.0625rem",
                      letterSpacing: "0.14rem",
                      textTransform: "uppercase",
                      textAlign: "center",
                      textDecorationLine: "none",
                      color: { xs: "#FFF", md: theme.palette.darkBlue.main },

                      opacity: { xs: isMenuOpen ? "1" : "0", md: "1" },

                      transition: isMenuOpen
                        ? `opacity 400ms ease-in-out ${900 + (i + 2) * 100}ms`
                        : `opacity 400ms ease-in-out ${
                            1000 - (i + 2) * 100
                          }ms, color 200ms ease-in-out`,

                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },

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
                display: {
                  xs: "flex",
                  md: "none",
                },
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
