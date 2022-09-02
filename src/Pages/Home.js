import React from 'react';
import { makeStyles } from "@mui/styles"
import { Box, Typography, Button, ImageList, ImageListItem, Unstable_Grid2 as Grid} from '@mui/material';
import WCDrums from '../Images/WCD.png';
import Audrie from '../Images/AudrieM.png'
import Cru22 from '../Images/Cru22M.png';
import { ArrowDropDown } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    contain: { 
      padding: theme.spacing(0, 1)
    },
    bimg: {
      height: "100%",
    width: "100%",
    zIndex: 1,
    
    }
}))


  export const Home = () => {

  const classes = useStyles();

  const itemData = [
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/WCD.png?raw=true',
      title: 'Breakfast',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/SM.png?raw=true',
      title: 'Burger',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/AudrieM.png?raw=true',
      title: 'Camera',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/Cru22M.png?raw=true',
      title: 'Coffee',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/Tristan.png?raw=true',
      title: 'Hats',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/vacuum.png?raw=true',
      title: 'Honey',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/dad.png?raw=true',
      title: 'Basketball',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/STNW_.png?raw=true',
      title: 'Fern',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/HomeDrums.png?raw=true',
      title: 'Mushrooms',
    },
  ];

  return (
    <div className={classes.bimg} style={{overflowX: "hidden", backgroundImage: "../Images/green.webp"}}>
    <Grid container className={classes.contain} spacing={1} direction="column" overflow="auto">
      <Grid item>
        <Grid container spacing={3} justify="flex-end" alignItems="normal" direction="row">
          <Grid item marginTop="7em" xs={8} sm={6}>
            <Typography variant="h1" align="left" fontFamily="Silkscreen">
              Hello!
            </Typography>
            <Typography variant="h5" marginLeft="0.4em" marginTop="3em" fontFamily="WorkSans" align="left">
              My name is Clayton Rath. I am a native Wisconsinite with a passion for blah, blah, and blah. 
              I decided to create this full-stack website from the ground up to encapsulate those three interests (and maybe more), as well as to enhance my software development skills.
            </Typography>
            <Button size="large" style={{fontFamily: "Silkscreen", fontSize: "1.2em", color: "black", marginLeft: "0.4em", marginTop: "1.5em"}} variant="contained">
              Check it out!
              <ArrowDropDown/>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction="row" spacing={0} xs={12} overflow="auto" disableEqualOverflow>
              <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  )

};

export default Home;

