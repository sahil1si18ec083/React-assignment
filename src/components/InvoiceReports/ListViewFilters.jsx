import React, { useState } from "react";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
import AppContext from "../../AppContext";
import { filterParameters } from "../../utility/config";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomSelect from "../CustomComponents/CustomSelect";
import CustomDatePicker from "../CustomComponents/CustomDatePicker";
import { selectedInvoiceStatus } from "../../utility/constants";
import { getYYMMtimeStamp } from "../../utility/utilityFunctions";
import fnFilterInvoices from "./fnFilterInvoices";
const ListViewFilters = ({ aDataList, setaDataList , anchorElFilter, setAnchorElFilter}) => {
  const appContext = useContext(AppContext);
  const currentModule = appContext.currentModule;
  const filterFields = filterParameters
    .filter((moduleData) => {
      return moduleData.moduleName === currentModule;
    })
    ?.at(0)?.filterFields;
  const [selectedFilters, setSelectedFilters] = useState({
    salesHeaderId: null,
    createdDate: null,
    requestDeliveryDate: null,
    status: null,
  });
  const fnHandleChangeFilter = (event) => {
   
    setSelectedFilters((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const fnHandleChangecreatedDate = (event) => {
    setSelectedFilters((prev) => {
      return {
        ...prev,
        createdDate: getYYMMtimeStamp(event?.$d?.getTime()),
      };
    });
  };
  const fnHandleChangerequestDeliveryDate = (event) => {
    setSelectedFilters((prev) => {
      return {
        ...prev,
        requestDeliveryDate: getYYMMtimeStamp(event?.$d?.getTime()),
      };
    });
  };
  const fnApplyHandler = () => {
    fnFilterInvoices(selectedFilters, aDataList, setaDataList);
    setAnchorElFilter(null);
  };
  const fnCancelHandler = () => {
    setSelectedFilters({
      salesHeaderId: null,
      createdDate: null,
      requestDeliveryDate: null,
      status: null,
    })
    setAnchorElFilter(null);
  };
  return (
    <div>
     
      <Grid container spacing={2}>
        {filterFields.map((item, index) => {
          if (item.type == "textfield") {
            return (
              <Grid sx={{}} item xs={4}>
                <span className="filter-label">{item.fieldName}</span>
                <CustomTextField
                  placeholder={item.label}
                  value={selectedFilters[item?.key]}
                  handleChange={fnHandleChangeFilter}
                  fieldName={item.key}
                />
              </Grid>
            );
          } else if (item.key == "createdDate") {
            return (
              <Grid item xs={4}>
               <span className="filter-label">{item.fieldName}</span>
                <CustomDatePicker
                  name={item.key}
                  value={selectedFilters[item?.key]}
                  handleChange={fnHandleChangecreatedDate}
                  disablePastDates={false}
                  className="filter-date-pickers"
                />
              </Grid>
            );
          } else if (item.key == "requestDeliveryDate") {
            return (
              <Grid item xs={4}>
               <span className="filter-label">{item.fieldName}</span>
                <CustomDatePicker
                  name={item.key}
                  value={selectedFilters[item?.key]}
                  handleChange={fnHandleChangerequestDeliveryDate}
                  disablePastDates={false}
                  className="filter-date-pickers"
                />
              </Grid>
            );
          } else if (item.type == "select") {
            return (
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex !important ",
                  flexDirection: "column !important",
                }}
              >
                <span className="filter-label">{item.fieldName}</span>
                <CustomSelect
                  value={selectedFilters[item?.key]}
                  name={item.key}
                  dropDownArray={selectedInvoiceStatus}
                  placeholder={item.label}
                  fnHandleChange={fnHandleChangeFilter}
                />
              </Grid>
            );
          }
        })}
      </Grid>
      <div className="Flex" id="Flex-filters">
        <button
          className="apply-changes createButton"
          onClick={() => fnApplyHandler()}
        >
          Apply Changes
        </button>
        <button
          className="cancel"
          id="cancel-filter"
          onClick={() => fnCancelHandler()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ListViewFilters;
