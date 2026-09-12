import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>

<Card
    title="Football"
    description="Latest football matches and updates."
    buttonText="View Matches"
  />

  <Card
    title="Cricket"
    description="Latest cricket matches and scores."
    buttonText="View Matches"
  />

  <Card
    title="Basketball"
    description="Latest basketball matches and updates."
    buttonText="View Matches"
  />


      <p>This is the main landing page of your application.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;   