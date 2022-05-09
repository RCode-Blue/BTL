import React from "react";

const SectionHeaderDark = (data) => {
  return (
    <div className="section-header_wrapper__dark">
      <div className="section-header__dark">
        <div>{data.text}</div>
      </div>
    </div>
  );
};

const SectionHeaderLight = (data) => {
  // console.log(data.text);
  return (
    <div id="ourtools" className="section-header_wrapper__light">
      <div className="section-header__light">
        <div>{data.text}</div>
      </div>
    </div>
  );
};

export { SectionHeaderDark, SectionHeaderLight };
