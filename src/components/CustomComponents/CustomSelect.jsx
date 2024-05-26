import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

// CustomSelect component for rendering a dropdown menu
// Props:
// - value: The currently selected value
// - name: The name of the select element
// - dropDownArray: Array of options to be displayed in the dropdown
// - placeholder: Placeholder text shown when no option is selected
// - fnHandleChange: Function to handle changes when an option is selected
const CustomSelect = ({ value, name, dropDownArray, placeholder, fnHandleChange }) => {
  return (
    <>
      {/* Select component from Material-UI */}
      <Select
        value={dropDownArray?.indexOf(value)}  // Current selected value, index of value in dropDownArray
        name={name}  // Name attribute for the select element
        onChange={(event) => fnHandleChange(event)}  // Change handler for when an option is selected
        renderValue={(selected) => {
          // Render the value displayed in the select element
          if (dropDownArray.indexOf(value) === -1) {
            return <Typography>{placeholder}</Typography>;  // Show placeholder if no option is selected
          }
          return value;  // Show the selected value
        }}
      >
        {/* Map through dropDownArray to create MenuItem components */}
        {dropDownArray?.map((dropDownValue, index) => {
          return (
            <MenuItem key={index} value={dropDownValue}>
              {dropDownValue}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default CustomSelect;
