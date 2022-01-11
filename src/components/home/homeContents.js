import React from "react";

import FetchHeroImage from "../../queries/fetchHeroImage";
import HeroImage from "./heroImage";
import HowItWorks from "./howItWorks";
import OurTools from "./ourTools";
import Events from "./events";

const HomeContents = () => {
  const data = FetchHeroImage();
  const imgData = data.allContentfulBannerImage.nodes[0];

  return (
    <div>
      <HeroImage data={imgData} />
      <HowItWorks />
      <OurTools />
      <Events />
    </div>
  );
};

export default HomeContents;
