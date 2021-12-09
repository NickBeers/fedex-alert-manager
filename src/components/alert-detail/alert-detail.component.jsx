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
        <Box className="alert-detail-body">
          <Box className="title-and-icon">
            {/* <h1 className="alert-title">{alert.title}</h1> */}
            {alert.critical ? (
              <h1 className="alert-title-red">{alert.title}</h1>
            ) : (
              <h1 className="alert-title">{alert.title}</h1>
            )}
            {/* {alert.critical ? (
              <Icon
                className="alert-icon"
                icon={alertCircle}
                color="red"
                width="64"
                height="64"
              />
            ) : null} */}
          </Box>
          <h2 className="alert-location">{alert.location}</h2>

          <Stack spacing={3} direction="row">
            <span className="alert-date">
              {new Date(alert.timestamp).toLocaleDateString()}
            </span>
            <span className="alert-time">
              {new Date(alert.timestamp).toLocaleTimeString()}
            </span>
            <span className="alert-time">
              {moment(alert.timestamp).fromNow()}
            </span>
          </Stack>

          <p className="alert-body">{alert.body}</p>
        </Box>
        <Box className="alert-detail-buttons">
          <AlertDetailButtons />
        </Box>
      </Box>
    </React.Fragment>
  );
}
