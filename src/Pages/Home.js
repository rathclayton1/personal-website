import React from 'react';
import { makeStyles } from "@mui/styles"
import { Box, Typography, Card, Grid } from '@mui/material';
import Image from '../Images/drumswc.jpeg';

const useStyles = makeStyles((theme) => ({
    image: {
      minWidth: "21em",
      maxWidth: "45em",
      maxHeight: "45em",
      marginTop: "2em",
      marginLeft: "10%"
    }
}))


  export const Home = () => {

  const classes = useStyles();

  return (
    <Grid container direction="column" overflow="auto">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid sm item>
          <Typography variant="h2" align="center" fontFamily="Silkscreen">
            Hello!
           </Typography>
           <Typography variant="h5" fontFamily="WorkSans" align="center">
            My name is Clayton Rath. I am a native Wisconsinite with a passion for blah, blah, and blah. 
            I decided to create this full-stack website from the ground up to encapsulate those three interests (and maybe more), as well as to enhance my software development skills.
          </Typography>
          </Grid>
          <Grid sm item>
            <img src={Image} alt="me" className={classes.image}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

};

export default Home;

