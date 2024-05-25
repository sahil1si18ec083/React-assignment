import React, { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import SideNav from "./components/SideNav/SideNav";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppContext from "./AppContext.js";
import InvoiceReportsJson from "../src/utility/invoiceReports.json";
import { useNavigate } from "react-router-dom";
function App() {
  const [currentModule, setCurrentModule] = useState("Analytics");
  const [listPage, setListPage] = useState(0);

  const [pageno, setpageno] = useState(0);
  const navigate= useNavigate()
  useEffect(()=>{
    navigate(`/${currentModule}`)

  },[])

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
          <SideNav currentModule={currentModule} setCurrentModule={setCurrentModule} />
          <div className="mainContent">
            <MainContainer />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
