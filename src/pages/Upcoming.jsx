import React, { useEffect, useState } from "react";
import { getUpcomingMatches } from "../api/sportsmonks";
import MatchList from "../components/MatchList";

const Upcoming = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getUpcomingMatches();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching upcoming matches:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📅 Upcoming Matches</h2>
      <MatchList matches={matches} />
    </div>
  );
};

export default Upcoming;
