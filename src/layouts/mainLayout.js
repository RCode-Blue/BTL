import React from "react";
import { Link } from "gatsby";

import HeaderLayout from "../layouts/headerLayout";
// import FooterLayout from "../layouts/footerLayout";

const MainLayout = ({ children }) => {
  // const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <HeaderLayout />
      {children}
    </div>
  );
};

export default MainLayout;
