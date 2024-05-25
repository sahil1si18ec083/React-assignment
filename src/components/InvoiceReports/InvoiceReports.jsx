import ListViewTable from "./ListViewTable";
import TablePagination from "@mui/material/TablePagination";
import InvoiceReportsJson from "../../utility/invoiceReports.json";
import { useContext, useState } from "react";
import ListViewHeader from "./ListViewHeader";
import AppContext from "../../AppContext";
import { recordsOnOnePage } from "../../utility/constants";
import "./InvoiceReports.css";
import ListViewFilters from "./ListViewFilters";
import CustomModal from "../CustomComponents/CustomModal";
const InvoiceReports = () => {
  const totalRecords = InvoiceReportsJson.data.length;
  const appContext = useContext(AppContext);
  const listPage = appContext.pageno;
  const handlePageChange = (oEvent, newPage) => {
    appContext.setpageno(newPage);
  };
  const [aDataList, setaDataList] = useState(InvoiceReportsJson.data);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  function handleCloseFilter() {
    setAnchorElFilter(null);
  }
  const style = {
    position: "absolute",
    top: "49%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    border: "2px solid black",
    boxShadow: 24,
    p: 4,
    borderRadius: "0.375rem",
  };

  return (
    <>
      <CustomModal
        open={Boolean(anchorElFilter)}
        handleClose={handleCloseFilter}
        style={style}
      >
        <ListViewFilters />
      </CustomModal>
      <ListViewHeader aDataList={aDataList} setaDataList={setaDataList}
      anchorElFilter={anchorElFilter}
      setAnchorElFilter={setAnchorElFilter}
      />

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
