import React from "react";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const EventDetails = (data) => {
  console.log(data.data.raw);
  const { json } = data;

  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {};

  return <div className="">{renderRichText(data.data.raw, options)}</div>;
};

export default EventDetails;
