import React from "react";
import { Link } from "gatsby";

const SubNavLinks = () => {
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

  return navLinks;
};

export default SubNavLinks;
