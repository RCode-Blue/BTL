import React from "react";
import { Link } from "gatsby";

import "../../styles/main.scss";
import "../../styles/footer/footerLinks.scss";

const FooterLinks = () => {
  return (
    <nav className="footer-nav">
      <div>
        <Link aria-roledescription="navigation link" tabIndex="0" to="/">
          Log in
        </Link>
      </div>
      <div>
        <Link aria-roledescription="navigation link" tabIndex="1" to="/">
          F.A.Q.
        </Link>
      </div>
      <div>
        <Link aria-roledescription="navigation link" tabIndex="2" to="/">
          Terms of Use
        </Link>
      </div>
      <div>
        <Link aria-roledescription="navigation link" tabIndex="3" to="/">
          Privacy policies
        </Link>
      </div>
    </nav>
  );
};

export default FooterLinks;
