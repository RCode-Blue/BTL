/**
 * @description Header section for the homepage component
 *
 * @namespace HomeHeader
 * @memberof App.components.HomeMain
 */
import React, { Fragment } from "react";
import navLinks from "./pageNav";
import subHeader from "../_reusables/subheader/subHeader";

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
