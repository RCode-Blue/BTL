import React from "react";

import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";
import HowItWorksColumns from "./howItWorksColumns";

/**
 * @description 'How it Works' component in homepage
 *
 * @namespace HowItWorks
 * @memberof App.components.HomeMain.HomeContents
 */
const HowItWorks = () => {
  const headerText = "How it Works";

  return (
    <div id="howitworks">
      <SectionHeaderLight text={headerText} />
      <HowItWorksColumns />
    </div>
  );
};

export default HowItWorks;
