import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulEvent(filter: { eventStart: { gte: "$date" } }, limit: 3) {
      nodes {
        eventTitle
        eventStart(formatString: "dd, DD MM YYYY h:m a")
        slug
        id
        eventLocation {
          ... on ContentfulLocations {
            id
            name
            addressLine1
            addressLine2
            gettingThere
            mapLocation
            suburb
            postcode
            state
          }
          ... on ContentfulOnlineEvent {
            id
            meetingLink
            meetingLinkTitle
          }
        }
        eventImage {
          image {
            gatsbyImageData(placeholder: BLURRED)
            file {
              url
              fileName
              contentType
            }
            description
          }
        }
        eventDescription {
          raw
        }
        eventDuration
      }
    }
  }
`;

const FetchFutureEvents = () => {
  const data = useStaticQuery(query);
  return data;
};

export default FetchFutureEvents;
