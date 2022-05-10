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
