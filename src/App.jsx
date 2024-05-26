import React, { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import SideNav from "./components/SideNav/SideNav";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppContext from "./AppContext.js";
import InvoiceReportsJson from "../src/utility/invoiceReports.json";
import { useNavigate } from "react-router-dom";

function App() {
  // State variables for current module, list page, and page number
  const [currentModule, setCurrentModule] = useState("Analytics");
  const [listPage, setListPage] = useState(0);
  const [pageno, setpageno] = useState(0);

  // React Router's navigate hook for programmatic navigation
  const navigate = useNavigate();

  // Effect to navigate to the current module's route when the component mounts
  useEffect(() => {
    navigate(`/${currentModule}`);
  }, [currentModule, navigate]);

  return (
    // Providing application-wide context using AppContext.Provider
    <AppContext.Provider
      value={{
        currentModule,
        setCurrentModule,
        listPage,
        setListPage,
        pageno,
        setpageno,
      }}
    >
      <div className="App">
        {/* AppHeader component */}
        <AppHeader />

        <div className="appContent">
          {/* SideNav component */}
          <SideNav
            currentModule={currentModule}
            setCurrentModule={setCurrentModule}
          />
          <div className="mainContent">
            {/* MainContainer component */}
            <MainContainer />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
