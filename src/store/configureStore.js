import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alert";
import alertsReducer from "./alerts";
import uiReducer from "./ui";

const store = configureStore({
  reducer: combineReducers({
    alert: alertReducer,
    alerts: alertsReducer,
    ui: uiReducer,
  }),
  preloadedState: localStorage["alerts2-store"]
    ? JSON.parse(localStorage["alerts2-store"])
    : {},
});

store.subscribe(() => {
  localStorage["alerts2-store"] = JSON.stringify(store.getState());
});

export default store;
