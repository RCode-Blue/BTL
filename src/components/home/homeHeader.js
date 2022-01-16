import React from "react";

import subHeader from "../_reusables/subheader/subHeader";
// import subNavLinks from "./subNavLinks";

const HomeHeader = () => {
  const renderSubheading = (title) => {
    return subHeader(title);
  };

  const navLinks = [
    {
      id: 1,
      text: "How does it work?",
      url: "/",
    },
    {
      id: 2,
      text: "The tools",
      url: "/",
    },
    {
      id: 3,
      text: "Popular items",
      url: "/",
    },
    {
      id: 4,
      text: "What's on",
      url: "/",
    },
  ];
  // console.log(navLinks);

  const title = "Welcome to the Brisbane Tool Library";

  return (
    <div>
      <div>{renderSubheading({ title, navLinks })}</div>
    </div>
  );
};
export default HomeHeader;
