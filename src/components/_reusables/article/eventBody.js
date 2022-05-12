/**
 * @description Reusable component for Event body
 *
 * @namespace Reusable_EventBody
 * @memberof App.components
 */
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import EventDescription from "./eventDescription";
import EventDetails from "./eventDetails";

/**
 * @description Renders event details
 *
 * @function renderEventContents
 * @inner
 * @memberof App.components.Reusable_EventBody
 *
 * @param {AllEvents} data
 * @returns {component} Event details component
 */
const renderEventContents = (data) => {
  const image = data.eventImage.image.gatsbyImageData;
  const desc = data.eventImage.image.description;
  const title = data.eventTitle;

  return (
    <div className="eventpage-article">
      <GatsbyImage
        className="eventpage-article__image"
        image={image}
        alt={desc}
      />
      <div className="eventpage-article__title">{title}</div>
      <EventDetails data={data} />
      <EventDescription data={data.eventDescription} />
    </div>
  );
};

const EventBody = (data) => {
  return (
    <div className="eventpage-wrapper">{renderEventContents(data.data)}</div>
  );
};

export default EventBody;
