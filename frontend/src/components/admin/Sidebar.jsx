import React from "react";
import {
  Drawer,
  Stack,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
const drawerWidth = 240;
const yellowColor = "#FF990E";
const iconColor = "#764B1D";
const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1E1F22",
        },
      }}
    >
      <Stack sx={{ padding: 2, height: "100%" }}>
        <Typography variant="h6" sx={{ color: "#FF990E" }}>
          Cinema dine
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem button>
            <DashboardOutlinedIcon sx={{ color: iconColor }} />
            <ListItemText primary="Dashboard" sx={{ color: "white" }} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" sx={{ color: yellowColor }} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Services" sx={{ color: yellowColor }} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" sx={{ color: yellowColor }} />
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
