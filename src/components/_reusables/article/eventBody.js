import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import EventDetails from "./eventDetails";

import "../../../styles/_reusables/eventBody.scss";

// import HeaderLayout from "../../../layouts/headerLayout";
// import FooterLayout from "../../../layouts/footerLayout";

const renderEventContents = (data) => {
  // console.log(data);
  // console.log(data.eventImageBanner.image.gatsbyImageData);

  const image = data.eventImageBanner.image.gatsbyImageData;
  const desc = data.eventImageBanner.image.description;
  const title = data.eventTitle;

  return (
    <div className="event-wrapper">
      <div className="event-image">
        <GatsbyImage className="event-image__img" image={image} alt={desc} />
      </div>

      <div className="event-title">{title}</div>
      <div className="event-details">Event Details</div>
      <EventDetails data={data.eventDescription} />

      <div className="event-desc">Event CONTENTS</div>
    </div>
  );
};

const EventBody = (data) => {
  // console.log(data.data);

  // const {
  //   id: eventId,
  //   eventTitle: title,
  //   onLineEvent: isOnline,
  //   inPersonEvent: isInPerson,
  //   seminar: isSeminar,
  //   workshop: isWorkshop,
  //   slug,
  //   updatedAt,
  //   eventStart,
  //   eventImage: image,
  //   eventImageBanner: bannerImage,
  //   eventDescription: description,
  //   eventDuration: duration,
  // } = data.data;

  return <div className="">{renderEventContents(data.data)}</div>;
};

export default EventBody;
