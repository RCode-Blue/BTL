/**
 * @description Reusable component for Event pages
 *
 * @namespace Reusable_ArticleHeader
 * @memberof App.components
 */
import React from "react";
import { Link } from "gatsby";

const ArticleHeader = () => {
  return <Link to="/events">Back to Events</Link>;
};

export default ArticleHeader;
