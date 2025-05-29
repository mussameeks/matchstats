import React, { useEffect, useState } from 'react';
import { getFinishedMatches } from '../api/football';

function Finished() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFinishedMatches();
      setMatches(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Finished Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.fixture.id} className="mb-2">
            {match.teams.home.name} {match.goals.home} - {match.goals.away} {match.teams.away.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Finished;