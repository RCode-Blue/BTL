import React from "react";
import richTextOptions from "../../../config/richTextOptions";
import { renderRichText } from "gatsby-source-contentful/rich-text";

// import "../../../styles/configStyles/richTextOptions.scss";
// import "../../../styles/allStyles.scss";

const EventDescription = (data) => {
  const { json } = data;

  const options = richTextOptions();

  return (
    <div className="eventpage-article__description">
      {renderRichText(data.data, options)}
    </div>
  );
};

export default EventDescription;
