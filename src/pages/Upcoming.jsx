import React, { useEffect, useState } from "react";
import { getUpcomingMatches } from "../api/sportsmonks";
import MatchList from "../components/MatchList";

const Upcoming = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const data = await getUpcomingMatches();
        setMatches(data);
      } catch (err) {
        console.error("Error fetching upcoming matches:", err);
      }
    };

    fetchUpcoming();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">📅 Upcoming Matches</h2>
      <MatchList matches={matches} />
    </div>
  );
};

export default Upcoming;
