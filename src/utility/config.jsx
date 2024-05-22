import React, { useState } from "react";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const renderIcon = (iconLabel) => {
  switch (iconLabel) {
    case "Analytics":
      return <InsertChartOutlinedTwoToneIcon />;
    case "Invoice Reportsr":
      return <ViewListOutlinedIcon />;
    default:
      return <DescriptionOutlinedIcon />;
  }
};

const moduleListFields = [
  {
    moduleName: "Sales Order",
    columnsList: [
      {
        fieldName: "Order ID",
        fieldBinding: "salesHeaderId",
        visible: true,
        pinned: false,
      },
      {
        fieldName: "Created Date",
        fieldBinding: "createdDate",
        type: "date",
        visible: true,
        pinned: false,
      },
      {
        fieldName: "Customer",
        fieldBinding: "soldToParty",
        type: "customer",
        visible: true,
        pinned: false,
      },
      {
        fieldName: "Created By",
        fieldBinding: "emailId",
        visible: true,
        pinned: false,
      },
      {
        fieldName: "Req. Del. Date",
        fieldBinding: "requestDeliveryDate",
        type: "date",
        visible: true,
        pinned: false,
      },
      {
        fieldName: "Amount",
        fieldBinding: "amount",
        visible: true,
        pinned: false,
      },
      {
        fieldName: "Status",
        fieldBinding: "documentProcessStatus",
        type: "status",
        visible: true,
        pinned: false,
      },
      {
        fieldName: "Action",
        fieldBinding: "Action",
        visible: true,
        pinned: false,
        type: "action",
      },
    ],
  },
];
const analyticsChartFields = [
  {
    title: "Total Invoices Vs Paid Invoices",
    xaxis: { title: "Months of Year" },
    yaxis: { title: "Number of Invoices" },
    barmode: "group",
  },
  {
    title: "Overdue Invoices by Ageing",
    xaxis: { title: "Months of Year" },
    yaxis: { title: "Number of Invoices" },
  },
  {
    title: "Invoices by Due Date (Top 5)",
    xaxis: { title: "Months of Year" },
    yaxis: { title: "Number of Invoices" },
  },
  {
    title: "Partially Paid Invoices (Top 5)",
    xaxis: { title: "Months of Year" },
    yaxis: { title: "Number of Invoices" },
  },
  
  {
    title: "Invoice Status Tracker",
    
  },
  {
    title: "Dispute Status Tracker",
    
  },
];
export { renderIcon, moduleListFields, analyticsChartFields };
