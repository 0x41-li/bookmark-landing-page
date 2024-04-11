import {
  Box,
  Button,
  Container,
  Divider,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React, { Fragment, useState } from "react";

// QA
import QA from "../components/QA";

// data
import data from "../data/data.json";

const FAQ: React.FC = () => {
  const theme = useTheme() as Theme;
  const [openQAIndex, setOpenQAIndex] = useState<number | null>(null);

  return (
    <Container
      component="section"
      sx={{
        marginBlockStart: { xs: theme.spacing(35), md: theme.spacing(37) },
        maxWidth: "1104px",
      }}
    >
      {/* Section head */}
      <Box sx={{ maxWidth: "540px", marginInline: "auto" }}>
        <Typography
          textAlign="center"
          variant="h2"
          sx={{ lineHeight: "1.875rem" }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          textAlign="center"
          variant="body1"
          sx={{
            marginBlockStart: { xs: theme.spacing(4), xl: theme.spacing(4) },
          }}
        >
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Typography>
      </Box>

      {/* FAQs */}
      <Box
        sx={{
          marginBlockStart: { xs: theme.spacing(16), lg: theme.spacing(14) },
          maxWidth: "540px",
          marginInline: "auto",
        }}
      >
        {/* Top divider */}
        <Divider
          sx={{
            display: { xs: "none", lg: "block" },
            marginBlockEnd: { xs: theme.spacing(5) },
          }}
        />

        {/* Qs and Anwsers */}
        {data.FAQs["questions-and-answers"].map(({ q, a }, i) => (
          <Fragment key={i}>
            <QA
              q={q}
              a={a}
              index={i}
              isOpen={i == openQAIndex}
              setOpenQAIndex={setOpenQAIndex}
            />

            {/* divider */}
            <Divider
              sx={{
                marginBlockStart: theme.spacing(3),
                marginBlockEnd: theme.spacing(5),
              }}
            />
          </Fragment>
        ))}
      </Box>

      {/* More Info */}
      <Button
        variant="contained"
        sx={{
          display: "block",
          marginInline: "auto",
          marginBlockStart: { xs: theme.spacing(12), lg: theme.spacing(14) },
          paddingInline: theme.spacing(6),
        }}
      >
        More Info
      </Button>
    </Container>
  );
};

export default FAQ;
