import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "ui",
  initialState: {
    index: -1,
    filter: "all",
    search: "",
    alertStack: [],
  },
  reducers: {
    alertSelected: (alert, action) => {
      alert.index = action.payload.index;
      alert.id = action.payload.id;
      alert.title = action.payload.title;
      alert.body = action.payload.body;
      alert.critical = action.payload.critical;
      alert.location = action.payload.location;
      alert.timestamp = action.payload.timestamp;
      alert.alertClass = action.payload.alertClass;
      alert.resolved = action.payload.resolved;
    },
    alertFilter: (ui, action) => {
      ui.filter = action.payload.filter;
    },
    alertSearch: (ui, action) => {
      ui.search = action.payload.search;
    },
    alertPush: (ui, action) => {
      ui.alertStack = [...ui.alertStack, action.payload];
    },
    alertPop: (ui, action) => {
      ui.alertStack.pop();
    },
  },
});

const reducer = slice.reducer;
export default reducer;

export const { alertSelected, alertFilter, alertSearch, alertPush, alertPop } =
  slice.actions;
