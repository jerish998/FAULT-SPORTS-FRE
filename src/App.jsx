import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout'

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './App.css';


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
          
{/* Must be last */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
