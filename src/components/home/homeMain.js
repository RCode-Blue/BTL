/**
 * @description Component for the main landing page
 *
 * @namespace Home
 * @memberof App.components
 * @component
 */
import React, { Fragment } from "react";
import HomeContents from "./homeContents";
import HomeHeader from "./homeHeader";

const HomeMain = () => {
  return (
    <Fragment>
      <HomeHeader />
      <HomeContents />
    </Fragment>
  );
};

export default HomeMain;
