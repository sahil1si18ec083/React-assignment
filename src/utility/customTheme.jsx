import React, { useState } from "react";
import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    statusColors: {
      drafted: {
        background: "#fbf6c5",
        border: "1px solid #F1D8C4",
        borderRadius: "4px",
        color: "#b78d30",
      },
      created: {
        background: "#E4F1FF",
        border: "1px solid #C5DAF2",
        borderRadius: "4px",
        color: "#002D5E",
      },
      inProgress: {
        background: "#FEF7EC",
        border: "1px solid #F1D8C4",
        borderRadius: "4px",
        color: "#CD722C",
      },
      deliveryInTransit: {
        background: "#F0FFF1",
        border: "1px solid #CBE9CD",
        borderRadius: "4px",
        color: "#4CAF50",
      },
      orderPlaced: {
        background: "#ead3fb",
        border: "1px solid #C5DAF2",
        borderRadius: "4px",
        color: "#822cc3",
      },
      failed: {
        background: "#FFECEC",
        border: "1px solid #D30E0E",
        borderRadius: "4px",
        color: "#D30E0E",
      },
      pending: {
        background: "#FFFFFF",
        border: "1px solid #002D5D",
        borderRadius: "6px",
        color: "#002D5D",
      },
      default: {
        background: "#e5e4e0",
        color: "#11111",
      },
    },
  },
  typography: {
    h4: {
      fontSize: "1rem !important",
      fontWeight: "Bold",
    },
    h6: {
      fontSize: "0.875rem !important",
      fontWeight: "normal",
    },
  },
});

export default customTheme;
