import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { getPremierLeagueTeams } from '../../api/sportsApi';

function Home() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
    async function loadTeams() {
      try {
        const data = await getPremierLeagueTeams();
        setTeams(data);
      } catch (err) {
        setError('Failed to load teams');
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

   if (loading) {
    return <div className="home-page">Loading...</div>;
  }
  if (error) {
    return <div className="home-page">{error}</div>;
  }


  return (
    <div className='home'>
      <h1>Welcome to the Home Page</h1>

<Card
type='data'
    title="Football"
    description="Latest football matches and updates."
    buttonText="View Matches"
  />

  <Card
  type='data'
    title="Cricket"
    description="Latest cricket matches and scores."
    buttonText="View Matches"
  />

  <Card
  type='data'
    title="Basketball"
    description="Latest basketball matches and updates."
    buttonText="View Matches"
  />
////////////////////////////////
<div className="home-page">
      {teams.map((team) => (
        <Card
         type='image'
          key={team.idTeam}
          title={team.strTeam}
          description={team.strLeague}
          image={team.strBadge}
          buttonText="View Team"
        />
      ))}
    </div>
////////////////////////////////

      <p>This is the main landing page of your application.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;   