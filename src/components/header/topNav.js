import React from "react";
import { Link } from "gatsby";

// import "../../styles/main.scss";
// import "../../styles/topNav.scss";
import "../../styles/allStyles.scss";

const TopNav = () => {
  return (
    <div className="topnav-wrapper">
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
