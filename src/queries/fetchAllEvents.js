import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulEvent(
      sort: { fields: eventStart, order: ASC }
      limit: 4
      filter: { eventStart: { gte: "$date" } }
    ) {
      nodes {
        eventDuration
        eventStart(formatString: "YYYY-MM-DD hh:mm")
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

const allEvents = () => {
  const data = useStaticQuery(query);
  return data;
};

export default allEvents;
