import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import TextBox from "./heroTextBox";

const ImageUnderlay = (data) => {
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
        className="hero-image"
      />

      <TextBox
        heroText={heroText}
        btnString={btnString}
        btnUrl={btnUrl}
        className="hero-textbox"
      />
    </div>
  );
};

export default ImageUnderlay;
