import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import staff from "../../assets/StaffIcon.png";
import timing from "../../assets/TimeIcon.png";
import volume from "../../assets/VolumeIcon.png";
import weather from "../../assets/WeatherIcon.png";
import listul from "../../assets/listul.png";

export default function AlertListFilterButtons() {
  return (
    <Stack
      spacing={4}
      direction="row"
      sx={{ backgroundColor: "#8429F8", marginBottom: "3%", width: "100%" }}
    >
      <IconButton>
        <Avatar
          alt="All Alert"
          src={listul}
          sx={{ width: 25, height: 25, color: "white" }}
          variant="round"
        />
      </IconButton>
      <IconButton>
        <Avatar
          alt="Volume Alert"
          src={volume}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
      <IconButton>
        <Avatar
          alt="Staff Alert"
          src={staff}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
      <IconButton>
        <Avatar
          alt="Timing Alert"
          src={timing}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
      <IconButton>
        <Avatar
          alt="Weather Alert"
          src={weather}
          sx={{ width: 25, height: 25 }}
          variant="round"
        />
      </IconButton>
    </Stack>
  );
}
