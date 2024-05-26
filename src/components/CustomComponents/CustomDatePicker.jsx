import React from "react";

// Importing components from MUI X Date Pickers
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";  // Importing dayjs for date manipulation
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";  // Adapter to use dayjs with MUI Date Pickers
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";  // Provider for localization

// CustomDatePicker component to render a date picker with optional past date disabling
const CustomDatePicker = ({ name, value, handleChange, disablePastDates }) => {
  return (
    <div>
      {/* LocalizationProvider to wrap the date picker and provide localization context */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* DesktopDatePicker component with props */}
        <DesktopDatePicker
          name={name}  // Name attribute for the date picker
          slotProps={{
            textField: {
              size: "small",  // Size of the text field
              error: false,   // Error state of the text field
            },
          }}
          value={dayjs(value)}  // Current value of the date picker
          onChange={handleChange}  // Function to handle date changes
          disablePast={disablePastDates}  // Disable past dates if true
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
