import React from "react";
// import { Link } from "gatsby";

import HeaderLayout from "../layouts/headerLayout";
import FooterLayout from "../layouts/footerLayout";
// import

const MainLayout = ({ children }) => {
  // const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
