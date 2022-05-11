import React from "react";

import { SectionHeaderDark } from "../_reusables/contentSection/sectionHeader";
import OurToolsMockup from "./ourToolsMockup";

const renderOurToolsText = () => {
  return (
    <p className="ourtools-content">Here are some of our most popular tools</p>
  );
};

/**
 * @description 'Our Tools' section on homepage
 *
 * @namespace OurTools
 * @memberof App.components.HomeMain.HomeContents
 */
const OurTools = () => {
  const headerText = "Our Tools";
  return (
    <div id="ourtools">
      <SectionHeaderDark text={headerText} />
      {renderOurToolsText()}
      <OurToolsMockup />
    </div>
  );
};

export default OurTools;
