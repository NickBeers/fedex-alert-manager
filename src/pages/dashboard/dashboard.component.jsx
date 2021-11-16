import React from "react";
import Box from "@mui/material/Box";

import "./dashboard.styles.scss";

import AlertList from "../../components/alert-list/alert-list.component.jsx";
import AlertDetail from "../../components/alert-detail/alert-detail.component.jsx";

const Dashboard = () => (
  <Box className="dashboard">
    <AlertList />
    <AlertDetail />
  </Box>
);

export default Dashboard;
