import React, { Fragment } from "react";

import subHeader from "../_reusables/subheader/subHeader";
import navLinks from "./pageNav";

const HomeHeader = () => {
  const renderSubheading = (title) => {
    return subHeader(title);
  };

  const title = "Welcome to the Brisbane Tool Library";

  return (
    <Fragment>
      <div>{renderSubheading({ title, navLinks })}</div>
    </Fragment>
  );
};
export default HomeHeader;
