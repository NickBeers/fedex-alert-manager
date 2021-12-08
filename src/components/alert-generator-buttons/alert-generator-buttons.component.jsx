import React from "react";
import Button from "@mui/material/Button";

import alertGenerator from "../../alert-generator/alert-generator";
import "./alert-generator-buttons.styles.scss";

const handleClick = (event) => {
  alertGenerator();
};

export default function AlertGeneratorButtons() {
  return (
    <Button
      // className="alert-generator-button"
      sx={{ color: "gray", border: "1px solid gray" }}
      variant="outlined"
      onClick={handleClick}
    >
      Generate Alert
    </Button>
  );
}
