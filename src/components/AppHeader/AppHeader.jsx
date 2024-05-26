import React from "react";
import { IconButton } from "@mui/material";
import "./AppHeader.css";  // Importing CSS for styling

import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";  // Importing Notification Icon from Material-UI icons
import { appLogo } from "../../utility/constants";  // Importing the app logo from constants

const AppHeader = () => {
  return (
    <>
      {/* Header container */}
      <header className="appHeader">
        {/* Left section of the header */}
        <div className="header-left">
          {/* App logo */}
          <img
            src={appLogo}
            alt="App Logo"
            className="appheader-logo"
            style={{ height: "2rem", width: "2rem" }}
          />
          {/* App title */}
          <label
            style={{
              fontSize: "1.15rem",
              marginLeft: "2.5rem",
            }}
          >
            <b style={{ color: "white", zIndex: "16" }}>
              Invoice Processing &nbsp;
            </b>
          </label>
        </div>

        {/* Right section of the header */}
        <div className="header-right">
          {/* Notification icon button */}
          <IconButton
            aria-label="notification"
            className="notification-icon-btn"
          >
            <NotificationsIcon />
          </IconButton>
          {/* User profile icon button */}
          <IconButton
            className="styleUserProfile"
            disableFocusRipple
            disableRipple
            
          >
       
          </IconButton>
        </div>
      </header>
    </>
  );
};



export default AppHeader;
