import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FetchFooterLogos from "../../queries/fetchLogos";

const RenderLogos = (data) => {
  return (
    <div>
      {data.data.map((node) => {
        const imgId = node.id;
        const image = getImage(node.image.gatsbyImageData);
        console.log(node);
        return (
          <div key={imgId}>
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
