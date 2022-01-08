import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulBannerImage(filter: { active: { eq: true } }) {
      edges {
        node {
          id
          image {
            gatsbyImageData
            description
            title
          }
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
