import ListViewTable from "./ListViewTable";
import TablePagination from "@mui/material/TablePagination";
import InvoiceReportsJson from "../../utility/invoiceReports.json";
import { useContext, useState } from "react";
import ListViewHeader from "./ListViewHeader";
import AppContext from "../../AppContext";
import { recordsOnOnePage } from "../../utility/constants";
import "./InvoiceReports.css";
const InvoiceReports = () => {
  const totalRecords = InvoiceReportsJson.data.length;
  const appContext = useContext(AppContext);
  const listPage = appContext.pageno;
  const handlePageChange = (oEvent, newPage) => {
    appContext.setpageno(newPage);
  };
  const [aDataList, setaDataList] = useState(InvoiceReportsJson.data);
  debugger;
  return (
    <>
      <ListViewHeader aDataList={aDataList} setaDataList={setaDataList} />

      <ListViewTable aDataList={aDataList} setaDataList={setaDataList} />
      <TablePagination
        className="sticky-pagination"
        rowsPerPageOptions={[]}
        component="div"
        count={totalRecords}
        rowsPerPage={recordsOnOnePage}
        page={listPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default InvoiceReports;
