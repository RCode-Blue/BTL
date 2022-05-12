/**
 * @description 'How it Works' component in homepage
 *
 * @namespace HowItWorks
 * @memberof App.components.HomeMain.HomeContents
 */
import React from "react";
import HowItWorksColumns from "./howItWorksColumns";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

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
