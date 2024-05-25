import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import formatStatusIcon from "../../utility/formatStatusIcon";
import Chip from "@mui/material/Chip";
import { formatDate } from "../../utility/utilityFunctions";
import formatStatusColour from "../../utility/formatStatusColour";
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
    "&:nth-of-type(even)": {
      backgroundColor: "#FAFAFA",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFFFFF",
    },
  
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
const CustomTable = ({ Headercolumns, rows }) => {
  
  return (
    <>
      <div className="tableview" style={{ margin: "20px", overflowY:"scroll" }}>
        <TableContainer
          // style={{ maxHeight: maxHeight }}
          component={Paper}
          // className={"listTableContainer " + className}
          className={"listTableContainer " }
        >
          <Table stickyHeader className="listTable">
            <StyledTableHead>
              <TableRow>
                {Headercolumns?.map(function (columnItem, columnIndex) {
                  return (
                    <TableCell
                      align="left"
                      key={columnIndex}
                      className={columnItem.fieldName}
                    >
                      {columnItem?.fieldName}
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
                    {Headercolumns?.map(function (columnItem) {
                      if (columnItem?.type === "date") {
                        return (
                          <TableCell component="th" scope="data">
                            {formatDate(columns[columnItem.fieldBinding])}
                          </TableCell>
                        );
                      } 
                      else if (
                        columnItem?.type === "status" 
                      ) {
                        return (
                          <TableCell component="th" scope="data">
                            <Chip
                              icon={formatStatusIcon(
                                columns[columnItem?.fieldBinding]
                              )}
                              label={
                                columns[columnItem?.fieldBinding]
                                      ?.replaceAll("_", " ")
                                     
                              }
                              size="small"
                              sx={formatStatusColour(
                                columns[columnItem?.fieldBinding]
                              )}
                              className="statusChip"
                            ></Chip>
                          </TableCell>
                        );
                      }
                      
                      else {
                        return (
                          <TableCell component="th" scope="data">
                            {columns[columnItem?.fieldBinding]}
                          </TableCell>
                        );
                      }
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default CustomTable;
