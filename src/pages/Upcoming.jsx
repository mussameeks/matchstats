import React, { useEffect, useState } from 'react';
import { getUpcomingMatches } from '../api/football';

function Upcoming() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUpcomingMatches();
      setMatches(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.fixture.id} className="mb-2">
            {match.teams.home.name} vs {match.teams.away.name} on {match.fixture.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Upcoming;