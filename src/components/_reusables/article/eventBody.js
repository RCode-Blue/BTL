import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import EventDescription from "./eventDescription";
import EventDetails from "./eventDetails";

// import "../../../styles/_reusables/eventBody.scss";
import "../../../styles/allStyles.scss";

// import HeaderLayout from "../../../layouts/headerLayout";
// import FooterLayout from "../../../layouts/footerLayout";

const renderEventContents = (data) => {
  const image = data.eventImageBanner.image.gatsbyImageData;
  const desc = data.eventImageBanner.image.description;
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
