import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../CustomComponents/LoadingSpinner";
// Lazy loading  the components
const Analytics = lazy(() => import("../Analytics/Analytics"));
const InvoiceReports = lazy(() => import("../InvoiceReports/InvoiceReports"));
const MainContainer = () => {

  return (
    <>
      <Routes>
        <Route
          path="/Analytics"
          element={<Suspense fallback={<LoadingSpinner />}>
          <Analytics />
        </Suspense>}
        ></Route>
        <Route
          path="/InvoiceReports"
          element={<Suspense fallback={<LoadingSpinner />}>
          <InvoiceReports />
        </Suspense>}
        ></Route>
      </Routes>
    </>
  );
};

export default MainContainer;
