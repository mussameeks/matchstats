import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">⚽ Welcome to Match Stats</h1>
      <p className="text-gray-700 mb-6">Check out live, upcoming matches or explore countries and leagues.</p>
      <div className="flex justify-center gap-4">
        <Link to="/live" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Live</Link>
        <Link to="/upcoming" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Upcoming</Link>
        <Link to="/countries" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Countries</Link>
      </div>
    </div>
  );
};

export default Home;
