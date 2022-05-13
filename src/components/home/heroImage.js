/**
 * @description Hero image component
 *
 * @namespace HeroImage
 * @memberof App.components.HomeMain.HomeContents
 */
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import HeroTextBox from "./heroTextBox";

const HeroImage = (data) => {
  const { gatsbyImageData, description } = data.data.image;

  const heroText =
    "Sharing resources and skills to enhance the resilience of communities";
  const btnString = "Become a member";
  const btnUrl = "/";

  return (
    <div className="hero-image-wrapper">
      <GatsbyImage
        layout="fullwidth"
        image={gatsbyImageData}
        alt={description}
      />

      <HeroTextBox
        heroText={heroText}
        btnString={btnString}
        btnUrl={btnUrl}
        className="hero-textbox"
      />
    </div>
  );
};

export default HeroImage;
