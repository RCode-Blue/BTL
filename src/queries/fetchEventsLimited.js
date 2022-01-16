import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulEvent(
      sort: { fields: eventStart, order: ASC }
      limit: 6
      filter: { eventStart: { gte: "$date" } }
    ) {
      nodes {
        eventDuration
        eventStart(formatString: "MMMM Do, YYYY")
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

const LatestEvents = () => {
  const data = useStaticQuery(query);
  return data;
};

export default LatestEvents;
