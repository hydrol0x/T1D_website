import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="">
        <li className="links">
          <a href="/home">Home</a>
        </li>
        <li className="links">
          <a href="/tracker">Carb Tracker</a>
        </li>
        <li className="links">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
