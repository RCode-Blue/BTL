import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "../../../styles/_reusables/eventBody.sass";

// import HeaderLayout from "../../../layouts/headerLayout";
// import FooterLayout from "../../../layouts/footerLayout";

const renderEventContents = (data) => {
  console.log(data);
  // console.log(data.eventImageBanner.image.gatsbyImageData);

  const image = data.eventImageBanner.image.gatsbyImageData;
  const desc = data.eventImageBanner.image.description;

  return (
    <div className="article-wrapper">
      <div className="article-image">
        <GatsbyImage image={image} alt={desc} />
      </div>

      <div>ARTICLE TITLE</div>
      <div>ARTICLE CONTENTS</div>
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
