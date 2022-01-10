import { graphql, useStaticQuery } from "gatsby";

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

const FetchHowItWorksIcons = () => {
  const data = useStaticQuery(query);
  return data;
};

export default FetchHowItWorksIcons;
