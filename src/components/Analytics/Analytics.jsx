// Importing necessary components and libraries from Material-UI and other modules
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// Importing JSON data and other components
import analyticstilesValues from "../../utility/dashboardtiles.json";
import InfoTile from "./InfoTile";
import Plot from "react-plotly.js";
import AnalyticsGraphs from "./AnalyticsGraphs";
import { analyticsChartFields } from "../../utility/config";
import dashboardJsonData from "../../utility/dashboardgraph.json";

// Importing CSS for styling
import "../Analytics/Analytics.css";

// Main Analytics component
const Analytics = () => {
  return (
    <div>
      {/* Box component to wrap the grid of info tiles */}
      <Box
        sx={{
          width: "100%",
          padding: "1rem 2rem",
          top: "131.5px",
          margin: "20px 0px 40px 0px",
        }}
      >
        {/* Grid container for layout of InfoTiles */}
        <Grid container spacing={2}>
          {/* Mapping through the analytics tiles data and rendering InfoTile components */}
          {analyticstilesValues.map((item, index) => (
            <InfoTile
              key={index} // Unique key for each tile
              tileTitle={item?.tileTitle} // Title of the tile
              value={item?.value} // Value displayed in the tile
            />
          ))}
        </Grid>
      </Box>

      {/* Container for the analytics graphs */}
      <div className="container">
        <Grid container spacing={3}>
          {/* Mapping through the analytics chart fields and rendering AnalyticsGraphs components */}
          {analyticsChartFields.map((item, index) => {
            return (
              <AnalyticsGraphs key={index}>
                {/* Plot component for displaying graphs with Plotly */}
                <Plot
                  data={dashboardJsonData[index].data} // Data for the plot
                  layout={item} // Layout configuration for the plot
                  style={{ width: "300px", height: "300px" }} // Styling for the plot
                />
              </AnalyticsGraphs>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

// Exporting the Analytics component as default
export default Analytics;
