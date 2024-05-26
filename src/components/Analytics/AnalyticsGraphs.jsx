import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// AnalyticsGraphs component to display individual graph with its label and children components (like the Plot component)
const AnalyticsGraphs = ({ children, label }) => {
  return (
    <>
      {/* Grid item for responsive layout */}
      <Grid item xs={12} sm={12} md={6} lg={4}>
        {/* Box component to wrap each graph with styling */}
        <Box
          sx={{
            marginBottom: "18px",
            borderRadius: "4px",
            border: "1px solid #E0E0E0",
            background: "#FFF",
            boxShadow:
              "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
          }}
        >
          {/* Display the label/title of the graph */}
          <h3>{label}</h3>

          {/* Container for the children elements (e.g., the Plot component) */}
          <div className="mixed-chart">
            {children}
          </div>
        </Box>
      </Grid>
    </>
  );
};

export default AnalyticsGraphs;
