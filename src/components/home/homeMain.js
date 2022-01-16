import React from "react";

import HomeHeader from "./homeHeader";
import HomeContents from "./homeContents";
// import moment from "moment";

const HomeMain = () => {
  // const today = new Date();
  // const currentDate = moment();
  // console.log(today);
  // console.log(currentDate);

  return (
    <div>
      <HomeHeader />
      <HomeContents />
    </div>
  );
};

export default HomeMain;
