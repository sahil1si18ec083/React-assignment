import React, { useState } from "react";
import { IconButton } from "@mui/material";
import "./AppHeader.css";

import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import { appLogo } from "../../utility/constants";

const AppHeader = () => {
  return (
    <>
      <header className="appHeader">
        <div className="header-left">
          <img
            src={appLogo}
            alt="App Logo"
            className="appheader-logo"
            style={{ height: "2rem", width: "2rem" }}
          />
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

        <div className="header-right">
          <IconButton
            aria-label="notification"
            className="notification-icon-btn"
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            className="styleUserProfile"
            disableFocusRipple
            disableRipple
            onClick={(event) => fnProfileClickHandler(event)}
          >
            {/* <CustomAvatar
              className={"wbAvatar wbMR8"}
              size={"small"}
              src={""}
              name={displayName}
              gutterBottom
            /> */}
          </IconButton>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
