import { graphql, useStaticQuery } from "gatsby";

/**
 * @description Result of GraphQL query for icons in 'How it Works' section
 *
 * @typedef {object} HowItWorksIcon
 * @property {object} node An element in the resulting array
 * @property {string} node.id Image id
 * @property {object} node.icon The icon object
 * @property {string} node.icon.id Icon id
 * @property {object} node.icon.gatsbyImageData Icon image object
 * @property {string} node.icon.title Icon title
 * @property {string} node.icon.description Icon description
 * @property {string} node.label Image label
 * @property {string} node.title Image title
 *
 *
 */
/**
 * @description Query for retrieving icons for 'How it Works' section
 *
 * @function fetchHowItWorksIcons
 * @returns {HowItWorksIcon}
 */
const query = graphql`
  {
    allContentfulIcon(sort: { fields: sequence, order: ASC }) {
      nodes {
        id
        icon {
          contentful_id
          gatsbyImageData
          title
          description
        }
        label
        title
      }
    }
  }
`;

const fetchHowItWorksIcons = () => {
  const data = useStaticQuery(query);
  return data;
};

export default fetchHowItWorksIcons;
