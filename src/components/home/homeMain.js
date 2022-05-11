import React, { Fragment } from "react";

import HomeHeader from "./homeHeader";
import HomeContents from "./homeContents";

/**
 * @description Component for the main landing page
 *
 * @namespace HomeMain
 * @memberof App.components
 * @component
 */
const HomeMain = () => {
  return (
    <Fragment>
      <HomeHeader />
      <HomeContents />
    </Fragment>
  );
};

export default HomeMain;
