/**
 * @description Reusable component for Event pages
 *
 * @namespace Reusable_EventHeader
 * @memberof App.components
 *
 * @requires gatsby/link
 * @see {@link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/}
 */
import React from "react";
import { Link } from "gatsby";

const EventHeader = () => {
  return <Link to="/events">Back to Events</Link>;
};

export default EventHeader;
