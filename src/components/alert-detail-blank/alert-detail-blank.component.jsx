import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

// const GreyTextTypography = withStyles({
//   root: {
//     color: "grey",

//   },
// })(Typography);

export default function AlertDetailBlank() {
  const alert = useSelector((state) => state.ui);

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
