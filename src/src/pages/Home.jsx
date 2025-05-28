import React, { useEffect, useState } from "react";
import MatchList from "../components/MatchList";

const Home = () => {
  const [live, setLive] = useState([]);
  const [finished, setFinished] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const liveMatches = .filter(m => m.status === "live");
    const finishedMatches = .filter(m => m.status === "finished");
    const upcomingMatches = .filter(m => m.status === "upcoming");

    setLive(liveMatches);
    setFinished(finishedMatches);
    setUpcoming(upcomingMatches);
  }, []);

  return (
    <div className="home">
      <section>
        <h2>🔥 Live Matches</h2>
        <MatchList matches={live} />
      </section>
      <section>
        <h2>✅ Finished Matches</h2>
        <MatchList matches={finished} />
      </section>
      <section>
        <h2>📅 Upcoming Matches</h2>
        <MatchList matches={upcoming} />
      </section>
    </div>
  );
};

export default Home;
