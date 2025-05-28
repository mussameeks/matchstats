import React, { useEffect, useState } from "react";
import { getFinishedMatches } from "../api/sportsmonks";
import MatchList from "../components/MatchList";

const Finished = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchFinished = async () => {
      try {
        const data = await getFinishedMatches();
        setMatches(data);
      } catch (err) {
        console.error("Error fetching finished matches:", err);
      }
    };

    fetchFinished();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">✅ Finished Matches</h2>
      <MatchList matches={matches} />
    </div>
  );
};

export default Finished;
