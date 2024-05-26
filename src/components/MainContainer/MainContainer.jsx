import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../CustomComponents/LoadingSpinner";

// Lazy loading the components
const Analytics = lazy(() => import("../Analytics/Analytics"));
const InvoiceReports = lazy(() => import("../InvoiceReports/InvoiceReports"));

const MainContainer = () => {
  return (
    <>
      {/* React Router Routes for different paths */}
      <Routes>
        {/* Route for Analytics component */}
        <Route
          path="/Analytics"
          element={ // Render Analytics component with suspense fallback
            <Suspense fallback={<LoadingSpinner />}>
              <Analytics />
            </Suspense>
          }
        ></Route>

        {/* Route for InvoiceReports component */}
        <Route
          path="/InvoiceReports"
          element={ // Render InvoiceReports component with suspense fallback
            <Suspense fallback={<LoadingSpinner />}>
              <InvoiceReports />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default MainContainer;
