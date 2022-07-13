import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="table">
        <ul className="inline">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/tracker">Carb Tracker</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
