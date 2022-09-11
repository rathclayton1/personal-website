import { React, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  styled,
  useMediaQuery,
  Typography,
  Button,
  ImageList,
  ImageListItem,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import { useSpring, animated } from "react-spring";
import { useTheme } from "@emotion/react";
import gif from "../Images/claytonWebsite.gif";
import { Scrollchor } from "react-scrollchor";
import Drums from "../Images/WCD.webp";
import SM from "../Images/SM.webp";
import Tristan from "../Images/Tristan.webp";
import Cru from "../Images/Cru22M.webp";
import Audrie from "../Images/AudrieM.webp";
import Vacuum from "../Images/vacuum.webp";
import Dad from "../Images/dad.webp";
import Stnw from "../Images/STNW_.webp";
import Backpack from "../Images/backpack.webp";
import Drums2 from "../Images/HomeDrums.webp";



const useStyles = makeStyles((theme) => ({
  contain: {
    padding: theme.spacing(0, 1),
    overflowY: "hidden",
    overflowX: "hidden",
    maxWidth: "2000px"
  },
  container: {
    overflow: "hidden", 
    display: "flex",
    justifyContent: "center",
  },
}));

  export const Home = () => {
  
  const classes = useStyles();

  const theme = useTheme();

  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  const isMD = useMediaQuery(theme.breakpoints.down("md"));

  const isXL = useMediaQuery(theme.breakpoints.down("xl"));


  const CoolButton = styled(Button)(() => ({
    fontFamily: ["Silkscreen"].join(","),
    fontSize: "large",
    color: "black",
    marginLeft: "0.4em",
    marginTop: "2em",
    alignItems: "center",
    justifyContent: "center",
  }));

  const animate1 = useSpring({
    from: { y: -500 },
    to: { y: 0 },
    config: { duration: "700" },
  });

  const animate2 = useSpring({
    from: { y: 1000 },
    to: { y: 15 },
    config: { duration: "1200" },
  });

  const animate3 = useSpring({
    from: { opacity: "0", color: "#65946a", y: 1000 },
    to: { opacity: "1", color: "black", y: 20 },
    config: { duration: "2800" },
  });

  const AnimatedText = animated(Typography);
  const AnimatedButton = animated(CoolButton);

  document.title = "Home";

  const itemData = [
    {
      img: Drums,
      title: "drums",
    },
    {
      img: SM,
      title: "sm",
    },
    {
      img: Tristan,
      title: "tristan",
    },
    {
      img: Cru,
      title: "cru22",
    },
    {
      img: Audrie,
      title: "audrie",
    },
    {
      img: Vacuum,
      title: "vacuum",
    },
    {
      img: Dad,
      title: "dad",
    },
    {
      img: Stnw,
      title: "stnw",
    },
    {
      img: Drums2,
      title: "drums2",
    },
    {
      img: Backpack,
      title: "backpack",
    },
  ];


  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.contain}
        spacing={isSM ? 0 : 8}
        direction="column"
        overflow="hidden"
      >
        <Grid item>
          <Grid container spacing={3} direction="row">
            <Grid item marginTop="7em" xs={12} md={6}>
              <AnimatedText
                variant="h1"
                align={isMD ? "center" : "left"}
                fontFamily="Silkscreen"
                style={animate1}
              >
                Hello!
              </AnimatedText>
              <AnimatedText
                variant={isSM ? "h6" : "h5"}
                marginLeft="0.4em"
                marginTop="2em"
                fontFamily="WorkSans"
                align={isMD ? "center" : "left"}
                style={animate2}
              >
                My name is Clayton Rath. I am a native Wisconsinite with a
                passion for blah, blah, and blah. I decided to create this
                full-stack website from the ground up to encapsulate those three
                interests (and maybe more), as well as to enhance my software
                development skills.
              </AnimatedText>
              <Box textAlign={isMD ? "center" : undefined}>
                <Scrollchor to="#software" style={{ textDecoration: "none" }}>
                  <AnimatedButton
                    size="large"
                    style={animate3}
                    variant="contained"
                  >
                    Check it out!
                    <ArrowDropDown />
                  </AnimatedButton>
                </Scrollchor>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <ImageList variant="masonry" cols={3} gap={12}>
                  {itemData.map((item) => (
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
          <Grid
            id="software"
            container
            direction="row"
            spacing={0}
            justifyContent={isMD ? "center" : "undefined"}
            alignItems={isMD ? "center" : "undefined"}
            marginTop="8rem"
          >
            <Grid item md={7} justify={isSM ? "center" : "undefined"}>
              <Typography
                fontWeight="bold"
                variant={isSM ? "h5" : "h3"}
                align={isMD ? "center" : "left"}
                marginLeft={isSM ? "0.2em" : undefined}
                fontFamily="Silkscreen"
              >
                Software Development
              </Typography>
              <Typography
                align={isMD ? "center" : "left"}
                marginLeft="0.4rem"
                marginTop="1em"
                fontFamily="WorkSans"
              >
                Something cool about software development here. Something about
                how I have a Bachelor's of Science in Computer Science from
                UW-Oshkosh. Check out some of my work!
              </Typography>
              <Box textAlign={isMD ? "center" : undefined}>
                <CoolButton href="/portfolio" size="large" variant="contained">
                  Portfolio
                  <ArrowRight />
                </CoolButton>
              </Box>
            </Grid>
            <Grid item md={5} display="flex" justifyContent="center" marginTop={isMD ? "2em" : undefined} >
              <img
                src={gif}
                width={isSM ? "355px" : "510px"}
                height={isSM ? "230px" : "340px"}
                alt="gif"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {isMD ? (
            <Grid
              id="drums"
              container
              direction="row"
              spacing={0}
              justifyContent="center"
              alignItems="center"
              marginTop={isSM ? "6em" : undefined}
            >
              <Grid item md={12} justify="center">
                <Typography
                  fontWeight="bold"
                  variant={isSM ? "h5" : "h3"}
                  align="center"
                  marginLeft="0.2em"
                  fontFamily="Silkscreen"
                >
                  Drums
                </Typography>
                <Typography
                  align="center"
                  marginLeft="0.4rem"
                  marginTop="1em"
                  fontFamily="WorkSans"
                >
                  Something neat about drums here. I bang things with sticks and
                  it makes some noise.
                </Typography>
                <Box textAlign="center" marginBottom="2em">
                  <CoolButton href="/drums" size="large" variant="contained">
                    Drums
                    <ArrowRight />
                  </CoolButton>
                </Box>
              </Grid>
              <Grid md={12} item >
                <img
                  src={Drums2}
                  marginLeft="2em"
                  width={isSM ? "355px" : "520px"}
                  height={isSM ? "205px" : "300px"}
                  alt="gif"
                />
              </Grid>
            </Grid>
          ) : (
            <Grid
              id="drums"
              container
              direction="row"
              spacing={0}
            >
              <Grid md={6} item display="flex" justifyContent="center">
                <img
                  src={Drums2}
                  marginLeft="2em"
                  width="576px"
                  height="320px"
                  alt="drums"
                />
              </Grid>
              <Grid item md={1}/>
              <Grid item md={5}>
                <Typography
                  fontWeight="bold"
                  variant="h3"
                  fontFamily="Silkscreen"
                >
                  Drums
                </Typography>
                <Typography
                  marginLeft="0.4rem"
                  marginTop="1em"
                  fontFamily="WorkSans"
                >
                  Something neat about drums here. I bang things with sticks and
                  it makes some noise.
                </Typography>
                <Box>
                  <CoolButton href="/drums" size="large" variant="contained">
                    Drums
                    <ArrowRight />
                  </CoolButton>
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item>
          <Grid
            id="blog"
            container
            direction="row"
            spacing={0}
            justifyContent={isMD ? "center" : "undefined"}
            alignItems={isMD ? "center" : "undefined"}
            marginTop={isSM ? "6em" : undefined}
            marginBottom={isSM ? "4em" : undefined}
          >
            <Grid item md={7} justify={isSM ? "center" : "undefined"}>
              <Typography
                fontWeight="bold"
                variant={isSM ? "h5" : "h3"}
                align={isMD ? "center" : "left"}
                marginLeft={isSM ? "0.2em" : undefined}
                fontFamily="Silkscreen"
              >
                Blog
              </Typography>
              <Typography
                align={isMD ? "center" : "left"}
                marginLeft="0.4rem"
                marginTop="1em"
                fontFamily="WorkSans"
              >
                A peek into my mind. Reflections on life, faith, and whatever else I feel like talking about.
              </Typography>
              <Box textAlign={isMD ? "center" : undefined}>
                <CoolButton href="/blog" size="large" variant="contained">
                  Blog
                  <ArrowRight />
                </CoolButton>
              </Box>
            </Grid>
            <Grid item md={5} display="flex" justifyContent="center" marginTop={isMD ? "2em" : undefined} >
              <img
                src={Backpack}
                width={isSM ? "355px" : "518px"}
                height={isSM ? "260px" : "388px"}
                alt="backpack"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;