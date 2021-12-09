// imports
import React from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

import store from "../../store/configureStore";
import * as ui from "../../store/ui.js";

import "./search-input.styles.scss";

// render
const SearchInput = function () {
  const uiState = useSelector((state) => state.ui);
  const alertsList = useSelector((state) => state.alerts);

  const handleChange = (event) => {
    store.dispatch(
      ui.alertSearch({
        search: event.target.value,
      })
    );

    // Change the index of selected alert if in filter
    const unresolvedAlerts = alertsList
      .filter((a) => !a.resolved)
      .filter(
        (a) =>
          a.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
          a.body.toLowerCase().includes(event.target.value.toLowerCase()) ||
          new Date(a.timestamp)
            .toLocaleDateString()
            .includes(event.target.value) ||
          new Date(a.timestamp)
            .toLocaleTimeString()
            .includes(event.target.value)
      )
      .filter((a) =>
        uiState.filter === "all" ? a : a.alertClass === uiState.filter
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
    <input
      className="search-input"
      type="search"
      onChange={debounce(handleChange, 250)}
      placeholder="Search Alerts"
    />
  );
};

export default SearchInput;
