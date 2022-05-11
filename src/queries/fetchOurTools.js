import { graphql, useStaticQuery } from "gatsby";
const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "ourTools" } }) {
      edges {
        node {
          id
          dir
          sourceInstanceName
          name
          childImageSharp {
            gatsbyImageData(
              height: 240
              width: 240
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`;

const OurToolsData = () => {
  const data = useStaticQuery(query);
  return data.allFile;
};

export default OurToolsData;
