import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/CustomComponents/LoadingSpinner";
// Lazy loading  the components
const Analytics = lazy(() => import("../components/Analytics/Analytics"));
const InvoiceReports = lazy(() => import("../components/InvoiceReports/InvoiceReports"));

// router with lazy-loaded components
const appRouter = createBrowserRouter([
  {
    path: "/analytics",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Analytics />
      </Suspense>
    ),
  },
  {
    path: "/invoiceReports",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <InvoiceReports />
      </Suspense>
    ),
  },
]);

export default appRouter;
