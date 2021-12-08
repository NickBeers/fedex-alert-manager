// imports
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

import store from "../../store/configureStore";
import * as ui from "../../store/ui.js";

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

  const clearButton = (event) => {
    console.log(event);
    store.dispatch(
      ui.alertSearch({
        search: "",
      })
    );
  };

  const clearSearch = (event) => {
    store.dispatch(
      ui.alertSearch({
        search: "",
      })
    );
  };

  return (
    <TextField
      onChange={clearButton}
      onChange={debounce(handleChange, 250)}
      sx={{ width: "100%", marginBottom: "3%" }}
      label="Search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              {uiState.search === "" ? <SearchIcon /> : <ClearIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
