/**
 * @description Component for displaying top navigation
 *
 * @namespace TopNav
 * @memberof App.components.TopBar
 */

import React from "react";
import { Link } from "gatsby";

const TopNav = () => {
  return (
    <div className="topnav-wrapper">
      <nav className="topnav-mobile"></nav>
      <nav className="topnav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/welcome">Member Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
