import React, { useEffect, useState } from "react";
import { getLiveMatches } from "../api/sportsmonks";
import MatchList from "../components/MatchList";

const Live = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchLive = async () => {
      try {
        const data = await getLiveMatches();
        setMatches(data);
      } catch (err) {
        console.error("Error fetching live matches:", err);
      }
    };

    fetchLive();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">🔥 Live Matches</h2>
      <MatchList matches={matches} />
    </div>
  );
};

export default Live;
