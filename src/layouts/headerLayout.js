import React from "react";

import BtlLogo from "../components/header/btlLogo";
import TopNav from "../components/header/topNav";

// import "../styles/headerLayout.scss";
// import "../styles/allStyles.scss";

const HeaderLayout = () => {
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

export default HeaderLayout;
