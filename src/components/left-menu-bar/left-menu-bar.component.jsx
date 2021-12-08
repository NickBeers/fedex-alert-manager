import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import { Link } from "react-router-dom";

import MyRoutes from "../../routes/routes.jsx";

import avatar from "../../assets/Avatar.png";
import fedex from "../../assets/FedExPurpleOrange.png";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function LeftMenuBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
      }}
    >
      <CssBaseline />
      <Stack direction="row">
        <AppBar open={open} sx={{ backgroundColor: "#8429F8" }}>
          <Toolbar>
            <Box sx={{ flex: "0 1 auto" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flex: "0 1 auto",
                marginTop: "1%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Avatar
                alt="Fedex"
                src={fedex}
                variant="square"
                sx={{
                  height: 45,
                  width: 100,
                }}
              />
            </Box>
            <Box
              direction="row"
              sx={{
                display: "flex",
                flex: "0 1 auto",
                marginLeft: "auto",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ width: "140px", marginRight: "1px", marginTop: "6%" }}
              >
                Memphis, TN
              </Typography>

              <IconButton>
                <Avatar
                  alt="Profile"
                  src={avatar}
                  variant="round"
                  sx={{
                    width: 45,
                    height: 45,
                  }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Stack>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Alerts", "History"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to={text.toLocaleLowerCase()}>{text}</Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <MyRoutes />
      </Main>
    </Box>
  );
}
