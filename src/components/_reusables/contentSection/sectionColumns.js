import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "../../../styles/_reusables/sectionColumns.scss";

const TextCol = (text) => {
  const { txt } = text;
  return <div className="iconcol__text">{txt}</div>;
};

const IconColHome = (ico) => {
  const { id, icon, label, title } = ico.iconData;
  const image = getImage(icon.gatsbyImageData);
  const desc = icon.description;

  return (
    <div className="iconcol__img">
      <GatsbyImage className="iconcol__img__ico" alt={desc} image={image} />
      <div className="iconcol__img__label">{label}</div>
    </div>
  );
};

export { TextCol, IconColHome };
