import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import fetchAboutUsBannerImage from "../../queries/fetchAboutUsImage";
import AboutUsContent from "./aboutUsContent";
import Faq from "./faq";
import PrivacyPolicies from "./privacyPolicies";
import TermsOfUse from "./termsOfUse";
import subHeader from "../_reusables/subheader/subHeader";

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
  const bannerImage = getImage(aboutUsBanner.childImageSharp.gatsbyImageData);
  return (
    <article>
      {renderSubheading({ title })}
      {renderBanner(bannerImage, aboutUsBanner.name)}
      <section className="section-content-wrapper section-content-wrapper__light">
        <AboutUsContent noOfParagraphs={5} />
      </section>
      <section className="section-content-wrapper section-content-wrapper__dark">
        <Faq noOfParagraphs={5} />
      </section>
      <section className="section-content-wrapper section-content-wrapper__light">
        <PrivacyPolicies noOfParagraphs={2} />
      </section>
      <section className="section-content-wrapper section-content-wrapper__dark">
        <TermsOfUse noOfParagraphs={3} />
      </section>
    </article>
  );
};

export default AboutUs;
