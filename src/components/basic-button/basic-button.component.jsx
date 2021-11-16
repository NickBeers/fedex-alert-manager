import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButton(props) {
  return <Button variant="outlined">{props.title}</Button>;
}
