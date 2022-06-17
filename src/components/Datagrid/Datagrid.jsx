import "./Datagrid.scss";
import { useState } from "react";
import { columns, userData } from "./config";
import { DataGrid } from '@mui/x-data-grid';

const Datagrid = () => {
  const [tableData, setTableData] = useState(userData);
  const [pageSize, setPageSize] = useState(5);

  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  const actionColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="action-cell">
              <div className="action-button-view">View</div>
              <div
                className="action-button-delete" 
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
            </div>
          </>
        )
      }
    }
  ]

  return (
    <div className="data-grid-container">
      <div className="data-grid-title">Users</div>
      <DataGrid 
        className="datagrid"
        rows={tableData}
        columns={columns.concat(actionColumns)}
        pageSize={pageSize}
        rowsPerPageOptions={[1, 5, 10, 25]}
        onPageSizeChange={(event) => {setPageSize(event)}}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Datagrid;
