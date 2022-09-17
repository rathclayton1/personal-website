import { React, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  IconButton
} from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import DrumVid from "../Images/DrumVid.mp4";
import "../index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Basement from "../Images/basement.jpeg";
import HomeDrums from "../Images/HomeDrums.webp";
import Band from "../Images/band.jpeg";
import Bathroom from "../Images/br.JPG";
import OH from "../Images/coolOHs.png";
import Daniel from "../Images/daniel1.jpeg";
import Lips from "../Images/lips.jpeg";
import Pilot from "../Images/pilot.png";
import Church from "../Images/church.jpeg";
import Papa from "papaparse";

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

  vertical: {
    maxWidth: "450px",
    height: "auto",
  },
}));

const clientId = "38736be06832475a8510a2ae2d22816a";

const clientSecret = "bff71d764e7249aa9180d419b2a1e259";

export const Drums = () => {
  const classes = useStyles();

  const theme = useTheme();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body:
        "grant_type=refresh_token&refresh_token=" +
        "AQC-fd0Ej2cwcnS-NzU-4oNJHTpQ69NvdXi_wgMemXjJxIkFdz4ffZoonleNCNwLod4PeOHH3n7RQ6c0tDELyM7QQk3zH3CyInHHXeuNSfdqB74ZCIhEHczhHXGrYDz-JIQ" +
        "&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        fetch("https://api.spotify.com/v1/me/player/recently-played", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.access_token,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error: The status is ${response.status}`);
            }
            return response.json();
          })
          .then((actualData) => setData(actualData.items))
          .catch((err) => {
            console.log(err.message);
          });
      });
  }, []);

  const songs = Array.from(data);

  document.title = "Drums";

  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  const isMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        direction="column"
        overflow="hidden"
        overflowY="hidden"
        overflowX="hidden"
        spacing={8}
      >
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
            marginTop="18em"
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
          <Grid container spacing={0}>
            <Grid
              item
              display="flex"
              xs={12}
              justifyContent="center"
              align="center"
            >
              <Typography
                variant={isSM ? "h4" : "h3"}
                fontFamily="Silkscreen"
                sx={{ textDecoration: "underline" }}
              >
                Lookbook
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              xs={12}
              justifyContent="center"
              align="center"
            >
              <Carousel
                autoPlay
                infiniteLoop
                dynamicHeight
                stopOnHover={false}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                width={isSM ? "95%" : "60%"}
              >
                <div>
                  <img src={HomeDrums} alt="1" />
                </div>
                <div>
                  <img src={Lips} alt="2" className={classes.vertical} />
                </div>
                <div>
                  <img src={Church} alt="9" />
                </div>
                <div>
                  <img src={Band} alt="3" />
                </div>
                <div>
                  <img src={OH} alt="4" />
                </div>
                <div>
                  <img src={Daniel} alt="5" />
                </div>
                <div>
                  <img src={Basement} alt="6" />
                </div>
                <div>
                  <img src={Pilot} alt="7" className={classes.vertical} />
                </div>
                <div>
                  <img src={Bathroom} alt="8" />
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
        <Grid item justifyContent="center" align="center" xs={12}>
          <Typography variant={isSM ? "h3" : "h2"} fontFamily="Silkscreen">
            What I'm listening to
          </Typography>
        </Grid>
        <Grid item justifyContent="center" align="center">
          <Paper elevation={8} style={{ maxHeight: 400, maxWidth: 600, overflow: "auto", backgroundColor: "#eff7fa" }}>
            <List dense>
              {songs.map((item) => (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" href={item.track.uri}>
                      <PlayCircle fontSize="large" />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    <img
                      src={item.track.album.images[0].url}
                      alt="cover"
                      width="40px"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.track.name}
                    secondary={item.track.artists[0].name}
                    fontFamily="WorkSans"
                    variant={isSM ? "h6" : "h5"}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item justifyContent="center" align="center">
          <Typography variant={isSM ? "h2" : "h1"} fontFamily="Silkscreen">
            Gear I use
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Drums;
