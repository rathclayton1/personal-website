import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
 
}));


export const Drums = () => {
  const classes = useStyles();

  document.title = "Drums";

  return (
    <Box display="flex" justifyContent="center">
      <Typography variant="h2" fontFamily="Silkscreen" margin="2em">
      Coming Soon!
      </Typography>
    </Box>
  );
};

export default Drums;
