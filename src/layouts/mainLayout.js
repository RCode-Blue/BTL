import React from "react";

import HeaderLayout from "../layouts/headerLayout";
import FooterLayout from "../layouts/footerLayout";

/**
 * @description Overall layout component for the website
 *
 * @namespace MainLayout
 * @memberof App.components
 */
const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
