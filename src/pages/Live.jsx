import React, { useEffect, useState } from "react";
import { getLiveMatches } from "../api/sportsmonks";
import MatchList from "../components/MatchList";

const Live = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveMatches = await getLiveMatches();
        setMatches(liveMatches);
      } catch (error) {
        console.error("Error fetching live matches:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="live-page p-6">
      <h2 className="text-center text-xl font-bold mt-6">🔥 Live Matches</h2>
      <MatchList matches={matches} />
    </div>
  );
};

export default Live;
