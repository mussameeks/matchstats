import React from "react";
import { useParams, Link } from "react-router-dom";
import dummyData from "../assets/dummydata.json";

const MatchDetail = () => {
  const { id } = useParams();
  const match = dummyData.find(m => m.id === id);

  if (!match) {
    return <p>Match not found. <Link to="/">Go back home</Link></p>;
  }

  return (
    <div className="match-detail">
      <h2>{match.teams.home} vs {match.teams.away}</h2>
      <p><strong>League:</strong> {match.league}</p>
      <p><strong>Status:</strong> {match.status}</p>
      {(match.status === "live" || match.status === "finished") && (
        <p><strong>Score:</strong> {match.score.home} - {match.score.away}</p>
      )}
      <p><strong>Start Time:</strong> {new Date(match.startTime).toLocaleString()}</p>

      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default MatchDetail;
