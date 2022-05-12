/**
 * @description Component for overall header of the website
 *
 * @namespace HeaderLayout
 * @memberof App.components.MainLayout
 */
import React from "react";
import BtlLogo from "../components/header/btlLogo";
import TopNav from "../components/header/topNav";

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
