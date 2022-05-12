import { graphql, useStaticQuery } from "gatsby";

/**
 * @description Result of GraphQL query for main organisation logo
 *
 * @typedef {object} BtlLogo Main logo
 * @property {string} id Object id
 * @property {string} slug Image slug
 * @property {string} contentful_id Internal Contentful ID
 * @property {object} image The image object data
 * @property {string} image.title Image title
 * @property {object} image.gatsbyImageData The image object
 * @property {string} image.title Image title
 */

/**
 * @description Query for retrieving main logo
 *
 * @function fetchBtlLogo
 * @returns {BtlLogo}
 */
const query = graphql`
  {
    allContentfulLogo(filter: { title: { regex: "/BTL Logo/" } }) {
      edges {
        node {
          id
          slug
          contentful_id
          image {
            id
            gatsbyImageData
            title
          }
        }
      }
    }
  }
`;

const fetchBtlLogo = () => {
  const data = useStaticQuery(query);
  return data;
};

export default fetchBtlLogo;
