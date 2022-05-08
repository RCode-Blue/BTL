import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FetchBtlLogo from "../../queries/fetchBtlLogo";

const RenderBtlLogo = (data) => {
  const imgData = data.data.allContentfulLogo.edges[0].node.image;
  const image = getImage(imgData.gatsbyImageData);
  const alt = imgData.title;
  return (
    <div>
      <GatsbyImage className="btl-logo" image={image} alt={alt} />
    </div>
  );
};

const BtlLogo = () => {
  const data = FetchBtlLogo();
  return (
    <div className="btllogo-wrapper">
      <RenderBtlLogo data={data} />
    </div>
  );
};

export default BtlLogo;
