import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Paper } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import store from "../../store/configureStore";
import * as ui from "../../store/ui.js";

import weather from "../../assets/weatherGrey.png";
import volume from "../../assets/volumeGrey.png";
import timing from "../../assets/timingGrey.png";
import staff from "../../assets/staffGrey.png";

import weatherCritical from "../../assets/weatherRed.png";
import volumeCritical from "../../assets/volumeRed.png";
import timingCritical from "../../assets/timingRed.png";
import staffCritical from "../../assets/staffRed.png";

const avatarImage = (alertClass, critical) => {
  switch (alertClass) {
    case "weather":
      if (critical) return weatherCritical;
      return weather;
    case "timing":
      if (critical) return timingCritical;
      return timing;
    case "volume":
      if (critical) return volumeCritical;
      return volume;
    case "staff":
      if (critical) return staffCritical;
      return staff;
    default:
      break;
  }
};

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
        {alerts
          .filter((a) => !a.resolved)
          .filter(
            (a) =>
              a.title.toLowerCase().includes(uiState.search.toLowerCase()) ||
              a.body.toLowerCase().includes(uiState.search.toLowerCase()) ||
              new Date(a.timestamp)
                .toLocaleDateString()
                .includes(uiState.search) ||
              new Date(a.timestamp)
                .toLocaleTimeString()
                .includes(uiState.search)
          )
          .filter((a) =>
            uiState.filter === "all" ? a : a.alertClass === uiState.filter
          )
          .sort((a, b) => (a.critical === b.critical ? 0 : b.critical ? 1 : -1))
          .map((alert, index) => {
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
                  height: "55px",
                  width: "360px",
                }}
              >
                <ListItemIcon>
                  <Avatar
                    alt={alert.alertClass}
                    src={avatarImage(alert.alertClass, alert.critical)}
                    sx={{ width: 25, height: 25 }}
                    variant="round"
                  />
                </ListItemIcon>
                <ListItemText primary={alert.title} />
              </ListItemButton>,
            ];
          })}
        <ListItemButton
          sx={{
            height: "55px",
            width: "360px",
          }}
        >
          {" "}
        </ListItemButton>
      </List>
    </Paper>
  );
};

export default AlertList;
