import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
    imageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
    }
  }
`;

const FooterLogosData = () => {
  const data = useStaticQuery(query);

  return data.allContentfulLogo.nodes;
};

export default FooterLogosData;
