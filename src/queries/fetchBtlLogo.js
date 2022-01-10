import { graphql, useStaticQuery } from "gatsby";

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

const BtlLogoData = () => {
  const data = useStaticQuery(query);
  return data;
};

export default BtlLogoData;
