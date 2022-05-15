/**
 * @description Content section for the homepage component
 *
 * @namespace HomeContents
 * @memberof App.components.Home
 */
import React, { Fragment } from "react";

import FetchHeroImage from "../../queries/fetchHeroImage";
import HeroImage from "./heroImage";
import HowItWorks from "./howItWorks";
import OurTools from "./ourTools";
import Events from "./events";

const HomeContents = () => {
  const data = FetchHeroImage();
  const imgData = data.allContentfulBannerImage.nodes[0];

  return (
    <Fragment>
      <HeroImage data={imgData} />
      <HowItWorks />
      <OurTools />
      <Events />
    </Fragment>
  );
};

export default HomeContents;
