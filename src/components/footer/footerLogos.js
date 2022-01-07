import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FetchFooterLogos from "../../queries/fetchLogos";

import "../../styles/footerLogos.scss";

const RenderLogos = (data) => {
  return (
    <div className="footerlogos">
      {data.data.map((node) => {
        const imgId = node.id;
        const image = getImage(node.image.gatsbyImageData);
        // console.log(node);
        return (
          <div key={imgId} className="logo">
            <GatsbyImage image={image} alt={node.image.title} />
          </div>
        );
      })}
    </div>
  );
};

const FooterLogos = () => {
  const data = FetchFooterLogos();
  return (
    <div>
      <RenderLogos data={data} />
    </div>
  );
};

export default FooterLogos;
