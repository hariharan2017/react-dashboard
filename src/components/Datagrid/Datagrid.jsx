import "./Datagrid.scss";
import { useState } from "react";
import { columns, userData } from "./config";
import { DataGrid } from '@mui/x-data-grid';

const Datagrid = () => {
  const [tableData, setTableData] = useState(userData);
  const [pageSize, setPageSize] = useState(5);

  

  return (
    <div className="data-grid-container">
      <div className="data-grid-title">Users</div>
      <DataGrid 
        rows={tableData}
        columns={columns}
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
