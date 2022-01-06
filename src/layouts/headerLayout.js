import React from "react";

import BtlLogo from "../components/header/btlLogo";
import TopNav from "../components/header/topNav";
// import TopBar from "../components/header/topBar";

import "../styles/headerLayout.scss";

const HeaderLayout = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__content">
          <BtlLogo />
          <TopNav />
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
