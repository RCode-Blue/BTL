import { graphql, useStaticQuery } from "gatsby";

/**
 * @description Result of GraphQL query for active banner image
 *
 * @typedef {object} HeroImage Banner image
 * @property {boolean} active Indicator of active status of the image file
 * @property {string} contentful_id Internal contentful id
 * @property {object} image Image object
 * @property {object} image.file Image file object
 * @property {string} image.file.filename Image filename
 * @property {string} image.file.contentType Description of image format
 * @property {string} image.file.contentUrl Image url
 * @property {object} image.gatsbyImageData The image object
 * @property {string} image.description Description of image
 */

/**
 * @description Query for retrieving the hero image
 *
 * @function fetchHeroImage
 * @returns {HeroImage}
 */
const query = graphql`
  {
    allContentfulBannerImage(filter: { active: { eq: true } }) {
      nodes {
        active
        contentful_id
        id
        image {
          file {
            fileName
            contentType
            url
          }
          contentful_id
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            height: 600
            resizingBehavior: FILL
          )
          description
        }
      }
    }
  }
`;

const fetchHeroImage = () => {
  const data = useStaticQuery(query);
  return data;
};

export default fetchHeroImage;
