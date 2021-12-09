import React from "react";
import Box from "@mui/material/Box";

import "./alert-page.styles.scss";

import AlertList from "../../components/alert-list/alert-list.component.jsx";
import AlertDetail from "../../components/alert-detail/alert-detail.component.jsx";
import AlertDetailBlank from "../../components/alert-detail-blank/alert-detail-blank.component.jsx";
import AlertListFilterButtons from "../../components/alert-list-filter-buttons/alert-list-filter-buttons.component";
import SearchInput from "../../components/search-input/search-input.component";
import UndoButton from "../../components/undo-button/undo-button.component";
import { useSelector } from "react-redux";

import useWindowDimensions from "../../hooks/get-window-dimentions.jsx";

export default function AlertPage() {
  const uiState = useSelector((state) => state.ui);
  const { height, width } = useWindowDimensions();
  console.log(width);
  return (
    <Box className="alert-page">
      {width < 961 ? (
        uiState.index === -1 ? (
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
        ) : (
          <Box className="alert-page-detail">
            {uiState.index === -1 ? <AlertDetailBlank /> : <AlertDetail />}
          </Box>
        )
      ) : (
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
      )}
      {width < 961 ? (
        uiState.index !== -1 ? null : (
          <Box className="undo-button">
            <UndoButton />
          </Box>
        )
      ) : (
        <Box className="undo-button">
          <UndoButton />
        </Box>
      )}
    </Box>
  );
}
