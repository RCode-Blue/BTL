import React from "react";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const EventDetails = (data) => {
  console.log(data.data.raw);
  const { json } = data;

  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.HR]: (node, children) => <hr />,
    },
    renderMark: {
      [BLOCKS.BOLD]: (node, children) => <b>{children}</b>,
      [BLOCKS.ITALIC]: (node, children) => <i>{children}</i>,
    },
  };

  return <div className="">{renderRichText(data.data.raw, options)}</div>;
};

export default EventDetails;
