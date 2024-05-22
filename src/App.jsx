import React, { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import SideNav from "./components/SideNav/SideNav";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppContext from "./AppContext.js";

function App() {
  const [currentModule, setCurrentModule] = useState("Analytics");

  return (
    <AppContext.Provider value={{ currentModule, setCurrentModule }}>
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
