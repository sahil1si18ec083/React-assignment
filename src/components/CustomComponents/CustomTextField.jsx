import React from "react";
import { TextField } from "@mui/material";
const CustomTextField = ({
  placeholder,
  value,
  
  className,
  handleChange,
  fieldName
}) => {
  
  return (
    
    <div>
      <TextField
        name={fieldName}
        
        value={value}
        placeholder={placeholder}
        sx={{
          "& .MuiInputBase-input": {
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
          height:"2.5rem !important"
        }}
        className={className}
        
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default CustomTextField;
