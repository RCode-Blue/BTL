import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FetchHeroImage from "../../queries/fetchHeroImage";

const RenderHeroImage = (data) => {
  const imgData = data.data.allContentfulBannerImage.edges[0].node.image;
  // console.log(imgData);
  const image = getImage(imgData.gatsbyImageData);
  const alt = imgData.description;

  return (
    <div>
      <GatsbyImage className="hero-image" image={image} alt={alt} />
    </div>
  );
};

const HomeContents = () => {
  const data = FetchHeroImage();
  // console.log(data.allContentfulBannerImage.edges[0].node);
  const imgData = data.allContentfulBannerImage.edges[0].node.image;
  // console.log(imgData);

  return (
    <div>
      <RenderHeroImage data={data} />
    </div>
  );
};

export default HomeContents;
