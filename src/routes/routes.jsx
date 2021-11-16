import React from "react";
import { Routes, Route } from "react-router-dom";
// import DashboardRoute from "./dashboard-route.jsx";
import HistoryRoute from "./history-route.jsx";
import AlertPageRoute from "./alert-page-route.jsx";

const MyRoutes = () => (
  <main>
    <Routes>
      <Route path="/" element={<AlertPageRoute />} />
      <Route path="/alerts" element={<AlertPageRoute />} />
      <Route path="/history" element={<HistoryRoute />} />
    </Routes>
  </main>
);

export default MyRoutes;
