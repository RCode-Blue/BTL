import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// import "../../../styles/_reusables/eventBox.scss";
import "../../../styles/allStyles.scss";

const EventBox = (data) => {
  // console.log(data);
  // Home > Events - Event box - Image underlay
  const renderEventBoxSubImg = (data) => {
    // console.log(data);
    const image = data.node.eventImage.image.gatsbyImageData;
    const desc = data.node.eventImage.image.description;
    // const urlString = "/events/" + data.node.slug + "_" + data.node.id;

    // console.log(urlString);

    return (
      <div className="eventbox__image">
        <GatsbyImage className="" image={image} alt={desc} />
      </div>
    );
  };

  // Home > Events - Event box - Text overlay
  const renderEventBoxSubTxt = (data) => {
    const node = data.node;
    // console.log(node);
    const { eventTitle, eventStart, slug, id } = data.node;
    const urlString = "/events/" + slug + "_" + id + `}`;
    return (
      <div className="eventbox__textsection">
        <div className="eventbox__textsection__title">{eventTitle}</div>
        <div className="eventbox__textsection__date">{eventStart}</div>
        <button className="eventbox__textsection__button">
          <Link className="eventbox__textsection__button__link" to={urlString}>
            Click for details
          </Link>
        </button>
      </div>
    );
  };

  const node = data.node;
  return (
    <div className="eventbox">
      {renderEventBoxSubImg({ node })}
      {renderEventBoxSubTxt({ node })}
    </div>
  );
};

export default EventBox;
