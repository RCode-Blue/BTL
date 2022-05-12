import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/**
 * @description Reusable layout component for a text portion of a 4-column sections <br>
 * Used in Home > How it Works > Text segment
 *
 * @namespace Reusable_TextCol
 * @memberof App.components
 *
 * @requires gatsby-plugin-image/GatsbyImage
 * @requires gatsby-plugin-image/getImage
 * @see {@link https://www.gatsbyjs.com/plugins/gatsby-plugin-image/}
 */
const TextCol = (text) => {
  const { txt } = text;
  return <div className="section-cols-4__text">{txt}</div>;
};

/**
 * @description Reusable layout component for a image portion of a 4-column sections <br>
 * Used in Home > How it Works > Icon segment
 *
 * @namespace Reusable_IconColHome
 * @memberof App.components
 */
const IconColHome = (ico) => {
  const { id, icon, label, title } = ico.iconData;
  const image = getImage(icon.gatsbyImageData);
  const desc = icon.description;

  return (
    <div className="section-cols-4__img">
      <GatsbyImage
        className="section-cols-4__img__icon"
        alt={desc}
        image={image}
      />
      <div className="section-cols-4__img__label">{label}</div>
    </div>
  );
};

export { TextCol, IconColHome };
