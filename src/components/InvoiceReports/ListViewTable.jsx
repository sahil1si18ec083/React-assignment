import React from "react";
import CustomTable from "../CustomComponents/CustomTable";
import InvoiceReportsJson from "../../utility/invoiceReports.json";
import { moduleListFields } from "../../utility/config";
import AppContext from "../../AppContext";
import { useContext } from "react";
import { recordsOnOnePage } from "../../utility/constants";

const ListViewTable = ({ aDataList, setaDataList }) => {
  // Accessing context data
  const appContext = useContext(AppContext);
  const currentModule = appContext.currentModule;

  // Getting default module columns based on the current module
  const defaultModuleColumns = moduleListFields
    .filter((moduleData) => moduleData.moduleName === currentModule)
    ?.at(0)?.columnsList;

  // Getting current page number from context
  const pageNumber = appContext.pageno;

  return (
    <div>
      {/* 
        CustomTable component to display data in tabular format.
        - Headercolumns: List of column headers.
        - rows: Data rows to be displayed, sliced based on current page number and records per page.
      */}
      <CustomTable
        Headercolumns={defaultModuleColumns}
        rows={aDataList?.slice(
          pageNumber * recordsOnOnePage,
          (pageNumber + 1) * recordsOnOnePage
        )}
      />
    </div>
  );
};

export default ListViewTable;
