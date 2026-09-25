import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout'

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './App.css';
//need to visualize the court 
import Badmintoncourt from './components/BadmintonCourt/BadmintonCourt';
import TableTennisCourt from './components/TableTennisCourt/TableTennisCourt';
import TennisCourt from './components/TennisCourt/TennisCourt';
import BasketballCourt from './components/BasketballCourt/BasketballCourt';
import SwimmingPool from './components/SwimmingPool/SwimmingPool';
import VolleyballCourt from './components/VolleyballCourt/VolleyballCourt';
import FootballCourt from './components/FootballCourt/FootballCourt';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
//need to remove when functionality is completed

          <Route path="/Badmintoncourt" element={<Badmintoncourt />} />
          <Route path="/TableTennisCourt" element={<TableTennisCourt />} />
          <Route path="/TennisCourt" element={<TennisCourt />} />
          <Route path="/BasketballCourt" element={<BasketballCourt />} />
          <Route path="/SwimmingPool" element={<SwimmingPool />} />
          <Route path="/VolleyballCourt" element={<VolleyballCourt />} />
          <Route path="/FootballCourt" element={<FootballCourt />} />
{/* Must be last */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
