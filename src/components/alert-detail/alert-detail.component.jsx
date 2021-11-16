import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AlertDetailButtons from "../alert-detail-buttons/alert-detail-buttons.component";
import { useSelector } from "react-redux";

export default function AlertDetail() {
  const ui = useSelector((state) => state.ui);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            play: "flex",
            border: "1px solid lightgrey",
            marginTop: "6%",
            paddingTop: "2%",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              minHeight: "100px",
              flexGrow: "1",
            }}
          >
            <h1>{ui.title}</h1>
            <h2>{ui.location}</h2>
            <h3>
              {new Date(ui.timestamp).toLocaleDateString()}{" "}
              {new Date(ui.timestamp).toLocaleTimeString()}
            </h3>
            <p>{ui.body}</p>
          </Box>
          <Box
            sx={{
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            <AlertDetailButtons />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
