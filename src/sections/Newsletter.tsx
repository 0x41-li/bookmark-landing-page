import {
  Box,
  Button,
  Container,
  Input,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

import data from "../data/data.json";

const newsletterData = data.newsletter;

const Newsletter = () => {
  const theme = useTheme() as Theme;

  return (
    <Container
      component="section"
      sx={{
        marginBlockStart: { xs: theme.spacing(30), md: theme.spacing(50) },
        maxWidth: "1104px",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          paddingBlock: theme.spacing(15),
        }}
      >
        {/* Text */}
        <Box>
          <Typography
            component="p"
            textAlign="center"
            sx={{
              fontSize: "0.75rem",
              letterSpacing: theme.spacing(1.125),
              lineHeight: theme.spacing(10),
              color: "#FFFFFF",
            }}
          >
            {newsletterData.supheading}
          </Typography>

          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              lineHeight: "1.75rem",
              letterSpacing: "-0.08px",
              color: "#FFFFFF",
            }}
          >
            {newsletterData.heading}
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" noValidate>
          <Input
            fullWidth
            placeholder="Enter your email address"
            sx={{
              "& input": {
                marginBlockStart: theme.spacing(8),
                backgroundColor: "white",
                paddingInline: theme.spacing(5),
                paddingBlock: theme.spacing(2.5),
                fontSize: "0.875rem",
                lineHeight: "1.75rem",
                borderRadius: "5px",
                height: "28px",
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              background: "#FA5959",
              marginBlockStart: theme.spacing(4),
              width: "100%",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Newsletter;
