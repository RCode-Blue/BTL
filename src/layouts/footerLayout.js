import React from "react";
import FooterLinks from "../components/footer/footerLinks";
import FooterContent from "../components/footer/footerContent";
import FooterIcons from "../components/footer/footerIcons";
import FooterLogos from "../components/footer/footerLogos";

const FooterLayout = () => {
  return (
    <>
      <FooterLinks />
      <FooterContent />
      <div>
        <FooterIcons />
        <FooterLogos />
      </div>
    </>
  );
};
export default FooterLayout;
