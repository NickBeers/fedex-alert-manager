import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

import store from "../../store/configureStore";
import * as alerts from "../../store/alerts.js";
import * as ui from "../../store/ui.js";

const resolveAlert = (event, alertState, alertsList) => {
  // If alertList has an alert, change the current alert display
  const currentIdx = alertState.index;
  const unresolvedAlerts = alertsList
    .filter((a) => !a.resolved)
    .filter(
      (a) =>
        a.title.toLowerCase().includes(alertState.search.toLowerCase()) ||
        a.body.toLowerCase().includes(alertState.search.toLowerCase()) ||
        new Date(a.timestamp)
          .toLocaleDateString()
          .includes(alertState.search) ||
        new Date(a.timestamp).toLocaleTimeString().includes(alertState.search)
    )
    .filter((a) =>
      alertState.filter === "all" ? a : a.alertClass === alertState.filter
    )
    .filter((a) => a.index !== currentIdx)
    .sort((a, b) => (a.critical === b.critical ? 0 : b.critical ? 1 : -1));
  const alertsLength = unresolvedAlerts.length;

  if (currentIdx < alertsLength - 1) {
    store.dispatch(
      ui.alertSelected({
        ...unresolvedAlerts[currentIdx + 1],
        index: currentIdx,
      })
    );
  } else if (currentIdx === alertsLength - 1) {
    store.dispatch(
      ui.alertSelected({
        ...unresolvedAlerts[currentIdx - 1],
        index: currentIdx - 1,
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

  // Set alert to resolved
  store.dispatch(
    alerts.alertResolved({
      id: alertState.id,
    })
  );
};

export default function AlertDetailButtons({ title }) {
  const uiState = useSelector((state) => state.ui);
  const alertsList = useSelector((state) => state.alerts);

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        sx={{ color: "gray", border: "1px solid gray" }}
      >
        Comment
      </Button>
      <Button
        variant="outlined"
        onClick={(event) => resolveAlert(event, uiState, alertsList)}
        sx={{ color: "gray", border: "1px solid gray" }}
      >
        Resolve
      </Button>
    </Stack>
  );
}
