import React from "react";
import Box from "@mui/material/Box";

import "./alert-page.styles.scss";

import AlertList from "../../components/alert-list/alert-list.component.jsx";
import AlertDetail from "../../components/alert-detail/alert-detail.component.jsx";
import AlertGeneratorButtons from "../../components/alert-generator-buttons/alert-generator-buttons.component";
import AlertListFilterButtons from "../../components/alert-list-filter-buttons/alert-list-filter-buttons.component";
import SearchInput from "../../components/search-input/search-input.component";

const AlertPage = () => (
  <Box sx={{ display: "flex-inline" }}>
    <Box className="alertlist" sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex-inline",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <SearchInput />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <AlertListFilterButtons />
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <AlertList sx={{ dispay: "flex" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", width: "70%" }}>
        <AlertDetail />
      </Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        height: 30,
        position: "absolute",
        bottom: "2%",
        right: "2%",
      }}
    >
      <AlertGeneratorButtons />
    </Box>
  </Box>
);

export default AlertPage;
