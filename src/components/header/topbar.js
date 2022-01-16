import React from "react";

import BtlLogo from "./btlLogo";
import TopNav from "./topNav";

// import "../../styles/headerLayout.scss";
import "../../styles/allStyles.scss";

const TopBar = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__bar">
          <BtlLogo />
          <TopNav />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
