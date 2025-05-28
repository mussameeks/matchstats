import axios from "axios";

const API_KEY = "t3gwKTfTnPTeUrjPrwCx3aA6BWz9ZS9vOsjv2KXjVJcWULEADsiNYZKUMJ3c";
const BASE_URL = "https://api.sportmonks.com/v3/football";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_token: API_KEY,
  },
});

export const getLiveMatches = async () => {
  const res = await api.get("/livescores", {
    params: {
      include: "localTeam,visitorTeam,league",
    },
  });
  return res.data.data.map(match => ({
    id: match.id.toString(),
    teams: {
      home: match.localTeam?.data?.name || "Home",
      away: match.visitorTeam?.data?.name || "Away",
    },
    status: match.time?.status || "live",
    score: {
      home: match.scores?.localteam_score ?? 0,
      away: match.scores?.visitorteam_score ?? 0,
    },
    startTime: match.time?.starting_at?.date_time || match.starting_at,
    league: match.league?.data?.name || "Unknown",
  }));
};


export const getCountriesWithLeagues = async () => {
  const response = await api.get("/core/countries", {
    params: { include: "leagues" },
  });
  return response.data.data;
};

export const getUpcomingMatches = async () => {
  const res = await api.get("/fixtures", {
    params: {
      include: "localTeam,visitorTeam,league",
      sort: "starting_at",
      per_page: 10
    },
  });
  return res.data.data.map(match => ({
    id: match.id.toString(),
    teams: {
      home: match.localTeam?.data?.name || "Home",
      away: match.visitorTeam?.data?.name || "Away",
    },
    status: match.time?.status || "upcoming",
    score: {
      home: 0,
      away: 0,
    },
    startTime: match.time?.starting_at?.date_time || match.starting_at,
    league: match.league?.data?.name || "Unknown",
  }));
};


export const getFinishedMatches = async () => {
  const res = await api.get("/fixtures", {
    params: {
      include: "localTeam,visitorTeam,league",
      sort: "-starting_at",
      status: "finished",
      per_page: 10,
    },
  });

  return res.data.data.map(match => ({
    id: match.id.toString(),
    teams: {
      home: match.localTeam?.data?.name || "Home",
      away: match.visitorTeam?.data?.name || "Away",
    },
    status: "finished",
    score: {
      home: match.scores?.localteam_score ?? 0,
      away: match.scores?.visitorteam_score ?? 0,
    },
    startTime: match.time?.starting_at?.date_time || match.starting_at,
    league: match.league?.data?.name || "Unknown",
  }));
};


export const getMatchDetailsWithEvents = async (fixtureId) => {
  const res = await api.get(`/football/fixtures/${fixtureId}`, {
    params: {
      include: "events,localTeam,visitorTeam",
    },
  });

  const match = res.data.data;
  return {
    id: match.id,
    teams: {
      home: match.localTeam.data.name,
      away: match.visitorTeam.data.name,
    },
    startTime: match.time.starting_at.date_time,
    events: match.events.data.map(event => ({
      id: event.id,
      type: event.type,
      minute: event.minute,
      player: event.player_name,
      result: event.result,
      teamId: event.team_id,
    })),
  };
};
