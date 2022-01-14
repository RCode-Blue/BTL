import React from "react";
import { graphql } from "gatsby";

// import TopNav from "../../components/header/topNav";
// import BtlLogo from "../../components/header/btlLogo"
import TopBar from "../../components/header/topbar";
import { EventHeader } from "../../components/_reusables/article/articleHeader";
import EventBody from "../../components/_reusables/article/eventBody";

const Event = (props) => {
  // console.log(props.data);

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
  // } = props.data.contentfulEvent;

  // console.log(eventStart);

  return (
    <div>
      <TopBar />
      <EventHeader />
      <EventBody data={props.data.contentfulEvent} />
    </div>
  );
};

export const query = graphql`
  query getEvent($id: String, $slug: String) {
    contentfulEvent(id: { eq: $id }, slug: { eq: $slug }) {
      id
      eventTitle
      onlineEvent
      inPersonEvent
      seminar
      slug
      updatedAt
      workshop
      eventStart(formatString: "DD MM YYYY HH:MM")
      eventImage {
        image {
          gatsbyImageData(placeholder: BLURRED)
          description
          title
        }
      }
      eventDescription {
        raw
      }
      eventDuration
      eventImageBanner {
        image {
          gatsbyImageData(
            placeholder: TRACED_SVG
            resizingBehavior: SCALE
            cropFocus: CENTER
          )
          description
          title
        }
      }
    }
  }
`;

export default Event;
