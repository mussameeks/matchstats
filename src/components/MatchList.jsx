import React from "react";
import MatchCard from "./MatchCard";

const MatchList = ({ matches }) => {
  if (!matches || matches.length === 0) {
    return <p>No matches to display.</p>;
  }

  return (
    <div className="match-list">
      {matches.map(match => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchList;
