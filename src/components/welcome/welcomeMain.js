import React, { Fragment } from "react";

import fetchWelcomeBanner from "../../queries/fetchWelcomeBanner";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import subHeader from "../_reusables/subheader/subHeader";

import Login from "./login";
import Signup from "./signup";

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

const WelcomeMain = () => {
  const welcomeBanner = fetchWelcomeBanner().edges[0].node;
  const title = "Welcome!";
  const bannerImage = getImage(welcomeBanner.childImageSharp.gatsbyImageData);

  return (
    <Fragment>
      {renderSubheading({ title })}
      {renderBanner(bannerImage, welcomeBanner.name)}
      <section
        className="
        section-content-wrapper 
        section-content-wrapper__light  
        welcome-forms-section"
      >
        <Login />
        <Signup />
      </section>
    </Fragment>
  );
};

export default WelcomeMain;
