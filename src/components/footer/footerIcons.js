import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const FooterIcons = () => {
  return (
    <div className="footericons-wrapper">
      <nav className="footericons-bar">
        <div>
          <a href="https://www.instagram.com">
            <StaticImage
              width={20}
              height={20}
              src="../../assets/icons/instagram.png"
              alt="instagram icon"
            ></StaticImage>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com">
            <StaticImage
              width={20}
              height={20}
              src="../../assets/icons/facebook.png"
              alt="facebook icon"
            ></StaticImage>
          </a>
        </div>
        <div>
          <a href="https://www.twitter.com">
            <StaticImage
              width={20}
              height={20}
              src="../../assets/icons/twitter.png"
              alt="twitter icon"
            ></StaticImage>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default FooterIcons;
