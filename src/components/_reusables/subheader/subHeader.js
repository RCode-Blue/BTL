import React from "react";
import { Link } from "gatsby";

import "../../../styles/shared/_mixins.scss";
import "../../../styles/subHeader.scss";

const renderSubheaderTitle = (title) => {
  return <div className="subtitle">{title}</div>;
};

const renderSubNavi = (navLinks) => {
  // console.log(navLinks);

  navLinks.forEach((navi) => console.log(navi));

  return (
    <div>
      <p>navlinks start</p>
      {navLinks.map((navi) => {
        return (
          <div key={navi.id}>
            <Link to={navi.url}>{navi.text}</Link>
          </div>
        );
      })}
      <p>navlinks end</p>
    </div>
  );
};

const subHeader = (data) => {
  return (
    <div>
      <div>{renderSubheaderTitle(data.title)}</div>
      <div>
        <p>navigation-start</p>
        {renderSubNavi(data.navLinks)}
        <p>navigation-end</p>
      </div>
    </div>
  );
};

export default subHeader;
