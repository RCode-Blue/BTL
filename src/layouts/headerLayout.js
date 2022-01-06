import React from "react";

import BtlLogo from "../components/header/btlLogo";
import TopNav from "../components/header/topNav";
// import TopBar from "../components/header/topBar";

const HeaderLayout = () => {
  return (
    <div className="header">
      <BtlLogo />
      <TopNav />
    </div>
  );
};

export default HeaderLayout;
