import React from "react";
import Button from "@mui/material/Button";

import store from "../../store/configureStore";
import * as alerts from "../../store/alerts.js";
import * as ui from "../../store/ui.js";
import { useSelector } from "react-redux";

const undo = (event, uiState) => {
  if (uiState.alertStack.length > 0) {
    const alertId = uiState.alertStack.slice(-1)[0]["alertStack"];
    store.dispatch(ui.alertPop());

    store.dispatch(
      alerts.alertUnresolved({
        id: alertId,
      })
    );
  }
};

export default function UndoButton() {
  const uiState = useSelector((state) => state.ui);
  const alertsList = useSelector((state) => state.alerts);

  return (
    <Button
      className="undo-button"
      sx={{ color: "gray", border: "1px solid gray" }}
      variant="outlined"
      onClick={(event) => undo(event, uiState)}
    >
      Undo
    </Button>
  );
}
