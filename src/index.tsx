import React from 'react';
import ReactDOM from 'react-dom/client';
import Opener from './Dependencies/Opener';
import './index.css'
import Nav from './Dependencies/Nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Dependencies/Routes/AboutMe';
import MyProjects from './Dependencies/Routes/MyProjects';
import Contact from './Dependencies/Routes/Contact';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Opener />
        <Router>
          <Nav />         
          <Routes>
            <Route path='/' Component={AboutMe}/>      
            <Route path='/MyProjects' Component={MyProjects}/>      
            <Route path='/Contact' Component={Contact}/>      
          </Routes>
        </Router>
  </React.StrictMode>
);
