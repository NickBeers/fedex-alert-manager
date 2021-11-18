import React from "react";
import Button from "@mui/material/Button";

import alertGenerator from "../../alert-generator/alert-generator";

const handleClick = (event) => {
  alertGenerator();
};

export default function AlertGeneratorButtons() {
  return (
    <Button variant="outlined" onClick={handleClick}>
      Generate Alert
    </Button>
  );
}
