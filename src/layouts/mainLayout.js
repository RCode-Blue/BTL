import React from "react";

import HeaderLayout from "../layouts/headerLayout";
import FooterLayout from "../layouts/footerLayout";

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
