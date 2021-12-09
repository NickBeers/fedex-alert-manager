import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

import "./historic-data-grid.styles.scss";

const columns = [
  {
    field: "title",
    headerName: "Title",
    width: 275,
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    width: 150,
  },
  {
    field: "critical",
    headerName: "Critical",
    type: "boolean",
    width: 100,
  },
  {
    field: "body",
    headerName: "Body",
    sortable: false,
    width: 700,
  },
];

export default function HistoricDataGrid() {
  const alerts = useSelector((state) => state.alerts);
  console.log(alerts);
  return (
    <div className="history-container">
      <div className="history-title">
        <h3>Historic Alerts</h3>
      </div>
      <DataGrid
        rows={alerts.filter((a) => a.resolved)}
        columns={columns}
        pageSize={100}
        bulkActionButtons={false}
        rowsPerPageOptions={[100]}
        disableSelectionOnClick
      />
    </div>
  );
}
