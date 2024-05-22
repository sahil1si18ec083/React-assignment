const StyledTableHead = styled(TableHead)(({ theme }) => ({
    border: "1px solid #000",

    "& th": {
        backgroundColor: "#F1E9F5",
        color: "#3026B9",
        fontWeight: "700",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
const CustomTable = () => {
    return (
        <>
            <div className="tableview" style={{ margin: "20px" }}>
                <TableContainer
                    style={{ maxHeight: maxHeight }}
                    component={Paper}
                    className={"listTableContainer " + className}

                >
                    <Table stickyHeader className="listTable">
                        <StyledTableHead>
                            <TableRow>
                                {Headercolumns?.map(function(columnItem, columnIndex) {
                                    return (
                                        <TableCell
                                            align="left"
                                            key={columnIndex}
                                            className={columnItem.fieldName}
                                        >
                                            {columnItem?.fieldLabel}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </StyledTableHead>
                        <TableBody>
                            {rows?.map((columns, index) => {
                                const isClicked = rows[index]?.isclicked;
                                return (
                                    <StyledTableRow
                                        key={columns.salesHeaderId}
                                        sx={{
                                            "&:last-child td, &:last-child th": { border: 0 },
                                            cursor: "pointer",

                                            background: isClicked ? "rgb(241,233,245)" : "white",
                                        }}
                                        onClick={(event) => {
                                            fnRowClickHandler(event, Headercolumns, rows, index);
                                        }}
                                    >
                                        {Headercolumns?.map(function(columnItem) {

                                            return (
                                                <TableCell component="th" scope="data">

                                                    {columns[columnItem?.fieldBinding]}

                                                </TableCell>
                                            );


                                        })}
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
export default CustomTable;