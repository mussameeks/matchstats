import React, { useEffect, useState } from "react";
import dummyData from "../assets/dummydata.json";
import MatchList from "../components/MatchList";

const Finished = () => {
  const [finishedMatches, setFinishedMatches] = useState([]);

  useEffect(() => {
    const filtered = dummyData.filter(match => match.status === "finished");
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
