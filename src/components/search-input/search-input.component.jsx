// imports
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";

import store from "../../store/configureStore";
import * as ui from "../../store/ui.js";

const handleChange = (e) => {
  console.log(e);
  store.dispatch(
    ui.alertSearch({
      search: e.target.value,
    })
  );
};

// render
const SearchInput = function () {
  return (
    <TextField
      onChange={handleChange}
      sx={{ width: "380px", marginBottom: "3%" }}
      label="Search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
