import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const slice = createSlice({
  name: "alerts",
  initialState: [],
  reducers: {
    alertAdded: (alerts, action) => {
      alerts.push({
        id: v4(),
        title: action.payload.title,
        body: action.payload.body,
        critical: action.payload.critical,
        location: action.payload.location,
        timestamp: new Date().toString(),
        alertClass: action.payload.alertClass,
        resolved: false,
      });
    },
    alertDeleted: (alerts, action) => {
      const index = alerts.findIndex((a) => a.id === action.payload.id);
      if (index > -1) {
        alerts.splice(index, 1);
      }
    },
    alertResolved: (alerts, action) => {
      const index = alerts.findIndex((a) => a.id === action.payload.id);
      alerts[index].resolved = true;
    },
  },
});

const reducer = slice.reducer;
export default reducer;

export const { alertAdded, alertDeleted, alertResolved } = slice.actions;

export const getUnresolvedAlerts = (state) =>
  state.alerts.filter((alert) => !alert.resolved);
