/**
 * @description Reusable component to display decription of event
 *
 * @namespace Reusable_EventDescription
 * @memberof App.components
 *
 * @requires gatsby-source-contentful/rich-text
 * @see {@link https://www.gatsbyjs.com/plugins/gatsby-source-contentful/}
 *
 */
import React from "react";
import richTextOptions from "../../../config/richTextOptions";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const EventDescription = (data) => {
  const options = richTextOptions();

  return (
    <div className="eventpage-article__description">
      {renderRichText(data.data, options)}
    </div>
  );
};

export default EventDescription;
