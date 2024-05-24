import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const InfoTile = ({ tileTitle, value }) => {
  return (
    <>
      <Grid
        xs={2}
        item
        sx={{
          padding: "2% 2%",
        }}
      >
        <Paper
          sx={{
            // height: "16vh",
            padding: "12px 8px 12px 8px",
            borderRadius: "10px",
            // gap: "8px",
            textAlign: "center",

            padding: "20px",

            boxShadow: "0px 12px 12px 0px #E1E1E1",

            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <div className="flex-box">
          <span className="info-tile">{tileTitle}</span>
          <span>{value}</span>
          </div>
   
          {/* <h4>{tileTitle}</h4>
          <h4>{value}</h4> */}
        </Paper>
      </Grid>
    </>
  );
};

export default InfoTile;
