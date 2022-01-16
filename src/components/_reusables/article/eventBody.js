import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import EventDescription from "./eventDescription";
import EventDetails from "./eventDetails";

// import "../../../styles/_reusables/eventBody.scss";
import "../../../styles/allStyles.scss";

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
      <GatsbyImage className="event-image" image={image} alt={desc} />
      <div className="event-title">{title}</div>
      <EventDetails data={data} />
      <EventDescription data={data.eventDescription} />
    </div>
  );
};

const EventBody = (data) => {
  return <div className="">{renderEventContents(data.data)}</div>;
};

export default EventBody;
