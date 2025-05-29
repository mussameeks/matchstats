import React, { useEffect, useState } from 'react';
import { getLiveMatches } from '../api/football';

function Live() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLiveMatches();
      setMatches(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Live Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.fixture.id} className="mb-2">
            {match.teams.home.name} vs {match.teams.away.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Live;