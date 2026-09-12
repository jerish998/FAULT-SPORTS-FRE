const BASE_URL = import.meta.env.VITE_SPORTSDB_BASE_URL;
const API_KEY = import.meta.env.VITE_SPORTSDB_API_KEY;

export async function getPremierLeagueTeams() {
  const url = `${BASE_URL}/${API_KEY}/search_all_teams.php?l=English_Premier_League`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch sports data');
  }

  const data = await response.json();

  return data.teams || [];
}