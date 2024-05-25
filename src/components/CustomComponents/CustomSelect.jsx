// This is a custom Component that takes value which will show on the ui when user clicks the option,
// Name will be the name of the select option
// DropDownArray is array that will show up when user wants to choose options
// placeholder will be shown when nothing is clicked
// fnHandleChange will be invoked from the parent component only
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import { Typography } from "@mui/material";
const CustomSelect = ({value, name, dropDownArray, placeholder,fnHandleChange}) => {
  return (
    <>
      <Select
        value={dropDownArray?.indexOf(value)}
        name={name}
        onChange={(event) => fnHandleChange(event)}
        renderValue={(selected) => {
          if (dropDownArray.indexOf(value) === -1) {
            return <Typography>{placeholder}</Typography>;
          }
          return value;
        }}
      >
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
