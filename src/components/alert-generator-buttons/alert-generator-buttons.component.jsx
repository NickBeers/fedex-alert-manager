import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import fedex from "../../assets/FedExPurpleOrange.png";

import alertGenerator from "../../alert-generator/alert-generator";
import "./alert-generator-buttons.styles.scss";

const handleClick = (event) => {
  alertGenerator();
};

export default function AlertGeneratorButtons() {
  return (
    <Avatar
      alt="Fedex"
      src={fedex}
      variant="square"
      sx={{
        height: 45,
        width: 100,
      }}
      onClick={handleClick}
    />
    // <Button
    //   // className="alert-generator-button"
    //   sx={{ color: "gray", border: "1px solid gray" }}
    //   variant="outlined"
    //   onClick={handleClick}
    // >
    //   Generate Alert
    // </Button>
  );
}
