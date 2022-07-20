import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ mainPage }) => {
  return (
    <nav>
      <Link to={"/"}>{mainPage}</Link>
    </nav>
  );
};
