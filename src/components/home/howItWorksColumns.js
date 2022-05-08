import React from "react";

import fetchHowItWorksIcons from "../../queries/fetchHowItWorksIcons";
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
    <div className="section-content-wrapper section-content-wrapper__light">
      <div className="section-cols-4">
        <div>
          <TextCol txt={sampleTxt} />
        </div>
        <div>
          <IconColHome iconData={iconsData.nodes[0]} />
        </div>
        <div>
          <IconColHome iconData={iconsData.nodes[1]} />
        </div>
        <div>
          <IconColHome iconData={iconsData.nodes[2]} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksColumns;
