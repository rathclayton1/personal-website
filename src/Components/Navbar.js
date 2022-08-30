import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    Link,
  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DrawerComponent from './Drawer';
  
  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));

 export const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Clayton Rath
          </Typography>
          {isMobile ? (
          <DrawerComponent />
        ) : (
            <div className={classes.navlinks}>
              <Link to="/devportfolio" className={classes.link}>
                Development Portfolio
              </Link>
              <Link to="/drums" className={classes.link}>
                Drums
              </Link>
              <Link to="/blog" className={classes.link}>
                Blog
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </div>
        )}
        </Toolbar>
      </AppBar>      
    );
  };

  export default Navbar;