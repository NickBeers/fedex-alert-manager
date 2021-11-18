import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AlertDetailButtons from "../alert-detail-buttons/alert-detail-buttons.component";
import moment from "moment";

import { useSelector } from "react-redux";

export default function AlertDetail() {
  const alert = useSelector((state) => state.ui);

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
            <h1>{alert.title}</h1>
            <h2>{alert.location}</h2>
            <h3>
              <Stack spacing={2} direction="row">
                <span>{new Date(alert.timestamp).toLocaleDateString()}</span>
                <span>{new Date(alert.timestamp).toLocaleTimeString()}</span>
                <span>{moment(alert.timestamp).fromNow()}</span>
              </Stack>
            </h3>
            <p>{alert.body}</p>
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
