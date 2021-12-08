import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

import { useSelector } from "react-redux";
import store from "../../store/configureStore";
import * as ui from "../../store/ui.js";

import staffSelected from "../../assets/staffWhite.png";
import timingSelected from "../../assets/timingWhite.png";
import volumeSelected from "../../assets/volumeWhite.png";
import weatherSelected from "../../assets/weatherWhite.png";
import allSelected from "../../assets/allWhite.png";

import staff from "../../assets/staffDarkGrey.png";
import timing from "../../assets/timingDarkGrey.png";
import volume from "../../assets/volumeDarkGrey.png";
import weather from "../../assets/weatherDarkGrey.png";
import all from "../../assets/allDarkGrey.png";

import "./alert-list-filter-buttons.styles.scss";

export default function AlertListFilterButtons() {
  const uiState = useSelector((state) => state.ui);
  const alertsList = useSelector((state) => state.alerts);

  const filterAlerts = (e) => {
    // Set the filter value
    store.dispatch(
      ui.alertFilter({
        filter: e.target.alt,
      })
    );

    // Change the index of selected alert if in filter
    const unresolvedAlerts = alertsList
      .filter((a) => !a.resolved)
      .filter(
        (a) =>
          a.title.toLowerCase().includes(uiState.search.toLowerCase()) ||
          a.body.toLowerCase().includes(uiState.search.toLowerCase()) ||
          new Date(a.timestamp).toLocaleDateString().includes(uiState.search) ||
          new Date(a.timestamp).toLocaleTimeString().includes(uiState.search)
      )
      .filter((a) =>
        e.target.alt === "all" ? a : a.alertClass === e.target.alt
      )
      .sort((a, b) => (a.critical === b.critical ? 0 : b.critical ? 1 : -1));
    const newIdx = unresolvedAlerts.findIndex((a) => a.id === uiState.id);
    const alertsLength = unresolvedAlerts.length;

    if (alertsLength > 0) {
      store.dispatch(
        ui.alertSelected({
          ...unresolvedAlerts[newIdx],
          index: newIdx,
        })
      );
    } else {
      // If alertList is empty, set index to -1
      store.dispatch(
        ui.alertSelected({
          index: -1,
        })
      );
    }
  };

  return (
    <Stack direction="row" className="alert-button-container">
      <Tooltip title="All Alerts">
        <Box className="alert-list-button" onClick={filterAlerts}>
          <Avatar
            alt="all"
            src={uiState.filter === "all" ? allSelected : all}
            sx={{ width: 25, height: 25 }}
            variant="square"
          />
        </Box>
      </Tooltip>
      <Tooltip title="Volume Alerts">
        <Box className="alert-list-button" onClick={filterAlerts}>
          <Avatar
            alt="volume"
            src={uiState.filter === "volume" ? volumeSelected : volume}
            sx={{ width: 25, height: 25 }}
            variant="round"
          />
        </Box>
      </Tooltip>
      <Tooltip title="Staff Alerts">
        <Box onClick={filterAlerts} className="alert-list-button">
          <Avatar
            alt="staff"
            src={uiState.filter === "staff" ? staffSelected : staff}
            sx={{ width: 25, height: 25 }}
            variant="round"
          />
        </Box>
      </Tooltip>
      <Tooltip title="Timing Alerts">
        <Box onClick={filterAlerts} className="alert-list-button">
          <Avatar
            alt="timing"
            src={uiState.filter === "timing" ? timingSelected : timing}
            sx={{ width: 25, height: 25 }}
            variant="round"
          />
        </Box>
      </Tooltip>
      <Tooltip title="Weather Alerts">
        <Box onClick={filterAlerts} className="alert-list-button">
          <Avatar
            alt="weather"
            src={uiState.filter === "weather" ? weatherSelected : weather}
            sx={{ width: 25, height: 25 }}
            variant="round"
          />
        </Box>
      </Tooltip>
    </Stack>
  );
}
