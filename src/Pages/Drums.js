import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import DrumVid from "../Images/DrumVid.mp4";
import "../index.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "50%",
    top: "50%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    filter: "brightness(70%)",
  },
}));

export const Drums = () => {
  const classes = useStyles();

  const theme = useTheme();

  document.title = "Drums";

  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  const isMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container direction="column" overflow="hidden" overflowY="hidden" overflowX="hidden">
        <Grid item>
          <video autoPlay playsinline loop muted className={classes.video}>
            <source src={DrumVid} type="video/mp4" />
          </video>
          <Box display="flex" justifyContent="center">
            <Typography
              align="center"
              variant="h1"
              fontSize={isSM ? "6em" : "10em"}
              fontFamily="Silkscreen"
              marginTop={isSM ? "3em" : "1.5em"}
              className="text"
            >
              DRUMS
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            marginTop="24em"
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={isSM ? 5 : 0}
          >
            <Grid item md={6} justifyContent="center">
              <Typography
                variant={isSM ? "h4" : "h3"}
                align="center"
                fontFamily="Silkscreen"
              >
                Latest YouTube video
              </Typography>
            </Grid>
            <Grid item md={6}>
              <iframe
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUw1cE68NdT3nT1f815aqWUg"
                title="latestVid"
                width={isSM ? "390px" : "700px"}
                height={isSM ? "220px" : "394px"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Drums;
