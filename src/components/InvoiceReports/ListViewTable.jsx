import React from "react";
import CustomTable from "../CustomComponents/CustomTable";
import InvoiceReportsJson from "../../utility/invoiceReports.json";
import { moduleListFields } from "../../utility/config";
import AppContext from "../../AppContext";
import { useContext } from "react";
import { recordsOnOnePage } from "../../utility/constants";
const ListViewTable = ({aDataList,setaDataList}) => {
 
  const appContext = useContext(AppContext);
  const currentModule = appContext.currentModule;
  const defaultModuleColumns = moduleListFields
    .filter((moduleData) => {
      return moduleData.moduleName === currentModule;
    })
    ?.at(0)?.columnsList;
  const pageNumber = appContext.pageno;
  return (
    <div>
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
