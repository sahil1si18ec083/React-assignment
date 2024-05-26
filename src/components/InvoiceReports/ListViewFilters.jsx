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

const ListViewFilters = ({ aDataList, setaDataList, anchorElFilter, setAnchorElFilter }) => {
  // Accessing context data
  const appContext = useContext(AppContext);
  const currentModule = appContext.currentModule;

  // Filter fields based on the current module
  const filterFields = filterParameters
    .filter((moduleData) => moduleData.moduleName === currentModule)
    ?.at(0)?.filterFields;

  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    salesHeaderId: null,
    createdDate: null,
    requestDeliveryDate: null,
    status: null,
  });

  // Handle change for text field filters
  const fnHandleChangeFilter = (event) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Handle change for created date filter
  const fnHandleChangecreatedDate = (event) => {
    setSelectedFilters((prev) => ({
      ...prev,
      createdDate: getYYMMtimeStamp(event?.d?.getTime()),
    }));
  };

  // Handle change for request delivery date filter
  const fnHandleChangerequestDeliveryDate = (event) => {
    setSelectedFilters((prev) => ({
      ...prev,
      requestDeliveryDate: getYYMMtimeStamp(event?.d?.getTime()),
    }));
  };

  // Apply filters and update data list
  const fnApplyHandler = () => {
    fnFilterInvoices(selectedFilters, aDataList, setaDataList);
    setAnchorElFilter(null);
  };

  // Reset filters and close filter modal
  const fnCancelHandler = () => {
    setSelectedFilters({
      salesHeaderId: null,
      createdDate: null,
      requestDeliveryDate: null,
      status: null,
    });
    setAnchorElFilter(null);
  };

  return (
    <div className="list-view-filters">
      {/* Grid container for filter fields */}
      <Grid container spacing={2}>
        {filterFields.map((item, index) => {
          if (item.type === "textfield") {
            return (
              <Grid item xs={12} lg={4} sm={12} md={6} key={index}>
                <span className="filter-label">{item.fieldName}</span>
                <CustomTextField
                  placeholder={item.label}
                  value={selectedFilters[item?.key]}
                  handleChange={fnHandleChangeFilter}
                  fieldName={item.key}
                />
              </Grid>
            );
          } else if (item.key === "createdDate" || item.key === "requestDeliveryDate") {
            return (
              <Grid item xs={12} lg={4} sm={12} md={6} key={index}>
                <span className="filter-label">{item.fieldName}</span>
                <CustomDatePicker
                  name={item.key}
                  value={selectedFilters[item?.key]}
                  handleChange={item.key === "createdDate" ? fnHandleChangecreatedDate : fnHandleChangerequestDeliveryDate}
                  disablePastDates={false}
                  className="filter-date-pickers"
                />
              </Grid>
            );
          } else if (item.type === "select") {
            return (
              <Grid item xs={12} lg={4} sm={12} md={6} key={index}>
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
      {/* Apply and Cancel buttons */}
      <div className="Flex" id="Flex-filters">
        <button className="apply-changes createButton" onClick={fnApplyHandler}>
          Apply Changes
        </button>
        <button className="cancel" id="cancel-filter" onClick={fnCancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ListViewFilters;
