import * as React from "react";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AlertDetailButtons from "../alert-detail-buttons/alert-detail-buttons.component";
import moment from "moment";

import "./alert-detail.styles.scss";

export default function AlertDetail() {
  const alert = useSelector((state) => state.ui);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="alert-detail-container">
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
