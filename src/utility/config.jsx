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
    moduleName: "InvoiceReports",
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
        fieldBinding: "status",
        type: "status",
        visible: true,
        pinned: false,
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
const sortingParameters = [
  {
    moduleName: "InvoiceReports",
    sortingFields: [
      { key: "salesHeaderId", fieldName: "Order ID" },
      { key: "createdDate", fieldName: "Created Date" },
      { key: "requestDeliveryDate", fieldName: "Req. Del Date" },
      { key: "amount", fieldName: "Amount" },
    ],
  },
];
const filterParameters = [
  {
    moduleName: "InvoiceReports",
    filterFields: [
      {
        key: "salesHeaderId",
        fieldName: "Order ID",
        type: "textfield",
        label: "Enter Order ID",
      },
      {
        key: "createdDate",
        fieldName: "Created Date",
        type: "datepicker",
        label: "Enter Created Date",
      },
      {
        key: "requestDeliveryDate",
        fieldName: "Req. Del Date",
        type: "datepicker",
        label: "Enter Req. Del Date",
      },
      {
        key: "status",
        fieldName: "Invoice Status",
        type: "select",
        label: "Select Status",
      },
    ],
  },
];
export {
  renderIcon,
  moduleListFields,
  analyticsChartFields,
  sortingParameters,
  filterParameters,
};
