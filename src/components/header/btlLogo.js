/**
 * @description Component for main logo
 *
 * @namespace BtlLogo
 * @memberof App.components.MainLayout.HeaderLayout
 */
import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FetchBtlLogo from "../../queries/fetchBtlLogo";

/**
 * @description Renders main organisation logo
 *
 * @function renderBtlLogo
 * @inner
 * @memberof App.components.MainLayout.HeaderLayout. BtlLogo
 *
 * @param {object} allContentfulLogo Logo query result
 * @param {object} allCOntentfulLogo.edges Array of logo objects
 * @param {object} allCOntentfulLogo.edges.node
 * @param {object} allCOntentfulLogo.edges.node.image The image to be displayed
 * @param {object} allCOntentfulLogo.edges.node.image.title Image title
 *
 * @example
 * renderBtlLogo(
 *  {
 *    allContentfulLogo: {
 *      edges: [
 *        {
 *          node: {
 *            id:"04c49dd8-1d74-5av5-bc58-cnbsic0622ee2",
 *            image: {
 *              gatsbyImageData: {...},
 *              title: "Some image"
 *            }
 *          }
 *        },
 *        {...}
 *      ]
 *    }
 *  }
 * )
 */
const renderBtlLogo = (data) => {
  const imgData = data.allContentfulLogo.edges[0].node.image;
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
  return <div className="btllogo-wrapper">{renderBtlLogo(data)}</div>;
};

export default BtlLogo;
