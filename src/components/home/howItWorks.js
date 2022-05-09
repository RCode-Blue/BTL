import React from "react";

import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";
import HowItWorksColumns from "./howItWorksColumns";

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
