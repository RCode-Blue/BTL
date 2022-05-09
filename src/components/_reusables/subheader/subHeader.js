import React from "react";
// import { Link } from "gatsby";
// import { AnchorLink } from "gatsby-plugin-anchor-links";

const renderSubheaderTitle = (title) => {
  return (
    <div className="subheader-subtitle">
      <div className="subheader-subtitle__box">{title}</div>
    </div>
  );
};

const renderSubNavi = (navLinks) => {
  return (
    <div className="subheader-subnav">
      {navLinks.map((navi) => {
        return (
          <div className="subheader-subnav__item" key={navi.id}>
            <a href={navi.url} title={navi.title}>
              {navi.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

const subHeader = (data) => {
  return (
    <div className="subheader-wrapper">
      <div className="subheader">
        <div>{renderSubheaderTitle(data.title)}</div>
        <div>{renderSubNavi(data.navLinks)}</div>
      </div>
    </div>
  );
};

export default subHeader;
