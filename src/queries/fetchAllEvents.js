/**
 * @description Result of GraphQL query for all future events
 *
 * @typedef {object} AllEvents Array of events
 * @property {string} eventDuration Duration of event
 * @property {datetime} eventStart Event start time
 * @property {string} eventTitle Title of the event
 * @property {string} id Internal id for the event
 * @property {object} eventLocation Location of event
 * @property {string} eventLocation.id Internal id of the location
 * @property {object} eventImage Image associated with the event
 * @property {string} eventImage.id ID of the event
 * @property {object} eventImage.image Image object
 * @property {object} eventImage.image.gatsbyImageData Image object to be used by Gatsby
 * @property {string} eventImage.image.title Title for the event image
 * @property {string} eventImage.image.description Description of event image
 * @property {string} eventImage.title Title of event image
 * @property {string} slug Event slug
 */

import { graphql, useStaticQuery } from "gatsby";

/**
 * @description GraphQL query to retrieve all events
 *
 * @function fetchAllEvents
 * @returns {AllEvents}
 */

const query = graphql`
  {
    allContentfulEvent(
      sort: { fields: eventStart, order: ASC }
      limit: 4
      filter: { eventStart: { gte: "$date" } }
    ) {
      nodes {
        eventDuration
        eventStart
        eventTitle
        id
        eventLocation {
          ... on ContentfulOnlineEvent {
            id
          }
          ... on ContentfulLocations {
            id
            name
          }
        }
        eventImage {
          id

          image {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              resizingBehavior: SCALE
              cropFocus: CENTER
            )
            title
            description
          }
          title
        }
        slug
      }
    }
  }
`;

const fetchAllEvents = () => {
  const data = useStaticQuery(query);
  return data;
};

export default fetchAllEvents;
