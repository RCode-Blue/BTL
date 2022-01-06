import React from "react";
import { Link } from "gatsby";

import "../../styles/main.scss";
import "../../styles/topNav.scss";

const TopNav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/library">Browse the Library</Link>
        </div>
        <div>
          <Link to="/events">Events</Link>
        </div>
        <div>
          <Link to="/join">Join Us</Link>
        </div>
        <div>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <Link to="/login">Member Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
