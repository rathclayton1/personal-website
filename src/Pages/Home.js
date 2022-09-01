import React from 'react';
import { makeStyles } from "@mui/styles"
import { Box, Typography, Card, Unstable_Grid2 as Grid} from '@mui/material';
import WCDrums from '../Images/WCD.png';
import Cru22 from '../Images/Cru22M.png';
import ImageShadow from 'react-image-shadow';

const useStyles = makeStyles((theme) => ({
    WCDrums: {
      maxWidth: "30em",
      maxHeight: "30em",
    },
    Cru22: {
      maxWidth: "30em",
      maxHeight: "30em",
    },
}))


  export const Home = () => {

  const classes = useStyles();

  return (
    <Grid container direction="column" overflow="auto">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item xs={8} sm={6}>
            <Typography paddingTop="0.5em" variant="h1" align="left" fontFamily="Silkscreen">
              Hello!
            </Typography>
            <Typography marginTop="8em" marginRight="0" variant="h5" marginLeft="0.4em" fontFamily="WorkSans" align="left">
              My name is Clayton Rath. I am a native Wisconsinite with a passion for blah, blah, and blah. 
              I decided to create this full-stack website from the ground up to encapsulate those three interests (and maybe more), as well as to enhance my software development skills.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column" xs={12} overflow="auto" disableEqualOverflow>
              <Grid item marginLeft="0">
                <img src={WCDrums} alt="me" className={classes.WCDrums}/>
              </Grid>
              <Grid mdOffset="auto" item>
                <img src={Cru22} className={classes.Cru22}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

};

export default Home;

