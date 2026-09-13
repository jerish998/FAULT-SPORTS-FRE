import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout'

import Home from './pages/Home/Home';
import Login from './components/Login';

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className='app'>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
