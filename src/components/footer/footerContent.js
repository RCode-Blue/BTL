/**
 * @description Footer content component
 *
 * @namespace FooterContent
 * @memberof App.components.MainLayout.FooterLayout
 */
import React from "react";

const FooterContent = () => {
  return (
    <div
      className="footer-content"
      role="contentinfo"
      tabIndex="1"
      aria-roledescription="acknowledgement of country"
    >
      <p>
        Brisbane Tool Library acknowledges the Turrbal people of Yuggera County
        as the traditional custodians of the lands where we live. Australia
        always was and always will be aboriginal land.
      </p>
    </div>
  );
};

export default FooterContent;
