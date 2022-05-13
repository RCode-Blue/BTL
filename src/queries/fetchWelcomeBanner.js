import { graphql, useStaticQuery } from "gatsby";

/**
 * @description Query for retrieving the welcome banner image
 *
 * @function fetchWelcomeBanner
 */
const query = graphql`
  {
    allFile(
      filter: { name: { eq: "welcome" }, sourceInstanceName: { eq: "welcome" } }
    ) {
      edges {
        node {
          id
          dir
          sourceInstanceName
          name
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const fetchWelcomeBanner = () => {
  const data = useStaticQuery(query).allFile;
  return data;
};

export default fetchWelcomeBanner;
