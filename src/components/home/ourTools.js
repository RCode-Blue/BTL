/**
 * @description 'Our Tools' section on homepage
 *
 * @namespace OurToolsSection
 * @memberof App.components.HomeMain.HomeContents
 */
import React from "react";

import OurToolsMockup from "./ourToolsMockup";
import { SectionHeaderDark } from "../_reusables/contentSection/sectionHeader";

const renderOurToolsText = () => {
  return (
    <p className="ourtools-content section-content section-content__dark">
      Here are some of our most popular tools
    </p>
  );
};

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
