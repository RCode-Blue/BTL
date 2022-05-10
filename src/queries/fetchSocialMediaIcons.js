import { graphql, useStaticQuery } from "gatsby";
const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "socialMediaIcons" } }) {
      edges {
        node {
          id
          dir
          sourceInstanceName
          name
          childImageSharp {
            gatsbyImageData(height: 20, width: 20, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;

const SocialMediaIconsData = () => {
  const data = useStaticQuery(query);
  return data.allFile;
};

export default SocialMediaIconsData;
