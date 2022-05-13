/**
 * @description Column layout for 'How it Works' section
 *
 * @namespace HowItWorksColumns
 * @memberof App.components.HomeMain.HomeContents.HowItWorks
 */
import React from "react";

import fetchHowItWorksIcons from "../../queries/fetchHowItWorksIcons";
import {
  TextCol4,
  IconCol4,
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
          <TextCol4 txt={sampleTxt} />
        </div>
        <div>
          <IconCol4 iconData={iconsData.nodes[0]} />
        </div>
        <div>
          <IconCol4 iconData={iconsData.nodes[1]} />
        </div>
        <div>
          <IconCol4 iconData={iconsData.nodes[2]} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksColumns;
