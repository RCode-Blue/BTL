/**
 * @description Component for displaying top menu and navigation
 *
 * @namespace TopBar
 * @memberof App.components
 */
import React from "react";

import BtlLogo from "./btlLogo";
import TopNav from "./topNav";

const TopBar = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header__bar">
          <BtlLogo />
          <TopNav />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
