import { Box, Container, Theme, Typography, useTheme } from "@mui/material";

const Features = () => {
  const theme = useTheme() as Theme;

  return (
    <Container sx={{ marginBlockStart: theme.spacing(36.5) }}>
      <Box>
        <Typography variant="h2" textAlign="center" letterSpacing={-0.075}>
          Features
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ marginBlockStart: theme.spacing(2) }}
        >
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Typography>
      </Box>
    </Container>
  );
};

export default Features;
