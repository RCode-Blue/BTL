import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allFile(
      filter: { name: { eq: "aboutus" }, sourceInstanceName: { eq: "aboutUs" } }
    ) {
      edges {
        node {
          id
          dir
          sourceInstanceName
          name
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: TRACED_SVG
              height: 600
            )
          }
        }
      }
    }
  }
`;

const fetchAboutUsBannerImage = () => {
  const data = useStaticQuery(query);
  return data.allFile;
};

export default fetchAboutUsBannerImage;
