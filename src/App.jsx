import React, { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import SideNav from "./components/SideNav/SideNav";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppContext from "./AppContext.js";
import InvoiceReportsJson from "../src/utility/invoiceReports.json";
function App() {
  const [currentModule, setCurrentModule] = useState("InvoiceReports");
  const [listPage, setListPage] = useState(0);

  const [pageno, setpageno] = useState(0);

  return (
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
        <AppHeader />

        <div className="appContent">
          <SideNav />
          <div className="mainContent">
            <MainContainer />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
