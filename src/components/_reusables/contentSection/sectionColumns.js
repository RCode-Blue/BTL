import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "../../../styles/_reusables/sectionColumns.scss";

// Home > How it Works > Text column
const TextCol = (text) => {
  const { txt } = text;
  return <div className="iconcol__text">{txt}</div>;
};

// Home > How it Works > Icon column
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

// Home > Events - Event box
const EventBox = (data) => {
  // Home > Events - Event box - Image underlay
  const renderEventBoxSubImg = (data) => {
    const image = data.node.eventImage.image.gatsbyImageData;
    const desc = data.node.eventImage.image.description;

    return (
      <div className="evtbox__img">
        <GatsbyImage className="" image={image} alt={desc} />
      </div>
    );
  };

  // Home > Events - Event box - Text overlay
  const renderEventBoxSubTxt = (data) => {
    const node = data.node;
    const { eventTitle, eventStart, id } = data.node;
    return (
      <div className="evtbox__txt">
        <div className="evtbox__txt__title">{eventTitle}</div>
        <div className="evtbox__txt__date">{eventStart}</div>
        <div className="evtbox__txt__btn">
          <div className="evtbox__txt__btn__txt">BUTTON</div>
        </div>
      </div>
    );
  };

  const node = data.node;
  return (
    <div className="evtbox">
      {renderEventBoxSubImg({ node })}
      {renderEventBoxSubTxt({ node })}
    </div>
  );
};

export { TextCol, IconColHome, EventBox };
