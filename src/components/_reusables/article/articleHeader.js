import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import "../../../styles/_reusables/articleHeader.scss";
import "../../../styles/allStyles.scss";

const EventHeader = () => {
  return (
    <div className="article-head-wrapper">
      <div className="article-head">
        <StaticImage
          width={15}
          height={15}
          src="../../../assets/icons/chevron-left.png"
          alt="left arrow"
          className="article-head__icon"
        ></StaticImage>
        <Link className="article-head__link" to="/events">
          back to Events
        </Link>
      </div>
    </div>
  );
};

const BlogHeader = () => {
  return (
    <div className="article-head-wrapper">
      <div className="article-head">
        <Link className="article-head__a" to="/events">
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export { EventHeader, BlogHeader };
