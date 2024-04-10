// Utilities
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
import { ChangeEvent, FormEvent, useState } from "react";
import isEmail from "validator/lib/isEmail";

// data
import data from "../data/data.json";

// colors
import { colors } from "../designSystem";

// data types
type FormState = {
  email: string;
};

const Newsletter = () => {
  // theme & section text content data
  const theme = useTheme() as Theme;
  const newsletterData = data.newsletter;

  // form
  const [formData, setFormData] = useState<FormState>({
    email: "",
  });

  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(true);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    setIsEmailValid(isEmail(formData.email));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (!isEmailValid && name == "email") {
      setIsEmailValid(isEmail(value));
    }
  }

  return (
    <Container
      component="section"
      sx={{
        marginBlockStart: { xs: theme.spacing(30.5), md: theme.spacing(37.5) },
        backgroundColor: theme.palette.primary.main,
        paddingBlockStart: {
          xs: theme.spacing(15),
          md: theme.spacing(14.5),
        },
        paddingBlockEnd: {
          xs: isEmailValid ? theme.spacing(15) : theme.spacing(10),
          lg: theme.spacing(18),
        },
      }}
    >
      {/* Inner Wrapper */}
      <Box
        sx={{
          maxWidth: "442px",
          marginInline: "auto",
        }}
      >
        {/* Heading Text */}
        <Box>
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
              marginBlockStart: { xl: theme.spacing(6) },
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
          onSubmit={handleSubmit}
          //
          sx={{
            marginBlockStart: { xs: theme.spacing(8), xl: theme.spacing(9) },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "flex-start" },
            gap: {
              xs: isEmailValid ? theme.spacing(4) : theme.spacing(9),
              md: 0,
            },
            justifyContent: { md: "space-between" },
          }}
        >
          {/* Input Box */}
          <Box
            sx={{
              position: "relative",
              flex: { md: "0 0 300px" },
            }}
          >
            <Input
              fullWidth
              disableUnderline
              placeholder="Enter your email address"
              //
              sx={{
                zIndex: 801,
                //
                position: "relative",
                "& input": {
                  backgroundColor: "white",
                  backgroundImage: isEmailValid
                    ? ""
                    : "url('/assets/icons/invalid.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  paddingInline: theme.spacing(4),
                  paddingBlock: theme.spacing(2),
                  fontSize: "0.875rem",
                  lineHeight: "1.75rem",
                  borderRadius: "5px",
                  height: "28px",
                  border: isEmailValid
                    ? "2px solid transparent"
                    : `2px solid ${theme.palette.secondary.main}`,
                },

                "& input::placeholder": {
                  fontSize: "0.875rem",
                  letterSpacing: "0.015625rem",
                  lineHeight: "1.75rem",
                  color: alpha(theme.palette.darkBlue.main, 0.25),
                },
              }}
              //
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Error Feedback */}
            {!isEmailValid && (
              <Box
                sx={{
                  zIndex: 800,
                  //
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  //
                  display: "flex",
                  alignItems: "flex-end",
                  //
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.625rem !important",
                    lineHeight: "0.75rem !important",
                    fontStyle: "italic",
                    fontWeight: 500,
                    letterSpacing: "0.0156rem",
                    //
                    flex: "1",
                    //
                    paddingInline: theme.spacing(3),
                    paddingBlock: theme.spacing(1.5),
                    paddingBlockStart: "52px",
                    //
                    color: "#FFF",
                  }}
                >
                  {newsletterData.form["error-text"]}
                </Typography>
              </Box>
            )}
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            //
            variant="contained"
            color="secondary"
            //
            sx={{
              width: { xs: "100%", md: "126px" },
              fontSize: "0.875rem",
              lineHeight: "1.75rem",
              letterSpacing: "0.015625rem",
              fontWeight: 500,
              paddingBlock: theme.spacing(2),
              paddingInline: "0 !important",

              "&:hover": {
                backgroundColor: "white",
                border: `2px solid ${colors.secondary}`,

                color: colors.secondary,
              },
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
