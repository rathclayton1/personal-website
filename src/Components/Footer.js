import React from 'react';
import { makeStyles }from '@mui/styles';
import { Typography, Toolbar, Link, Button } from '@mui/material';
import CoolButton from './Drawer';
import Image from '../Images/Footer.png';
import { Facebook, YouTube, GitHub, LinkedIn, Instagram, Twitter } from "@mui/icons-material"

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        fontFamily: [
            'Silkscreen',
          ].join(','),
        fontSize: 'large',
        width: "100%",
        position: "relative",
    },
    image: {
        width: "16em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "12em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "8em"
        },
    },
    socials: {
        flexGrow: "0",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto"
        },
    copyright: {
        flexGrow: "1",
    },
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Toolbar>
          <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }} fontFamily='Silkscreen' color="secondary" variant="h6" className={classes.copyright}>
          <small>&copy; Copyright 2022, Clayton Rath. All rights reserved</small>
          </Typography>
            <div className={classes.socials}>
            <Button disableRipple size="large" color="secondary" target="_blank" href="https://www.youtube.com/channel/UCw1cE68NdT3nT1f815aqWUg">
                <YouTube fontSize="large"/>
              </Button>
              <Button size="large" color="secondary" target="_blank" href="https://www.linkedin.com/in/clayton-rath">
              <LinkedIn fontSize="large"/>
              </Button>
              <Button size="large" color="secondary" target="_blank" href="https://github.com/rathclayton1">
              <GitHub fontSize="large"/>
              </Button>
              <Button size="large" color="secondary" target="_blank" href="https://www.instagram.com/feel_myrath/">
              <Instagram fontSize="large"/>
              </Button>
              <Button size="large" color="secondary" target="_blank" href="https://mobile.twitter.com/manoink10123">
              <Twitter fontSize="large"/>
              </Button>
              <Button size="large" color="secondary" target="_blank" href="https://www.facebook.com/profile.php?id=100010101031341">
              <Facebook fontSize="large"/>
              </Button>
            </div>
        </Toolbar>
        <img
            alt="footer"
            src={Image}
            className={classes.image}
            />
        </footer>
    
    )

}