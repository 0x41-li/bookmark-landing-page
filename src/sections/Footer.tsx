import { Box, Link, List, ListItem, Stack, Theme } from "@mui/material";
import LogoSVG from "../components/LogoSVG";
import { useTheme } from "@emotion/react";

// Icons
import SocialMediaIcon from "../components/SocialMediaIcon";

// data
import data from "../data/data.json";

const Footer = () => {
  const theme = useTheme() as Theme;
  const footer = data.footer;
  const menu = footer.menu;
  const socialMediaIcons = footer["social-media"];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.darkBlue.main,
        paddingBlock: theme.spacing(10),
      }}
    >
      <Stack justifyContent="center" alignItems="center" sx={{}}>
        {/* Logo */}
        <Link
          href="/"
          aria-label="Logo of the website"
          sx={{
            display: "flex",
          }}
        >
          <LogoSVG
            sx={{
              width: "148px",
              height: "25px",
            }}
          />
        </Link>

        {/* Menu */}
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(4),
            marginBlockStart: theme.spacing(7.75),
          }}
        >
          {menu.map((link) => {
            return (
              <ListItem sx={{ justifyContent: "center" }} key={link.text}>
                <Link
                  href={link.href}
                  sx={{
                    paddingBlock: theme.spacing(2),
                    color: "#FFF",
                    textDecoration: "unset",
                    lineHeight: "1.0625rem",
                    letterSpacing: "0.108125rem",
                    textTransform: "uppercase",
                  }}
                >
                  {link.text}
                </Link>
              </ListItem>
            );
          })}
        </List>

        {/* Social Media Icon */}
        <List
          sx={{
            display: "flex",
            gap: theme.spacing(6),
            marginBlockStart: theme.spacing(8),
          }}
        >
          {socialMediaIcons.map((item) => {
            return (
              <ListItem key={item.name}>
                <Link href={item.href} sx={{ padding: theme.spacing(2) }}>
                  <SocialMediaIcon
                    name={item.name}
                    sx={{ display: "block", color: "#FFF", fontSize: 24 }}
                  />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Box>
  );
};

export default Footer;
