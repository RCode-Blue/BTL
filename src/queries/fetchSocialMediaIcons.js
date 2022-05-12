import { graphql, useStaticQuery } from "gatsby";

/**
 * @description Result of GraphQL query for social media icons
 * @typedef {object} SocialMediaIcon
 * @property {string} id Icon id
 * @property {string} dir Location of file
 * @property {string} sourceInstanceName The source instance of the images. This is defined in the Gatsby configuration file
 * @property {string} name Name of file, without extension
 * @property {object} childImageSharp Image object
 * @property {gatsbyImageData} childImageSharp.gatsbyImageData
 */
/**
 * @description Query for retrieving social media icons
 *
 * @function fetchSocialMediaIcons
 * @returns {SocialMediaIcon}
 */
const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "socialMediaIcons" } }) {
      edges {
        node {
          id
          dir
          sourceInstanceName
          name
          childImageSharp {
            gatsbyImageData(height: 20, width: 20, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;

const fetchSocialMediaIcons = () => {
  const data = useStaticQuery(query);
  return data.allFile;
};

export default fetchSocialMediaIcons;
