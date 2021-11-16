import React from "react";
import Stack from "@mui/material/Stack";
import BasicButton from "../basic-button/basic-button.component";

export default function AlertDetailButtons({ title }) {
  return (
    <Stack spacing={2} direction="row">
      <BasicButton title={"Comment"}></BasicButton>
      <BasicButton title={"Resolve"}></BasicButton>
    </Stack>
  );
}
