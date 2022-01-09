import { graphql, useStaticQuery } from "gatsby";

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

const HeroImageData = () => {
  const data = useStaticQuery(query);
  return data;
};

export default HeroImageData;
