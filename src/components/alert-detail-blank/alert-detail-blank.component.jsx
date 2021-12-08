import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import "./alert-detail-blank.styles.scss";

export default function AlertDetailBlank() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="alert-detail-blank">
        <p>no alert selected</p>
      </Box>
    </React.Fragment>
  );
}
