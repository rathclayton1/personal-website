import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Toolbar, Button, useMediaQuery } from "@mui/material";
import {
  Facebook,
  YouTube,
  GitHub,
  LinkedIn,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    fontFamily: ["Silkscreen"].join(","),
    fontSize: "large",
    width: "100%",
    height: "4em",
    position: "relative",
  },
  socials: {
    display: "flex",
    flexGrow: "1",
  },
  copyright: {
    flexGrow: "1",
  },
  app: {
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));

  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <footer className={classes.footer}>
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
          fontFamily="Silkscreen"
          color="secondary"
          variant="h6"
          className={classes.copyright}
        >
            <small>
            &copy; Copyright 2022, Clayton Rath. All rights reserved
            </small>
        </Typography>
        <Box
          justifyContent={isMD ? "center" : "flex-end"}
          className={classes.socials}
        >
          <Button
            disableRipple
            size="large"
            color="secondary"
            target="_blank"
            href="https://www.youtube.com/channel/UCw1cE68NdT3nT1f815aqWUg"
          >
            <YouTube fontSize="large" />
          </Button>
          <Button
            size="large"
            color="secondary"
            target="_blank"
            href="https://www.linkedin.com/in/clayton-rath"
          >
            <LinkedIn fontSize="large" />
          </Button>
          <Button
            size="large"
            color="secondary"
            target="_blank"
            href="https://github.com/rathclayton1"
          >
            <GitHub fontSize="large" />
          </Button>
          <Button
            size="large"
            color="secondary"
            target="_blank"
            href="https://www.instagram.com/feel_myrath/"
          >
            <Instagram fontSize="large" />
          </Button>
          <Button
            size="large"
            color="secondary"
            target="_blank"
            href="https://mobile.twitter.com/manoink10123"
          >
            <Twitter fontSize="large" />
          </Button>
          <Button
            size="large"
            color="secondary"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100010101031341"
          >
            <Facebook fontSize="large" />
          </Button>
        </Box>
    </footer>
  );
}
