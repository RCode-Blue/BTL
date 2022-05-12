import { graphql, useStaticQuery } from "gatsby";

/**
 * @description Result of GraphQL query for sample tools images
 *
 * @typedef {object} OurToolsImage Sample tool images
 * @property {string} allFile.edges.node A tool image object
 * @property {string} allFile.edges.node.id
 * @property {string} allFile.edges.node.dir
 * @property {string} allFile.edges.node.sourceInstanceName The source instance of the images. This is defined in the Gatsby configuration file
 * @property {string} allFile.edges.node.name Name of the file, without extension
 * @property {object} allFile.edges.node.childImageSharp Image object
 * @property {gatsbyImageData} allFile.edges.node.childImageSharp.gatsbyImageData
 */
/**
 * @description Query for retrieving sample tool images
 *
 * @function fetchOurToolsImages
 * @returns {OurToolsImage}
 */
const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "ourTools" } }) {
      edges {
        node {
          id
          dir
          sourceInstanceName
          name
          childImageSharp {
            gatsbyImageData(
              height: 240
              width: 240
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`;

const fetchOurToolsImages = () => {
  const data = useStaticQuery(query);
  return data.allFile;
};

export default fetchOurToolsImages;
