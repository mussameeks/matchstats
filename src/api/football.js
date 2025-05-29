import axios from 'axios';

const API = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-apisports-key': '503826ec0d1974a17fe417fea9c0a345'
  }
});

export const getLeagues = async () => {
  const response = await API.get('leagues');
  return response.data.response;
};

export const getLiveMatches = async () => {
  const response = await API.get('fixtures?live=all');
  return response.data.response;
};

export const getUpcomingMatches = async () => {
  const response = await API.get('fixtures?next=10');
  return response.data.response;
};

export const getFinishedMatches = async () => {
  const today = new Date().toISOString().split('T')[0];
  const response = await API.get(`fixtures?date=${today}`);
  return response.data.response;
};

export const getMatchDetails = async (matchId) => {
  const response = await API.get(`fixtures?id=${matchId}&include=events`);
  return response.data.response[0];
};