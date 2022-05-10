import React from "react";
import { Link } from "gatsby";

const footerLinksList = [
  {
    tabIndex: "0",
    to: "/",
    text: "Log in",
  },
  {
    tabIndex: "1",
    to: "/",
    text: "F.A.Q.",
  },
  {
    tabIndex: "2",
    to: "/",
    text: "Terms of use",
  },
  {
    tabIndex: "3",
    to: "/",
    text: "Privacy policies",
  },
];

const renderFooterLinks = (footerLinksList) => {
  return (
    <ul>
      {footerLinksList.map((linkItem) => {
        const { tabIndex, to, text } = linkItem;
        return (
          <li>
            <Link
              aria-roledescription="navigation link"
              tabIndex={tabIndex}
              to={to}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const FooterLinks = () => {
  return <nav className="footer-nav">{renderFooterLinks(footerLinksList)}</nav>;
};

export default FooterLinks;
