import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function AlertDetailBlank() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            display: "flex",
            border: "1px solid lightgrey",
            height: "60%",
            marginTop: "6%",
            paddingTop: "2%",
            paddingLeft: "5%",
            paddingRight: "5%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p sx={{ display: "flex", color: "grey" }}>no alert selected</p>
        </Box>
      </Container>
    </React.Fragment>
  );
}
