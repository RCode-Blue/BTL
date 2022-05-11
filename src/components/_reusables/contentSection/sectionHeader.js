/**
 * @description Reusable section header
 *
 * @namespace SectionHeader
 * @memberof App.components
 */

import React from "react";

/**
 * @description Section header component (dark background)
 *
 * @namespace SectionHeaderDark
 * @memberof App.components.SectionHeader
 */
const SectionHeaderDark = (data) => {
  return (
    <div className="section-header_wrapper__dark">
      <div className="section-header__dark">
        <div>{data.text}</div>
      </div>
    </div>
  );
};

/**
 * @description Section header component (light background)
 *
 * @namespace SectionHeaderLight
 * @memberof App.components.SectionHeader
 */
const SectionHeaderLight = (data) => {
  return (
    <div className="section-header_wrapper__light">
      <div className="section-header__light">
        <div>{data.text}</div>
      </div>
    </div>
  );
};

export { SectionHeaderDark, SectionHeaderLight };
