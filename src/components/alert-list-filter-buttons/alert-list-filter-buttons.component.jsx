import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import staff from "../../assets/StaffIcon.png";
import timing from "../../assets/TimeIcon.png";
import volume from "../../assets/VolumeIcon.png";
import weather from "../../assets/WeatherIcon.png";
import listul from "../../assets/listul.png";
import { useSelector } from "react-redux";
import store from "../../store/configureStore";
import * as alerts from "../../store/alerts.js";
import * as ui from "../../store/ui.js";

const filterAlerts = (e, uiState, alertsList) => {
  // Set the filter value
  store.dispatch(
    ui.alertFilter({
      filter: e.target.alt,
    })
  );

  // Change the index of selected alert if in filter
  const currentIdx = uiState.index;
  // console.log(currentIdx);
  const unresolvedAlerts = alertsList
    .filter((a) => !a.resolved)
    .filter((a) =>
      uiState.filter === "all" ? a : a.alertClass === uiState.filter
    )
    .sort((a, b) => (a.critical === b.critical ? 0 : b.critical ? 1 : -1));
  const alertsLength = unresolvedAlerts.length;
  const newIdx = unresolvedAlerts.indexOf((a) => a.id === uiState.id);
  console.log(newIdx);

  console.log(alertsLength);
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

// const resolveAlert = (event, alertState, alertsList) => {
//   // If alertList has an alert, change the current alert display
//   const currentIdx = alertState.index;
//   const unresolvedAlerts = alertsList
//     .filter((a) => !a.resolved)
//     .filter((a) =>
//       alertState.filter === "all" ? a : a.alertClass === alertState.filter
//     )

//     .filter((a) => a.index != currentIdx)
//     .sort((a, b) => (a.critical === b.critical ? 0 : b.critical ? 1 : -1));
//   const alertsLength = unresolvedAlerts.length;

//   if (currentIdx < alertsLength - 1) {
//     store.dispatch(
//       ui.alertSelected({
//         ...unresolvedAlerts[currentIdx + 1],
//         index: currentIdx,
//       })
//     );
//   } else if (currentIdx == alertsLength - 1) {
//     store.dispatch(
//       ui.alertSelected({
//         ...unresolvedAlerts[currentIdx - 1],
//         index: currentIdx - 1,
//       })
//     );
//   } else {
//     // If alertList is empty, set index to -1
//     console.log(alertsLength);
//     console.log(currentIdx);
//     store.dispatch(
//       ui.alertSelected({
//         index: -1,
//       })
//     );
//   }

export default function AlertListFilterButtons() {
  const uiState = useSelector((state) => state.ui);
  const alertsList = useSelector((state) => state.alerts);
  return (
    <Stack
      // spacing={4}
      direction="row"
      sx={{
        backgroundColor: "#8429F8",
        marginBottom: "3%",
        width: "100%",
        height: 50,
      }}
    >
      <IconButton
        onClick={(event) => filterAlerts(event, uiState, alertsList)}
        sx={{ width: 25, height: 25, top: "12px", left: "5%" }}
      >
        <Avatar
          alt="all"
          src={listul}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
      <IconButton
        onClick={(event) => filterAlerts(event, uiState, alertsList)}
        sx={{ width: 25, height: 25, top: "12px", left: "18%" }}
      >
        <Avatar
          alt="volume"
          src={volume}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
      <IconButton
        onClick={(event) => filterAlerts(event, uiState, alertsList)}
        sx={{ width: 25, height: 25, top: "12px", left: "32%" }}
      >
        <Avatar
          alt="staff"
          src={staff}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
      <IconButton
        onClick={(event) => filterAlerts(event, uiState, alertsList)}
        sx={{ width: 25, height: 25, top: "12px", left: "43%" }}
      >
        <Avatar
          alt="timing"
          src={timing}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
      <IconButton
        onClick={(event) => filterAlerts(event, uiState, alertsList)}
        sx={{ width: 25, height: 25, top: "12px", left: "55%" }}
      >
        <Avatar
          alt="weather"
          src={weather}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
    </Stack>
  );
}
