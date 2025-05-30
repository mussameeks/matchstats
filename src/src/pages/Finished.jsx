import React, { useEffect, useState } from "react";
import MatchList from "../components/MatchList";

const Finished = () => {
  const [finishedMatches, setFinishedMatches] = useState([]);

  useEffect(() => {
    const filtered = .filter(match => match.status === "finished");
    setFinishedMatches(filtered);
  }, []);

  return (
    <div className="finished-page">
      <h2>✅ Finished Matches</h2>
      <MatchList matches={finishedMatches} />
    </div>
  );
};

export default Finished;
