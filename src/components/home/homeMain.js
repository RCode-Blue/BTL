import React, { Fragment } from "react";

import HomeHeader from "./homeHeader";
import HomeContents from "./homeContents";

const HomeMain = () => {
  return (
    <Fragment>
      <HomeHeader />
      <HomeContents />
    </Fragment>
  );
};

export default HomeMain;
