import React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

import fetchHowItWorksIcons from "../../queries/fetchHowItWorksIcons";
// import "../../styles/home/howItWorks.scss";
import "../../styles/allStyles.scss";
import {
  TextCol,
  IconColHome,
} from "../_reusables/contentSection/sectionColumns";

const sample = require("../_reusables/sampleData/sampleText");

const HowItWorksColumns = () => {
  const queryData = fetchHowItWorksIcons();
  const iconsData = queryData.allContentfulIcon;
  const sampleTxt = sample.lorem();

  return (
    <div className="home-howitworks-content-wrapper">
      <div className="home-howitworks-content">
        <div className="home-howitworks-content__col">
          <TextCol txt={sampleTxt} />
        </div>
        <div className="home-howitworks-content__col">
          <IconColHome iconData={iconsData.nodes[0]} />
        </div>
        <div className="home-howitworks-content__col">
          <IconColHome iconData={iconsData.nodes[1]} />
        </div>
        <div className="home-howitworks-content__col">
          <IconColHome iconData={iconsData.nodes[2]} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksColumns;
