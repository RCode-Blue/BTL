/**
 * @description Reusable section header component
 *
 * @namespace Reusable_SubHeader
 * @memberof App.components
 */

/**
 * @description Renders header text for a section
 *
 * @function renderSubheaderTitle
 * @inner
 */
import React, { Fragment } from "react";

const renderSubheaderTitle = (title) => {
  return (
    <div className="subheader-subtitle">
      <div className="subheader-subtitle__box">{title}</div>
    </div>
  );
};

/**
 * @description Renders navigation for a section header
 *
 * @function renderSubNavi
 * @inner
 */
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

const SubHeader = (data) => {
  return (
    <div className="subheader-wrapper">
      <div className="subheader">
        <div>{renderSubheaderTitle(data.title)}</div>
        {data.navLinks ? (
          <div>{renderSubNavi(data.navLinks)}</div>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
