import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// InfoTile component to display individual tiles with title and value
const InfoTile = ({ tileTitle, value }) => {
  return (
    <>
      {/* Grid item for responsive layout */}
      <Grid
        xs={12}  // Full width on extra-small screens
        sm={6}   // Half width on small screens
        md={4}   // One-third width on medium screens
        lg={2}   // One-sixth width on large screens
        item
        sx={{
          padding: "2% 2%",  // Padding around each grid item
        }}
      >
        {/* Paper component to wrap each info tile with styling */}
        <Paper
          sx={{
            padding: "20px",  // Padding inside the paper component
            borderRadius: "10px",  // Rounded corners
            textAlign: "center",  // Centered text alignment
            boxShadow: "0px 12px 12px 0px #E1E1E1",  // Shadow for elevation effect
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",  // Background color based on theme mode
          }}
        >
          {/* Flexbox container for the tile title and value */}
          <div className="flex-box">
            <span className="info-tile">{tileTitle}</span>  {/* Tile title */}
            <span>{value}</span>  {/* Tile value */}
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default InfoTile;
