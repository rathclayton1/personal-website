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
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { PlayCircle, ArrowRight } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import DrumVid from "../Images/DrumVid.mp4";
import "../index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Basement from "../Images/basement.jpeg";
import Band from "../Images/band.jpeg";
import OH from "../Images/coolOHs.png";
import Daniel from "../Images/daniel1.jpeg";
import Lips from "../Images/lips.jpeg";
import Pilot from "../Images/pilot.png";
import Church from "../Images/church.jpeg";
import Getaway from "../Images/getaway.jpg";
import Will from "../Images/will.jpg";
import Virtual from "../Images/virtual.jpg";
import NewYear from "../Images/newyear.jpg";
import { CoolButton } from "../Pages/Home";

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
  contain: {
    height: "100%",
    width: "100%",
  },
  frame: {
    height: "auto",
    width: "100%",
  },
}));

const clientId = "38736be06832475a8510a2ae2d22816a";

const clientSecret = "bff71d764e7249aa9180d419b2a1e259";

export const Drums = () => {
  const classes = useStyles();

  const theme = useTheme();

  const [swipe, setSwipe] = useState(true);

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
        fetch("https://api.spotify.com/v1/playlists/37i9dQZF1Epuwa3ItrviqK", {
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
          .then((actualData) => setData(actualData.tracks.items))
          .catch((err) => {
            console.log(err.message);
          });
      });
  }, []);

  const songs = Array.from(data);

  const images = [
    {
      img: NewYear,
      title: "newyear",
    },
    {
      img: Daniel,
      title: "daniel",
    },
    {
      img: Band,
      title: "band",
    },
    {
      img: OH,
      title: "oh",
    },
    {
      img: Getaway,
      title: "getaway",
    },
    {
      img: Pilot,
      title: "pilot",
    },
    {
      img: Will,
      title: "will",
    },
    {
      img: Lips,
      title: "lips",
    },
    {
      img: Church,
      title: "church",
    },
    {
      img: Virtual,
      title: "virtual",
    },
    {
      img: Basement,
      title: "Basement",
    },
  ];

  document.title = "Drums";

  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  const isMD = useMediaQuery(theme.breakpoints.down("md"));

  const isLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={8}
        justifyContent="center"
        align="center"
      >
        <Grid item>
          <video autoPlay playsInLine loop muted className={classes.video}>
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
          <Grid item marginTop="20em">
            <Typography
              variant={isSM ? "h4" : "h3"}
              align="center"
              fontFamily="Silkscreen"
            >
              Recent videos
            </Typography>
          </Grid>
          <Grid
            item
            marginTop={isSM ? "1em" : "4em"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            md={7}
          >
            <Carousel
              autoPlay={swipe}
              infiniteLoop
              dynamicHeight
              stopOnHover={false}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              onClickItem={() => setSwipe(false)}
              interval={4200}
            >
              <div>
                <iframe
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  src="https://www.youtube.com/embed/sJb80P9rpto"
                  title="latestVid"
                  width="100%"
                  height={isXS ? "160px" : isSM ? "189px" : isMD ? "320px" : "428px"}
                />
              </div>
              <div>
                <iframe
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  src="https://www.youtube.com/embed/5rGrKL1ypQY"
                  title="latestVid"
                  width="100%"
                  height={isXS ? "160px" : isSM ? "189px" : isMD ? "320px" : "428px"}
                />
              </div>
              <div>
                <iframe
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  src="https://www.youtube.com/embed/IiKzRqqwB1k"
                  title="latestVid"
                  width="100%"
                  height={isXS ? "160px" : isSM ? "189px" : isMD ? "320px" : "428px"}
                />
              </div>
              
            </Carousel>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={0} justifyContent="center" align="center">
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
            <Grid item display="flex" xs={12} md={10}>
              <ImageList variant="masonry" cols={isXS ? 2 : 3} gap={12}>
                {images.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="eager"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid
              item
              xs={12}
              md={5}
              marginTop="4em"
              justifyContent={isMD ? "center" : "left"}
              align={isMD ? "center" : "left"}
            >
              <Typography variant={isSM ? "h4" : "h2"} fontFamily="Silkscreen">
                Need Drums?
              </Typography>
              <Typography
                fontFamily="workSans"
                variant={isSM ? "h6" : "h5"}
                marginTop="1.5em"
                marginLeft=".25em"
              >
                Need a groove laid down for a song? Wanna collab on a cover?
                Just craving some blast beats?
              </Typography>
              <CoolButton href="/contact" size="large" variant="contained">
                Hit me up!
                <ArrowRight />
              </CoolButton>
            </Grid>
            <Grid item xs={12} md={6} marginLeft="auto">
              <Grid
                container
                justifyContent="center"
                align="center"
                spacing={0}
                marginTop="4em"
              >
                <Grid item justifyContent="center" align="center">
                  <Typography
                    variant={isSM ? "h4" : "h2"}
                    fontFamily="Silkscreen"
                    marginBottom="0px"
                  >
                    What I'm jamming
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    elevation={8}
                    style={{
                      maxHeight: 400,
                      maxWidth: 600,
                      overflow: "auto",
                      backgroundColor: "#eff7fa",
                    }}
                  >
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant={isSM ? "h2" : "h1"} fontFamily="Silkscreen">
            Gear I use
            <br/>
            . . .
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Drums;
