import React from "react";
import { Link } from "gatsby";

// import "../../styles/shared/_variables.scss";
// import "../../styles/home/heroTextBox.scss";
import "../../styles/allStyles.scss";

const renderTextString = (txtString) => {
  return <div className="textbox__text">{txtString}</div>;
};

const renderButton = (btnString, btnUrl) => {
  return (
    <div className="textbox__button">
      <div className="textbox__button__contents">
        <Link to={btnUrl}>{btnString}</Link>
      </div>
    </div>
  );
};

const TextBox = (data) => {
  // console.log(data);
  const { heroText, btnString, btnUrl } = data;
  return (
    <div className="textbox">
      {renderTextString(heroText)} {renderButton(btnString, btnUrl)}
    </div>
  );
};

export default TextBox;
