import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>⚽ Match Stats</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/live">Live</Link> |{" "}
        <Link to="/finished">Finished</Link> | <Link to="/upcoming">Upcoming</Link>
      </nav>
    </header>
  );
}

export default Header;
