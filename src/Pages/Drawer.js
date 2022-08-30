import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  styled,
  Button
} from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Menu } from "@mui/icons-material"


export const CoolButton = styled(Button)(() => ({
  fontFamily: [
    'Silkscreen',
  ].join(','),
  fontSize: 'large'
}));

export function DrawerComponent() {
 
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer 
        anchor="right"
        open={openDrawer}  
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <CoolButton size="large" color="secondary" href="/devportfolio">Portfolio</CoolButton>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <CoolButton size="large" color="secondary" href="/drums">Drums</CoolButton>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <CoolButton className="button" size="large" color="secondary"  href="/blog">Blog</CoolButton>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <CoolButton size="large" color="secondary"  href="/contact">Contact</CoolButton>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu color="secondary"/>
      </IconButton>
      </>
  );
}

export default DrawerComponent;