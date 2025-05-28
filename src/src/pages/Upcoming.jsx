import React, { useEffect, useState } from "react";
import MatchList from "../components/MatchList";

const Upcoming = () => {
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  useEffect(() => {
    const filtered = .filter(match => match.status === "upcoming");
    setUpcomingMatches(filtered);
  }, []);

  return (
    <div className="upcoming-page">
      <h2>📅 Upcoming Matches</h2>
      <MatchList matches={upcomingMatches} />
    </div>
  );
};

export default Upcoming;
