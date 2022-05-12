/**
 * @description Reusable header components for articles
 *
 * @namespace Reusable_ArticleHeader
 * @memberof App.components
 */
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

/**
 * @description Reusable component for event header
 *
 * @namespace EventHeader
 * @memberof App.components.Reusable_articleHeader
 */
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

/**
 * @description Resuable component for blog header
 *
 * @namespace BlogHeader
 * @memberof App.components.Reusable_articleHeader
 */
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
