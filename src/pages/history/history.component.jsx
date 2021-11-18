import React from "react";

import HistoricDataGrid from "../../components/historic-data-grid/historic-data-grid.component.jsx";

import "./history.styles.scss";

const History = () => (
  <div className="history">
    <HistoricDataGrid bulkActionButtons={false} />
  </div>
);

// Use a Basic Filter from MaterialUI for the dashbaord list and maybe history

export default History;
