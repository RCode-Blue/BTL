import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import dayjs from "dayjs";

const timezone = require("dayjs/plugin/timezone");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const advancedFormat = require("dayjs/plugin/advancedFormat");

dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs().format("Q Do k kk X x");

const EventBox = (data) => {
  const renderEventBoxSubImg = (data) => {
    const image = data.node.eventImage.image.gatsbyImageData;
    const desc = data.node.eventImage.image.description;
    return (
      <div className="eventbox__image">
        <GatsbyImage className="eventimage" image={image} alt={desc} />
      </div>
    );
  };

  // Home > Events - Event box - Text overlay
  const renderEventBoxSubTxt = (data) => {
    const node = data.node;

    const startTime = node.eventStart;

    const eventDayTime = dayjs(startTime).format("ddd DD MMM YYYY hh:mm A");
    const eventTimeZone = dayjs(startTime).format("zzz");
    let testStartTime = dayjs(startTime);

    const { eventTitle, eventStart, slug, id } = data.node;
    const urlString = "/events/" + slug + "_" + id + `}`;
    return (
      <div className="eventbox__textsection">
        <div className="eventbox__textsection__title">{eventTitle}</div>
        <div className="eventbox__textsection__content">
          <div className="eventbox__textsection__date">{eventDayTime}</div>
          <div className="eventbox__textsection__date">{eventTimeZone}</div>
          <button className="eventbox__textsection__button">
            <Link
              className="eventbox__textsection__button__link"
              to={urlString}
            >
              Details
            </Link>
          </button>
        </div>
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
