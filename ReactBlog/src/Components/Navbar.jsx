import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bollywood">Bollywood</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/fitness">Fitness</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
