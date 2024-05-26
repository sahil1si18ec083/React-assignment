import React, { useContext, useState } from "react";
import ListViewTable from "./ListViewTable";
import TablePagination from "@mui/material/TablePagination";
import InvoiceReportsJson from "../../utility/invoiceReports.json";
import AppContext from "../../AppContext";
import { recordsOnOnePage } from "../../utility/constants";
import "./InvoiceReports.css";
import ListViewHeader from "./ListViewHeader";
import ListViewFilters from "./ListViewFilters";
import CustomModal from "../CustomComponents/CustomModal";

const InvoiceReports = () => {
  // Total number of records from the JSON data
  const totalRecords = InvoiceReportsJson.data.length;

  // Accessing context data
  const appContext = useContext(AppContext);
  const listPage = appContext.pageno;

  // Function to handle page change
  const handlePageChange = (event, newPage) => {
    appContext.setpageno(newPage);
  };

  // State to manage data list and filter anchor element
  const [aDataList, setaDataList] = useState(InvoiceReportsJson.data);
  const [anchorElFilter, setAnchorElFilter] = useState(null);

  // Function to close filter modal
  const handleCloseFilter = () => {
    setAnchorElFilter(null);
  };

  // Style for the modal
  const modalStyle = {
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
      {/* Modal for filters */}
      <CustomModal
        open={Boolean(anchorElFilter)}
        handleClose={handleCloseFilter}
        style={modalStyle}
      >
        <ListViewFilters
          aDataList={aDataList}
          setaDataList={setaDataList}
          anchorElFilter={anchorElFilter}
          setAnchorElFilter={setAnchorElFilter}
        />
      </CustomModal>

      {/* Header with filters */}
      <ListViewHeader
        aDataList={aDataList}
        setaDataList={setaDataList}
        anchorElFilter={anchorElFilter}
        setAnchorElFilter={setAnchorElFilter}
      />

      {/* Table to display data */}
      <ListViewTable aDataList={aDataList} setaDataList={setaDataList} />

      {/* Pagination component */}
      <TablePagination
        className="sticky-pagination"
        rowsPerPageOptions={[]} // Removing rows per page options
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
