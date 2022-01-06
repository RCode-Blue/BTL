import React from "react";
// import Layout from "../layouts/mainLayout";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check our latest articles</Link>
      </p>
    </div>
  );
};

export default NotFound;
