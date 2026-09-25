import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { getPremierLeagueTeams, getAllSports } from '../../api/sportsApi';
import { getAllSports as getAllSportsFromService } from '../../services/allSportsListService.js';

function Home() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [sports, setSports] = useState([]);
    const [sportsListFromService, setSportsListFromService] = useState([]);

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

  useEffect(() => {
    async function loadAllSports() {
      try {
        const data = await getAllSports();
        setSports(data);
      } catch (err) {
        setError('Failed to load sports');
      } finally {
        setLoading(false);
      }
    }

    loadAllSports();
  }, []);

  useEffect(() => {
    async function loadAllSportsFromService() {
      try {
        const data = await getAllSportsFromService();
        setSportsListFromService(data);
      } catch (err) {
        setError('Failed to load sports from service');
      } finally {
        setLoading(false);
      }
    }

    loadAllSportsFromService();
  }, []);


   if (loading) {
    return <div className="home-page">Loading...</div>;
  }
  if (error) {
    return <div className="home-page">{error}</div>;
  }


  return (
    <div className='container'>
      <h1>Welcome to the Home Page</h1>


<div className="container">
  <div className="row g-4">

  
  {sportsListFromService.map((sport) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={sport.idSport}
          >
            <div className="card h-100">

              <img
                src={sport.strSportThumb}
                alt={sport.strSport}
                className="card-image"
              />

              <div className="card-body">
                <h3>{sport.strSport}</h3>

                <p>
                  <strong>Format:</strong> {sport.strFormat}
                </p>

                
              </div>

            </div>
          </div>
        ))}

  </div>
  </div>
  
  

 
  
<div className="container">
  <div className="row g-4">
      {teams.map((team) => (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
        <Card
         type='image'
          key={team.idTeam}
          title={team.strTeam}
          description={team.strLeague}
          image={team.strBadge}
          buttonText="View Team"
        />
        </div>
      ))}
    
   
  </div>
</div>

////////////////////////////////

      <p>This is the main landing page of your application.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;   