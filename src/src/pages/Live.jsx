import React, { useEffect, useState } from "react";
import dummyData from "../assets/dummydata.json";
import MatchList from "../components/MatchList";

const Live = () => {
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    const filtered = dummyData.filter(match => match.status === "live");
    setLiveMatches(filtered);
  }, []);

  return (
    <div className="live-page">
      <h2>🔥 Live Matches</h2>
      <MatchList matches={liveMatches} />
    </div>
  );
};

export default Live;
