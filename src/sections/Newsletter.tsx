import {
  Box,
  Button,
  Container,
  Input,
  Theme,
  Typography,
  alpha,
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
        marginBlockStart: { xs: theme.spacing(30.5), md: theme.spacing(37.5) },
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          maxWidth: "442px",
          marginInline: "auto",
          paddingBlock: {
            xs: theme.spacing(15),
            md: `${theme.spacing(14.5)} ${theme.spacing(18.5)}`,
          },
        }}
      >
        {/* Text */}
        <Box sx={{}}>
          <Typography
            component="p"
            textAlign="center"
            sx={{
              fontSize: { xs: "0.75rem", md: "0.8125rem" },
              letterSpacing: "0.2888rem",
              lineHeight: `${theme.spacing(10)} !important`,
              color: "#FFFFFF",
              fontWeight: 500,
            }}
          >
            {newsletterData.supheading}
          </Typography>

          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              marginBlockStart: { lg: theme.spacing(7) },
              lineHeight: { xs: "1.75rem", lg: "2.5rem" },
              letterSpacing: "-0.08px",
              color: "#FFFFFF",
            }}
          >
            {newsletterData.heading}
          </Typography>
        </Box>

        {/* Form */}
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "flex-end" },
            gap: { xs: theme.spacing(4), md: 0 },
            justifyContent: { md: "space-between" },
          }}
        >
          <Input
            fullWidth
            disableUnderline
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
              "& input::placeholder": {
                fontSize: "0.875rem",
                letterSpacing: "0.015625rem",
                lineHeight: "1.75rem",
                color: alpha(theme.palette.darkBlue.main, 25),
              },

              flex: { md: "0 0 300px" },
            }}
          />

          <Button
            variant="contained"
            sx={{
              background: "#FA5959",
              width: { xs: "100%", md: "126px" },
              fontSize: "0.875rem",
              lineHeight: "1.75rem",
              letterSpacing: "0.015625rem",
              fontWeight: 500,
              paddingBlock: theme.spacing(2),
              paddingInline: "0 !important",
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
