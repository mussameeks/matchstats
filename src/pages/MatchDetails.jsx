import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMatchDetails } from '../api/football';

function MatchDetails() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMatchDetails(id);
      setMatch(data);
    };
    fetchData();
  }, [id]);

  if (!match) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Match Details</h1>
      <p>{match.teams.home.name} vs {match.teams.away.name}</p>
      <p>Score: {match.goals.home} - {match.goals.away}</p>
    </div>
  );
}

export default MatchDetails;