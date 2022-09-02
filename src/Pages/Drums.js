import React from 'react';
import { LibraryMusic } from '@mui/icons-material';
import { Box } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    WCDrums: {
      flex: "1",
      width: "500px",
      height: "220px",
      resizeMode: "contain"
    },
    Cru22: {
      flex: "1",
      height: "auto",
      width: "auto",
      resizeMode: "contain"
    },
}))

export const Drums = () => {

    const classes = useStyles();

    return (
        <Box>
        <LibraryMusic fontSize='large'/>
      
                  
                
        </Box>
    );

};

export default Drums;