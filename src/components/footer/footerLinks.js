import React from "react";
import { Link } from "gatsby";

const FooterLinks = () => {
  return (
    <nav role="navigation" tabIndex="0">
      <ul>
        <li>
          <Link aria-roledescription="navigation link" tabIndex="0" to="/">
            Log in
          </Link>
        </li>
        <li>
          <Link aria-roledescription="navigation link" tabIndex="1" to="/">
            F.A.Q.
          </Link>
        </li>
        <li>
          <Link aria-roledescription="navigation link" tabIndex="2" to="/">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link aria-roledescription="navigation link" tabIndex="3" to="/">
            Privacy policies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
