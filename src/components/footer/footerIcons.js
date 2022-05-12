/**
 * @description Component for rendering social media icons
 *
 * @namespace FooterIcons
 * @memberof App.components.MainLayout.FooterLayout
 */
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FetchSocialMediaIcons from "../../queries/fetchSocialMediaIcons";

const iconsList = [
  {
    url: "https://www.instagram.com",
    imgSrc: "../../assets/icons/instagram.png",
    name: "instagram",
    imgAlt: "instagram",
  },
  {
    url: "https://www.facebook.com",
    imgSrc: "../../assets/icons/facebook.png",
    name: "facebook",
    imgAlt: "facebook",
  },
  {
    url: "https://www.twitter.com",
    imgSrc: "../../assets/icons/twitter.png",
    name: "twitter",
    imgAlt: "twitter",
  },
];

/**
 * @description Renders social media icons
 *
 * @function renderFooterIcons
 * @inner
 * @memberof App.components.MainLayout.FooterLayout.FooterIcons
 *
 * @param {object} icons Array of icon objects, returned from query
 * @param {object} icon An icon object
 * @param {object} icon.node.id The id of a query result node
 * @param {object} icon.node.childImageSharp.gatsbyImageData Icon image object
 * @returns {component} A component containing social media icons with links
 *
 * @example
 * renderFooterIcons (
 *  {
 *    node: {
 *      id: "360k00b1-e2g3-7ae5-a6ds-f6lf8525c9ee",
 *      name: "facebook",
 *      childImageSharp: {gatsbyImageData: {}}
 *    }
 *  }
 * )
 *
 */
const renderFooterIcons = (icons) => {
  return (
    <ul className="footericons-bar">
      {iconsList.map((item) => {
        let itemName = item.name;

        let foundIcon = icons.find((icon) => icon.node.name === itemName);
        const { id, childImageSharp } = foundIcon.node;
        const { url, imgAlt } = item;
        const image = getImage(childImageSharp.gatsbyImageData);
        return (
          <li key={id}>
            <a href={url}>
              <GatsbyImage image={image} alt={imgAlt} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const FooterIcons = () => {
  const socialMediaIcons = FetchSocialMediaIcons().edges;

  return (
    <div className="footericons-wrapper">
      <nav>{renderFooterIcons(socialMediaIcons)}</nav>
    </div>
  );
};

export default FooterIcons;
