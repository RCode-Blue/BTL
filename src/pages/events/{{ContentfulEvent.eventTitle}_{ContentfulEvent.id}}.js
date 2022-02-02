import React from "react";
import { graphql } from "gatsby";

import TopBar from "../../components/header/topbar";
import { EventHeader } from "../../components/_reusables/article/articleHeader";
import EventBody from "../../components/_reusables/article/eventBody";

const Event = (props) => {
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
    }
  }
`;

export default Event;
