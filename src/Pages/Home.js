import React from 'react';
import { makeStyles } from "@mui/styles"
import { Box, Typography, Container } from '@mui/material';
import Image from '../Images/HomeDrums.jpeg'

const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `url(${Image})`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
      },
}))

export const Home = () => {

    const classes = useStyles();

    return (
        <Box className={classes.hero}>
        <Box>Welcome!</Box>
      </Box>
    );

};

export default Home;

