import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DrawerComponent, CoolButton } from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  link: {
    flexGrow: "1",
  },
  app: {
    width: "100%",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar className={classes.app} position="static">
      <CssBaseline />
      <Toolbar className={classes.app}>
        <Typography
          className={classes.link}
          fontFamily="Silkscreen"
          color="secondary"
          variant={isSM ? "h5" : "h4"}
        >
          <Link underline="none" color="secondary" href="/">
            Clayton Rath
          </Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <CoolButton size="large" color="secondary" href="/portfolio">
              Portfolio
            </CoolButton>
            <CoolButton size="large" color="secondary" href="/drums">
              Drums
            </CoolButton>
            <CoolButton size="large" color="secondary" href="/blog">
              Blog
            </CoolButton>
            <CoolButton size="large" color="secondary" href="/contact">
              Contact
            </CoolButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
