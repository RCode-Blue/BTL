import React from "react";
import FooterLinks from "../components/footer/footerLinks";
import FooterContent from "../components/footer/footerContent";
import FooterIcons from "../components/footer/footerIcons";
import FooterLogos from "../components/footer/footerLogos";

import "../styles/footerLayout.scss";

const FooterLayout = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <FooterLinks />
        <FooterContent />
        <div className="footer__bottom">
          <div>
            <FooterIcons />
          </div>
          <div>
            <FooterLogos />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterLayout;
