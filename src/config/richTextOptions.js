import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import React from "react";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.HR]: (node, children) => <hr />,
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri}>{children}</a>
    ),
  },
  renderMark: {
    [BLOCKS.BOLD]: (node, children) => <b>{children}</b>,
    [BLOCKS.ITALIC]: (node, children) => <i>{children}</i>,
    [BLOCKS.UNDERLINE]: (node, children) => <u>{children}</u>,
    [BLOCKS.CODE]: (node, children) => <code>{children}</code>,
  },
};

const richTextOptions = () => {
  return options;
};

export default richTextOptions;
