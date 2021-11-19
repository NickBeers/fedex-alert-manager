import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const slice = createSlice({
  name: "alert",
  initialState: {},
  reducers: {
    alertAdded: (alert, action) => {
      alert.id = v4();
      alert.title = action.payload.title;
      alert.body = action.payload.body;
      alert.critical = action.payload.critical;
      alert.location = action.payload.location;
      alert.timestamp = new Date().toString();
      alert.alertClass = action.payload.alertClass;
      alert.resolved = false;
    },

    alertResolved: (alert, action) => {
      alert.resolved = true;
    },
  },
});

const reducer = slice.reducer;
export default reducer;

export const { alertAdded, alertResolved } = slice.actions;
