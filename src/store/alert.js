import { createAction, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const slice = createSlice({
  name: "alert",
  initialState: {},
  reducers: {
    alertAdded: (alert, action) => {
      alert.id = v4();
      alert.title = action.payload.title;
      alert.body = action.payload.body;
      alert.isCritical = action.payload.isCritical;
      alert.location = action.payload.location;
      alert.timestamp = new Date();
      alert.alertClass = action.payload.alertClass;
      alert.resolved = false;
    },
  },
});

const reducer = slice.reducer;
export default reducer;

export const { alertAdded } = slice.actions;
