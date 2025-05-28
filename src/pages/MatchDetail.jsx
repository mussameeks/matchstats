import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLiveMatches } from "../api/sportsmonks";

const MatchDetail = () => {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getLiveMatches();
        const selected = data.find(m => m.id === id);
        setMatch(selected);
      } catch (err) {
        console.error("Error loading match detail:", err);
      }
    };

    fetchDetails();
  }, [id]);

  if (!match) return <p className="p-6 text-center">Loading match details...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2 text-center">{match.teams.home} vs {match.teams.away}</h2>
      <p className="text-center mb-4"><strong>League:</strong> {match.league}</p>
      <div className="text-center">
        <p><strong>Status:</strong> {match.status}</p>
        {(match.status === "live" || match.status === "finished") && (
          <p><strong>Score:</strong> {match.score.home} - {match.score.away}</p>
        )}
        <p><strong>Start Time:</strong> {new Date(match.startTime).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default MatchDetail;
