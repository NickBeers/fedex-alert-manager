import React from "react";
import Box from "@mui/material/Box";

import "./alert-page.styles.scss";

import AlertList from "../../components/alert-list/alert-list.component.jsx";
import AlertDetail from "../../components/alert-detail/alert-detail.component.jsx";
import AlertDetailBlank from "../../components/alert-detail-blank/alert-detail-blank.component.jsx";
import AlertGeneratorButtons from "../../components/alert-generator-buttons/alert-generator-buttons.component";
import AlertListFilterButtons from "../../components/alert-list-filter-buttons/alert-list-filter-buttons.component";
import SearchInput from "../../components/search-input/search-input.component";
import { useSelector } from "react-redux";

export default function AlertPage() {
  const uiState = useSelector((state) => state.ui);
  return (
    <Box className="alert-page">
      <Box className="alert-page-container">
        <Box className="alert-page-list-container">
          <Box className="alert-page-search-input">
            <SearchInput />
          </Box>
          <Box className="alert-page-filter-buttons">
            <AlertListFilterButtons />
          </Box>

          <Box className="alert-page-list">
            <AlertList />
          </Box>
        </Box>

        <Box className="alert-page-detail">
          {uiState.index === -1 ? <AlertDetailBlank /> : <AlertDetail />}
        </Box>
      </Box>
      <Box className="alertPageGeneratorButton">
        <AlertGeneratorButtons />
      </Box>
    </Box>
  );
}
