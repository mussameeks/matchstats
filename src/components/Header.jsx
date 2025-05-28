import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkStyle = ({ isActive }) =>
    \`px-3 py-2 rounded-md text-sm font-medium \${isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-500"}\`;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">⚽ MatchStats</h1>
        <nav className="space-x-3">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/live" className={navLinkStyle}>Live</NavLink>
          <NavLink to="/finished" className={navLinkStyle}>Finished</NavLink>
          <NavLink to="/upcoming" className={navLinkStyle}>Upcoming</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
