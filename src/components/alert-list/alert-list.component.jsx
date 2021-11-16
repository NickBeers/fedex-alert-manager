import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Paper } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import { useSelector } from "react-redux";
import store from "../../store/configureStore";
import * as ui from "../../store/ui.js";

const AlertList = function () {
  const alerts = useSelector((state) => state.alerts);
  const uiState = useSelector((state) => state.ui);

  const handleListItemClick = (event, index, alert) => {
    store.dispatch(
      ui.alertSelected({
        ...alert,
        index,
      })
    );
  };

  return (
    <Paper
      style={{
        maxHeight: "73vh",
        overflow: "auto",
        display: "flex",
      }}
    >
      <List
        sx={{
          flexDirection: "column",
          minHeight: "77vh",
        }}
      >
        {alerts.map((alert, index) => {
          return [
            <Divider
              key={alert.id + 1}
              sx={{
                display: "flex",
              }}
            />,
            <ListItemButton
              selected={index === uiState.index}
              onClick={(event) => handleListItemClick(event, index, alert)}
              key={alert.id}
              sx={{
                // display: "flex",
                height: "55px",
                width: "360px",
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={alert.title} />
            </ListItemButton>,
          ];
        })}
      </List>
    </Paper>
  );
};

export default AlertList;
