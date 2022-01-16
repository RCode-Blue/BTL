import React from "react";
// import "../../../styles/shared/_mixins.scss";
// import "../../../styles/shared/_variables.scss";

// import "../../../styles/_reusables/sectionHeader.scss";
import "../../../styles/allStyles.scss";

const SectionHeaderDark = (data) => {
  // console.log(text.text);
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
    <div className="section-header_wrapper__light">
      <div className="section-header__light">
        <div>{data.text}</div>
      </div>
    </div>
  );
};

export { SectionHeaderDark, SectionHeaderLight };
