import { graphql, useStaticQuery } from "gatsby";

/**
 * @description Image object returned from a Gatsby GraphQL query
 *
 * @typedef {object} gatsbyImageData Gatsby GraphQL query image object
 * @property {object} images Image objects
 * @property {object} images.sources Array of image objects
 * @property {string} images.sources.srcSet List of retrieved image urls
 * @property {string} images.sources.sizes Available image sizes
 * @property {string} images.sources.type Image format
 * @property {string} images.layout Image layout
 * @property {string} images.backgroundColor Background colour
 * @property {integer} images.width Image width
 * @property {integer} images.height Image height
 */

/**
 * @description File data returned from Gatsby GraphQL query
 * @typedef {object} gatsbyQueryFileData Gatsby GraphQL query file object
 * @property {string} url File URL
 * @property {string} filename Filename
 */

/**
 * @description Image data returned from Gatsby GraphQL query
 * @typedef {object} gatsbyQueryImageData Gatsby GraphQL query image object
 * @property {gatsbyImageData} gatsbyImageData
 * @property {gatsbyQueryFileData} file
 */

/**
 * @description Result of GraphQL query for main government agency logos
 *
 * @typedef {object} FooterLogo
 * @property {string} id
 * @property {string} contentful_id
 * @property {string} slug
 * @property {gatsbyQueryImageData} image
 *
 */

/**
 * @description Query for retrieving footer logos
 *
 * @function fetchFooterLogos
 * @returns {FooterLogo}
 *
 */
const query = graphql`
  {
    allContentfulLogo(filter: { active: { eq: true } }) {
      nodes {
        id
        contentful_id
        slug
        title
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
          file {
            url
            fileName
          }
          id
          title
        }
      }
    }
  }
`;

const fetchFooterLogos = () => {
  const data = useStaticQuery(query);

  return data.allContentfulLogo.nodes;
};

export default fetchFooterLogos;
