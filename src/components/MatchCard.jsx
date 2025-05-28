import React from "react";
import { Link } from "react-router-dom";

const MatchCard = ({ match }) => {
  const { id, teams, status, score, startTime, league } = match;

  const statusColor = {
    live: "text-red-600",
    finished: "text-gray-500",
    upcoming: "text-blue-500"
  };

  const formattedTime = new Date(startTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm transition hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-2">
        <span className={`uppercase text-sm font-semibold ${statusColor[status]}`}>{status}</span>
        <span className="text-xs text-gray-400">{league}</span>
      </div>

      <div className="flex justify-between items-center font-semibold text-lg">
        <div>{teams.home}</div>
        <div className="text-gray-700">
          {(status === "live" || status === "finished")
            ? \`\${score.home} - \${score.away}\`
            : formattedTime}
        </div>
        <div>{teams.away}</div>
      </div>

      <div className="text-right mt-2">
        <Link
          to={\`/match/\${id}\`}
          className="text-blue-500 text-sm hover:underline"
        >
          View details →
        </Link>
      </div>
    </div>
  );
};

export default MatchCard;
