import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/how">How does it work?</Link>
        </li>
        <li>
          <Link to="/tools">The tools</Link>
        </li>
        <li>
          <Link to="/popular">Popular items</Link>
        </li>
        <li>
          <Link to="/events">What's on</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
