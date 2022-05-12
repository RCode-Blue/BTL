/**
 * @description Renders title text for 'Become a member' button
 *
 * @inner
 * @function renderTextString
 * @memberof App.components.HomeMain.HomeContents.HeroImage
 */
import React from "react";
import { Link } from "gatsby";

const renderTextString = (txtString) => {
  return <div className="textbox__text">{txtString}</div>;
};

/**
 * @description Render function for 'Become a Member' button in hero component
 *
 * @inne
 * r@function renderButton
 * @memberof App.components.HomeMain.HomeContents.HeroImage
 */
const renderButton = (btnString, btnUrl) => {
  return (
    <div className="textbox__button">
      <div className="textbox__button__contents">
        <Link to={btnUrl}>{btnString}</Link>
      </div>
    </div>
  );
};

/**
 * @description Text box component in Hero Image
 *
 * @namespace HeroTextBox
 * @memberof App.components.HomeMain.HomeContents.HeroImage
 */
const HeroTextBox = (data) => {
  const { heroText, btnString, btnUrl } = data;
  return (
    <div className="textbox">
      {renderTextString(heroText)} {renderButton(btnString, btnUrl)}
    </div>
  );
};

export default HeroTextBox;
