import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "ui",
  initialState: {},
  reducers: {
    alertSelected: (alert, action) => {
      alert.index = action.payload.index;
      alert.id = action.payload.id;
      alert.title = action.payload.title;
      alert.body = action.payload.body;
      alert.isCritical = action.payload.isCritical;
      alert.location = action.payload.location;
      alert.timestamp = action.payload.timestamp;
      alert.alertClass = action.payload.alertClass;
      alert.resolved = action.payload.resolved;
    },
  },
});

const reducer = slice.reducer;
export default reducer;

export const { alertSelected } = slice.actions;
