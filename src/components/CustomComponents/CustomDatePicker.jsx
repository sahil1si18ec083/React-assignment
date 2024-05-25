import React from "react";

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const CustomDatePicker = ({name, value, handleChange, disablePastDates }) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker name={name}   slotProps={{
                textField: {
                  size: "small",
                  error: false,
                },
              }} value={dayjs(value)} onChange={handleChange} disablePast={disablePastDates}  />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
