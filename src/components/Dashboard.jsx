import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import TableHead from "@mui/material/TableHead";
import { Typography } from "@mui/material";
import Chart from "react-apexcharts";

import ApexCharts from "apexcharts";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker, Space } from "antd";

import {
  Button,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import StorageService from "../../dataStore/StorageService";



function Dashboard() {
  let loggedInUser = StorageService.getObject("loggedinuser") || {};
  let rbiView = useSelector((state) => state.appReducer.rbiView);
  let franchiseView = useSelector((state) => state.appReducer.franchiseView);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const StyledTableHead = styled(TableHead)(({ theme }) => ({
    "& th": {
      backgroundColor: "#F7F6FF",
    },
  }));
  const [spacing, setSpacing] = React.useState(2);

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  const rows = [
    createData("Customer 1", 90, 159, "High Risk", 20, "1130000"),
    createData("Customer 1", 90, 237, "High Risk", 10, "1130000"),
    createData("Customer 1", 80, 262, "High Risk", 45, "1130000"),
    createData("Customer 1", 86, 305, "High Risk", 45, "1130000"),
    createData("Customer 1s", 90, 356, "High Risk", 50, "1130000"),
  ];
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    balance: String
  ) {
    return { name, calories, fat, carbs, protein, balance };
  }
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const chartRef = useRef(null);
  const { RangePicker } = DatePicker;

  const options = {
    series: [
      {
        name: "Invoiced : ₹1,115,634",
        data: [100000, 65000, 80000, 52000, 55000],
        colors: ["#3026B9"],
      },
      {
        name: "Paid : ₹1,050,300",
        data: [50000, 46000, 73000, 40000, 75000],
        colors: ["#DBD8FD"],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      width: 400,
    },
    colors: ["#5BA6FF", "#FF8F50"],

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["April 1", "April 8", "April 15", "April 22", "April 29"],
    },
    yaxis: {
      title: {
        text: "₹ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "₹ " + val + " thousands";
        },
      },
    },
  };

  const overdues = {
    series: [
      {
        name: "Inflation",
        data: [12212, 4789, 8644, 8876, 2756],
      },
    ],
    colors: ["#C5C2EF"],

    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        color: "#C5C2EF",
      },
    },
    xaxis: {
      categories: [
        "<30 Days",
        "31-60 Days",
        "61-90 Days",
        "91-120 Days",
        ">120 Days",
      ],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };
  const invoicesByDueDate = {
    series: [
      {
        name: "Inflation",
        data: [12272, 9000, 8644, 8176, 2756],
      },
    ],
    colors: ["#C5C2EF"],

    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        color: "#C5C2EF",
      },
    },
    xaxis: {
      categories: [
        "<30 Days",
        "31-60 Days",
        "61-90 Days",
        "91-120 Days",
        ">120 Days",
      ],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  const partiallyPaidInv = {
    series: [
      {
        name: "Inflation",
        data: [799, 11789, 8944, 6776, 2756],
      },
    ],
    colors: ["#C5C2EF"],

    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        color: "#C5C2EF",
      },
    },
    xaxis: {
      categories: [
        "<30 Days",
        "31-60 Days",
        "61-90 Days",
        "91-120 Days",
        ">120 Days",
      ],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  const invoice_tracker = {
    series: [54, 15, 35],
    chart: {
      width: 300,
      type: "pie",
    },

    colors: ["#FF8F50", "#DBD8FD", "#5BA6FF"],
    labels: ["Overdue Invoice ", "Paid Invoices", " Open Invoices"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const dispute_tracker = {
    series: [40, 20, 15, 15, 10],
    chart: {
      width: 300,
      type: "pie",
    },

    colors: ["#E7FFDC", "#FFC887", "#90EE90", "#FF8A8A", "#C5C2EF"],
    labels: ["Open", "In Progress", "Resolved", "Rejected", "Closed"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  if (chartRef.current) {
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
  }

  return (
    <div className="dashboard" style={{ padding: "20px" }}>
      <div className="Greeting" style={{ marginBottom: "31px" }}>
        <h3> Hello, {loggedInUser.DisplayName}</h3>
      </div>
      <Grid item md={12}>
        <Accordion
          defaultExpanded={false}
          sx={{
            marginTop: "0px !important",
            border: "1px solid",
            borderColor: "#E0E0E0",
            "&:not(:last-child)": {
              borderBottom: 0,
            },
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              minHeight: "2rem !important",
              margin: "0px !important",
              color: "#1D1D1D",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
              }}
            >
              Advanced Filter
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container alignItems="center">
              <Grid item md={3}>
                <Typography>Franchise</Typography>
                <TextField
                  id="outlined-size-small"
                  defaultValue="Enter Franchise Name or Id"
                  size="small"
                  sx={{ fontStyle: "italic", width: "320px" }}
                />
              </Grid>
              <Grid item xs={3}>
                <div>
                  <Typography>Date Range</Typography>

                  <Space direction="vertical" size={12}>
                    <RangePicker style={{ width: "320px", height: "40px" }} />
                  </Space>
                </div>
              </Grid>

              <Grid
                item
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "500px",
                }}
              >
                <Stack spacing={2} direction="row">
                  <Button sx={{ color: "#3B30C8" }} variant="text">
                    Clear
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    sx={{ background: "#3B30C8" }}
                  >
                    Apply
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "74px",
          top: "131.5px",
          margin: "20px 0px 40px 0px",
        }}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item sx={{ margin: "10px" }}>
              <Paper
                sx={{
                  width: "160px",
                  height: "80px",
                  padding: "12px 8px 12px 8px",
                  borderRadius: "10px",
                  gap: "8px",

                  padding: "20px",

                  boxShadow: "0px 12px 12px 0px #E1E1E1",

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <h4>Open Invoices</h4>
                <h4>12</h4>
              </Paper>
            </Grid>
            <Grid item sx={{ margin: "10px" }}>
              <Paper
                sx={{
                  width: "180px",
                  height: "80px",
                  padding: "12px 8px 12px 8px",
                  borderRadius: "10px",
                  gap: "8px",

                  padding: "20px",

                  boxShadow: "0px 12px 12px 0px #E1E1E1",

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                {" "}
                <h4>Overdue Invoices</h4>
                <h4>28</h4>
              </Paper>
            </Grid>
            <Grid item sx={{ margin: "10px" }}>
              <Paper
                sx={{
                  width: "160px",
                  height: "80px",
                  padding: "12px 8px 12px 8px",
                  borderRadius: "10px",
                  gap: "8px",

                  padding: "20px",

                  boxShadow: "0px 12px 12px 0px #E1E1E1",

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                {" "}
                <h4>Due Invoices</h4>
                <h4>48</h4>
              </Paper>
            </Grid>
            <Grid item sx={{ margin: "10px" }}>
              <Paper
                sx={{
                  width: "220px",
                  height: "80px",
                  padding: "12px 8px 12px 8px",
                  borderRadius: "10px",
                  gap: "8px",

                  padding: "20px",

                  boxShadow: "0px 12px 12px 0px #E1E1E1",

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                {" "}
                <h4>Partially Paid Invoices</h4>
                <h4>56</h4>
              </Paper>
            </Grid>
            <Grid item sx={{ margin: "10px" }}>
              <Paper
                sx={{
                  width: "160px",
                  height: "80px",
                  padding: "12px 8px 12px 8px",
                  borderRadius: "10px",
                  gap: "8px",

                  padding: "20px",

                  boxShadow: "0px 12px 12px 0px #E1E1E1",

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <h4>Paid Invoices</h4>
                <h4>568</h4>
              </Paper>
            </Grid>
            <Grid item sx={{ margin: "10px" }}>
              <Paper
                sx={{
                  width: "160px",
                  height: "80px",
                  padding: "12px 8px 12px 8px",
                  borderRadius: "10px",
                  gap: "8px",

                  padding: "20px",

                  boxShadow: "0px 12px 12px 0px #E1E1E1",

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <h4>Disputes</h4>
                <h4>568</h4>
              </Paper>
            </Grid>
            <Grid item sx={{ margin: "10px" }}>
              <Paper
                sx={{
                  width: "160px",
                  height: "80px",
                  padding: "12px 8px 12px 8px",
                  borderRadius: "10px",
                  gap: "8px",

                  padding: "20px",

                  boxShadow: "0px 12px 12px 0px #E1E1E1",

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <h4>Payments</h4>
                <h4>568</h4>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <div className="container">
        <Grid container spacing={2}>
          {/*  <Grid item xs={8}>
            <Box
              sx={{
                width: "100%",
                marginBottom: "18px",
                height: "131px",
                borderRadius: "4px",
                border: "1px solid #D4D1F4",
                background: "#FFF",

                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <div className="accountSummary" style={{ padding: "20px" }}>
                <h4>Account Summary</h4>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <Typography>Total Collections</Typography>
                    <div style={{ display: "flex" }}>
                      <h4 style={{ marginRight: "5px" }}>₹ 1,050,300</h4>
                      <h4 style={{ color: "green" }}>+5%</h4>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography>Invoice Collected</Typography>

                    <div style={{ display: "flex" }}>
                      <h4 style={{ marginRight: "5px" }}>77 </h4>
                      <h4 style={{ color: "green" }}>+0.5%</h4>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography>Total Collections</Typography>
                    <h4> ₹ 1,210,000</h4>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography>Total Collections</Typography>
                    <h4 style={{ color: "red" }}>102</h4>
                  </Grid>
                </Grid>
              </div>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "350px",
                marginBottom: "18px",
                flexShrink: "0",
                borderRadius: "4px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <Box
                sx={{
                  width: "845.04296875px",
                  height: "60px",
                  top: "154px",
                  left: "20px",
                  width: "100%",
                  padding: "20px",
                  borderRadius: "4px 4px 0px 0px",
                  background: "#F1F5FE",
                }}
              >
                <div className="barGraph" style={{ display: "flex" }}>
                  <Typography>Total Invoices Vs Paid Invoices</Typography>
                </div>
              </Box>
              <div className="mixed-chart">
                <Chart
                  options={options}
                  series={options.series}
                  type="bar"
                  width="390"
                />
              </div>
            </Box>
            <div className="TopDebtors">
              <h3>TOP DEBTORS</h3>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <StyledTableHead>
                    <TableRow>
                      <TableCell>Customer Name </TableCell>{" "}
                      <TableCell align="right">Outstanding Invoices</TableCell>
                      <TableCell align="right">Total Invoices</TableCell>
                      <TableCell align="right">Customer Segment</TableCell>
                      <TableCell align="right">DSO</TableCell>
                      <TableCell align="right">Balance (₹)</TableCell>
                    </TableRow>
                  </StyledTableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">{row.balance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid> */}

          <Grid item xs={4}>
            <Box
              sx={{
                width: "445.836px",
                height: "300px",
                padding: "20px",
                marginBottom: "18px",
                borderRadius: "4px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <h3>Total Invoices Vs Paid Invoices</h3>

              <div className="mixed-chart">
                <Chart
                  options={options}
                  series={options.series}
                  type="bar"
                  width="390"
                />
              </div>
            </Box>
            <Box
              sx={{
                width: "445.836px",
                height: "300px",
                padding: "20px",
                borderRadius: "4px",
                marginBottom: "18px",
                border: "1px solid #E0E0E0",
                background: "#FFF",

                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <h3>Partially Paid Invoices (Top 5)</h3>
              <div className="mixed-chart">
                <Chart
                  options={partiallyPaidInv}
                  series={partiallyPaidInv.series}
                  type="bar"
                  width="390"
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "445.836px",
                height: "300px",
                padding: "20px",
                marginBottom: "18px",
                borderRadius: "4px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <h3>Overdue Invoices by Ageing</h3>
              <div className="mixed-chart">
                <Chart
                  options={overdues}
                  series={overdues.series}
                  type="bar"
                  width="390"
                />
              </div>
            </Box>
            <Box
              sx={{
                width: "445.836px",
                height: "300px",
                padding: "20px",
                borderRadius: "4px",
                marginBottom: "18px",
                border: "1px solid #E0E0E0",
                background: "#FFF",

                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <h3>Invoice Status Tracker</h3>
              <div className="mixed-chart">
                <Chart
                  options={invoice_tracker}
                  series={invoice_tracker.series}
                  type="pie"
                  width="390"
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "445.836px",
                height: "300px",
                padding: "20px",
                marginBottom: "18px",
                borderRadius: "4px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <h3>Invoices by Due Date (Top 5)</h3>
              <div className="mixed-chart">
                <Chart
                  options={invoicesByDueDate}
                  series={invoicesByDueDate.series}
                  type="bar"
                  width="390"
                />
              </div>
            </Box>
            <Box
              sx={{
                width: "445.836px",
                height: "300px",
                padding: "20px",
                borderRadius: "4px",
                marginBottom: "18px",
                border: "1px solid #E0E0E0",
                background: "#FFF",

                boxShadow:
                  "0px 0px 2px 0px #E0E0E0, 0px 0px 4px 0px rgba(249, 249, 249, 0.25), 0px 0px 8px 0px rgba(255, 252, 252, 0.25), 0px 0px 16px 0px rgba(207, 207, 207, 0.25)",
              }}
            >
              <h3>Dispute Status Tracker</h3>
              <div className="mixed-chart">
                <Chart
                  options={dispute_tracker}
                  series={dispute_tracker.series}
                  type="pie"
                  width="390"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;