import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import alertGenerator from "../../alert-generator/alert-generator";
import { EventAvailableRounded } from "@material-ui/icons";

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
