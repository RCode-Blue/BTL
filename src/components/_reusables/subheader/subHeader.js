import React from "react";
import { Link } from "gatsby";

import "../../../styles/shared/_mixins.scss";
import "../../../styles/subHeader.scss";

const renderSubheaderTitle = (title) => {
  return (
    <div className="subtitle">
      <div className="subtitle__box">{title}</div>
    </div>
  );
};

const renderSubNavi = (navLinks) => {
  // console.log(navLinks);

  // navLinks.forEach((navi) => console.log(navi));

  return (
    <div className="subnav">
      {navLinks.map((navi) => {
        return (
          <div key={navi.id} className="subnav__item">
            <Link to={navi.url}>{navi.text}</Link>
          </div>
        );
      })}
    </div>
  );
};

const subHeader = (data) => {
  return (
    <div className="subHeader-wrapper">
      <div className="subHeader">
        <div>{renderSubheaderTitle(data.title)}</div>
        <div>{renderSubNavi(data.navLinks)}</div>
      </div>
    </div>
  );
};

export default subHeader;
