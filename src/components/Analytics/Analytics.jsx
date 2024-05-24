import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import analyticstilesValues from "../../utility/dashboardtiles.json";
import InfoTile from "./InfoTile";
import Plot from "react-plotly.js";
import AnalyticsGraphs from "./AnalyticsGraphs";
import { analyticsChartFields } from "../../utility/config";
import dashboardJsonData from "../../utility/dashboardgraph.json";
import "../Analytics/Analytics.css";
const Analytics = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "74px",
          padding: "1rem 2rem",

          top: "131.5px",
          margin: "20px 0px 40px 0px",
        }}
      >
        <Grid container spacing={2}>
          {analyticstilesValues.map((item, index) => (
            <InfoTile
              key={index}
              tileTitle={item?.tileTitle}
              value={item?.value}
            />
          ))}
        </Grid>
      </Box>

      <div className="container">
        <Grid container spacing={3}>
          {analyticsChartFields.map((item, index) => {
            return (
              <AnalyticsGraphs key={index}>
                <Plot
                  data={dashboardJsonData[index].data}
                  layout={item}
                  style={{ width: "300px", height: "300px" }}
                />
              </AnalyticsGraphs>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
export default Analytics;
