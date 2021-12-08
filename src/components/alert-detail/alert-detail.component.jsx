import * as React from "react";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AlertDetailButtons from "../alert-detail-buttons/alert-detail-buttons.component";
import IconButton from "@mui/material/IconButton";
import moment from "moment";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Icon } from "@iconify/react";
import alertCircle from "@iconify/icons-ion/alert-circle";

import useWindowDimensions from "../../hooks/get-window-dimentions.jsx";
import "./alert-detail.styles.scss";
import store from "../../store/configureStore";
import * as ui from "../../store/ui.js";

export default function AlertDetail() {
  const alert = useSelector((state) => state.ui);
  const alertsList = useSelector((state) => state.alerts);
  const { height, width } = useWindowDimensions();

  const handleClick = (event) => {
    store.dispatch(
      ui.alertSelected({
        index: -1,
      })
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {width < 961 ? (
        <Box sx={{ flex: "0 1 auto" }}>
          <IconButton
            color="inherit"
            onClick={handleClick}
            sx={{ width: "30px", height: "30px" }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>
      ) : null}
      <Box className="alert-detail-container">
        {alert.critical ? (
          <Icon
            className="alert-icon"
            icon={alertCircle}
            color="red"
            width="64"
            height="64"
          />
        ) : null}
        <Box className="alert-detail-body">
          <h1>{alert.title}</h1>
          <h2>{alert.location}</h2>
          <h3>
            <Stack spacing={3} direction="row">
              <span>{new Date(alert.timestamp).toLocaleDateString()}</span>
              <span>{new Date(alert.timestamp).toLocaleTimeString()}</span>
              <span>{moment(alert.timestamp).fromNow()}</span>
            </Stack>
          </h3>
          <p>{alert.body}</p>
        </Box>
        <Box className="alert-detail-buttons">
          <AlertDetailButtons />
        </Box>
      </Box>
    </React.Fragment>
  );
}
