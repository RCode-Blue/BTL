import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Home > How it Works > Text column
const TextCol = (text) => {
  const { txt } = text;
  return <div className="section-cols-4__text">{txt}</div>;
};

// Home > How it Works > Icon column
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
