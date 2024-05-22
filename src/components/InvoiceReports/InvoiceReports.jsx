const InvoiceReports = () => {
  return (
    <>
      <ListViewHeader metaData={metaData} />

      <ListViewTable />
      <TablePagination
        className="sticky-pagination"
        rowsPerPageOptins={[]}
        component="div"
        count={totalRecords}
        rowsPerPage={50}
        page={listPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default InvoiceReports;
