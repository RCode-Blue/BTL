import React from "react";

import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";
import HowItWorksColumns from "./howItWorksColumns";

const RenderColumns = (data) => {
  console.log(data);
  return <div></div>;
};

const HowItWorks = () => {
  const headerText = "How it Works";

  return (
    <div>
      <SectionHeaderLight text={headerText} />
      <HowItWorksColumns />
    </div>
  );
};

export default HowItWorks;
