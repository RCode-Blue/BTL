import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import fetchAboutUsBannerImage from "../../queries/fetchAboutUsImage";
import AboutUsContent from "./aboutUsContent";
import subHeader from "../_reusables/subheader/subHeader";
import { lorem2 } from "../_reusables/sampleData/sampleText";

const renderBanner = (banner, imgAlt) => {
  return (
    <div>
      <GatsbyImage
        className="section-banner"
        layout="fullwidth"
        image={banner}
        alt={imgAlt}
      />
    </div>
  );
};

const renderSubheading = (title) => {
  return subHeader(title);
};

const AboutUs = () => {
  const aboutUsBanner = fetchAboutUsBannerImage().edges[0].node;
  const title = "About Us";
  const text = lorem2();
  const bannerImage = getImage(aboutUsBanner.childImageSharp.gatsbyImageData);
  return (
    <div>
      {renderSubheading({ title })}
      {renderBanner(bannerImage, aboutUsBanner.name)}
      <div className="section-content-wrapper section-content-wrapper__light">
        <AboutUsContent text={text} />
      </div>
    </div>
  );
};

export default AboutUs;
