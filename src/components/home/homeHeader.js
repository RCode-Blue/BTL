import React from "react";

import subHeader from "../_reusables/subheader/subHeader";
import navLinks from "./pageNav";

const HomeHeader = () => {
  const renderSubheading = (title) => {
    return subHeader(title);
  };

  const title = "Welcome to the Brisbane Tool Library";

  return (
    <div>
      <div>{renderSubheading({ title, navLinks })}</div>
    </div>
  );
};
export default HomeHeader;
