import React from 'react';
import { makeStyles } from "@mui/styles"
import { Box, Typography, Container, Card, Unstable_Grid2 as Grid} from '@mui/material';
import WCDrums from '../Images/WCD.png';
import Cru22 from '../Images/Cru22M.png';

const useStyles = makeStyles((theme) => ({
    WCDrums: {
      maxWidth: "23em",
      maxHeight: "23em",
    },
    Cru22: {
      maxWidth: "23em",
      maxHeight: "23em",
    },
    contain: {
      padding: theme.spacing(0, 1)
    },
    heroImage: {
      height: "100%",
    width: "100%",
    zIndex: 1,
    }
}))


  export const Home = () => {

  const classes = useStyles();

  return (
    <div style={{overflowX: "hidden", backgroundImage: "../Images/green.webp"}}>
    <Grid container className={classes.contain} spacing={2} direction="column" overflow="auto">
      <Grid item>
        <Grid container spacing={3} justify="flex-end" alignItems="center" direction="row">
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
              <Grid item>
                <img src={WCDrums} alt="me" className={classes.WCDrums}/>
              </Grid>
              <Grid xsOffset="auto" item>
                <img src={Cru22} alt="Cru" className={classes.Cru22}/>
              </Grid>
              <Grid item marginLeft="0">
                <img src={WCDrums} alt="me" className={classes.WCDrums}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  )

};

export default Home;

