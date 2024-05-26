import React from "react";
import { TextField } from "@mui/material";

// CustomTextField component for rendering a text input field
// Props:
// - placeholder: The placeholder text for the input field
// - value: The current value of the input field
// - className: Additional class names for custom styling
// - handleChange: Function to handle changes in the input field
// - fieldName: The name attribute for the input field
const CustomTextField = ({
  placeholder,
  value,
  className,
  handleChange,
  fieldName
}) => {
  return (
    <div>
      {/* TextField component from Material-UI */}
      <TextField
        name={fieldName}  // Name attribute for the input field
        value={value}  // Current value of the input field
        placeholder={placeholder}  // Placeholder text for the input field
        sx={{
          "& .MuiInputBase-input": {
            overflow: "hidden",
            textOverflow: "ellipsis",  // Ensure text overflow is handled
          },
          height: "2.5rem !important"  // Custom height for the input field
        }}
        className={className}  // Additional class names for custom styling
        onChange={(event) => handleChange(event)}  // Change handler for input field
      />
    </div>
  );
};

export default CustomTextField;
