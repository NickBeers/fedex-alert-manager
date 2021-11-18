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
    width: 500,
  },
];

export default function HistoricDataGrid() {
  const alerts = useSelector((state) => state.alerts);
  console.log(alerts);
  return (
    <div
      style={{
        height: 400,
        width: "80%",
        marginLeft: "10%",
        marginTop: "3%",
        height: "70vh",
      }}
    >
      <DataGrid
        rows={alerts.filter((a) => a.resolved)}
        columns={columns}
        pageSize={50}
        bulkActionButtons={false}
        // rowsPerPageOptions={[100]}
        disableSelectionOnClick
      />
    </div>
  );
}
