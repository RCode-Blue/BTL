import React from "react";

import FetchHeroImage from "../../queries/fetchHeroImage";
import HeroImage from "./heroImage";

const HomeContents = () => {
  const data = FetchHeroImage();
  const imgData = data.allContentfulBannerImage.nodes[0];

  return (
    <div>
      <HeroImage data={imgData} />
    </div>
  );
};

export default HomeContents;
