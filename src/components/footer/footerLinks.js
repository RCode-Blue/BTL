/**
 * @description Component for rendering footer links
 *
 * @namespace FooterLinks
 * @memberof App.components.MainLayout.FooterLayout
 */
import React from "react";
import { Link } from "gatsby";

const footerLinksList = [
  {
    tabIndex: "0",
    to: "/welcome#login",
    text: "Log in",
  },
  {
    tabIndex: 1,
    to: "/",
    text: "F.A.Q.",
  },
  {
    tabIndex: 2,
    to: "/",
    text: "Terms of use",
  },
  {
    tabIndex: 3,
    to: "/",
    text: "Privacy policies",
  },
];

/**
 * @description Rernders links in the footer bar
 *
 * @function renderFooterLinks
 * @inner
 * @memberof App.components.MainLayout.FooterLayout.FooterLinks
 *
 * @param {object} footerLinksList Array of link objects
 * @param {object} footerLink An element of the footerLinkList array
 * @param {integer} tabIndex Tab index for the link item
 * @param {string} to URL of the link
 * @param {string} text Descriptive text for the menu item
 *
 * @example
 * renderFooterLinks (
 *  [
 *    {
 *      tabIndex: 4,
 *      to: "/somelink",
 *      text: "Link to a webpage"
 *    },
 *    {...}
 *  ]
 * )
 *
 */
const renderFooterLinks = (footerLinksList) => {
  return (
    <ul>
      {footerLinksList.map((linkItem) => {
        const { tabIndex, to, text } = linkItem;
        return (
          <li key={tabIndex}>
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
