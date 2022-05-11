import React, { Fragment } from "react";

import { SectionHeaderDark } from "../_reusables/contentSection/sectionHeader";
import OurToolsMockup from "./ourToolsMockup";

const renderOurToolsText = () => {
  return (
    <p className="outrools-content">Here are some of our most popular tools</p>
  );
};

const OurTools = () => {
  const headerText = "Our Tools";
  return (
    <Fragment>
      <SectionHeaderDark text={headerText} />
      {renderOurToolsText()}
      <OurToolsMockup />
    </Fragment>
  );
};

export default OurTools;
