import React from "react";
import { Link } from "react-router-dom";

const MatchCard = ({ match }) => {
  const { id, teams, status, score, startTime, league } = match;

  return (
    <div className="match-card">
      <h3>{teams.home} vs {teams.away}</h3>
      <p><strong>Status:</strong> {status.toUpperCase()}</p>
      <p><strong>League:</strong> {league}</p>
      {status === "live" || status === "finished" ? (
        <p><strong>Score:</strong> {score.home} - {score.away}</p>
      ) : (
        <p><strong>Kickoff:</strong> {new Date(startTime).toLocaleString()}</p>
      )}
      <Link to={`/match/${id}`}>View Details</Link>
    </div>
  );
};

export default MatchCard;
