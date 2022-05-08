import React from "react";
import { Link } from "gatsby";

const TopNav = () => {
  return (
    <div className="topnav-wrapper">
      <nav className="topnav-mobile"></nav>
      <nav className="topnav-bar">
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
          <Link to="/blogs">Blogs</Link>
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
