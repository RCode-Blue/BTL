/**
 * @description Component for rendering icons to supporting government agencies
 *
 * @namespace FooterLogos
 * @memberof App.components.MainLayout.FooterLayout
 */
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import FetchFooterLogos from "../../queries/fetchLogos";

/**
 * @description Renders logos of government agencies
 *
 * @function renderLogos
 * @inner
 * @memberof App.components.MainLayout.FooterLayout.FooterLogos
 *
 * @param {object} logos Array of logo objects
 * @param {object} logo An element of the logos array
 * @param {string} logo.id Logo id
 * @param {object} logo.image The image to be displayed
 * @param {object} logo.image.title Title of image
 * @param {object} logo.image.gatsbyImageData Object used by Gatsby to retrieve image
 *
 * @example
 * renderLogos(
 *  [
 *    {
 *      id:"b20jc98d-e8v1-56q0-bb1f-6b5d76f229f1"
 *      title:"Queensland Gov Crest",
 *      image: {
 *        gatsbyImageData: {...},
 *        title: "Logo - QLD gov crest"
 *      }
 *    },
 *    {...}
 *  ]
 * )
 */
const renderLogos = (data) => {
  return (
    <div className="footerlogos">
      {data.map((node) => {
        const imgId = node.id;
        const image = getImage(node.image.gatsbyImageData);
        return (
          <div key={imgId} className="footerlogos__govcrest">
            <GatsbyImage image={image} alt={node.image.title} />
          </div>
        );
      })}
    </div>
  );
};

const FooterLogos = () => {
  const data = FetchFooterLogos();
  return <div>{renderLogos(data)}</div>;
};

export default FooterLogos;
