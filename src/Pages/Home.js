import React from 'react';
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles"
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpaperaccess.com/cool-nature')`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
    }
}))

export const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Box className={classes.hero}>
                <Box>Hello</Box>
            </Box>
        </>
    );

};

export default Home;

