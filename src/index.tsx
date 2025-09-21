import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Dependencies/Routes/Home';
import { PageResourceType } from './Dependencies/Models';
import Head from './Dependencies/Global/Head';
import Tail from './Dependencies/Global/Tail';
import Projects from './Dependencies/Routes/Projects';
import Contact from './Dependencies/Routes/Contact';

let PageResource : PageResourceType[] = 
[
  {
    Name: "Home",
    Link: "/",
    Component: Home    
  },
  {
    Name: "Projects",
    Link: "/ProjectDisplay",
    Component: Projects    
  },
  {
    Name: "Contact me",
    Link: "/Contact",
    Component: Contact    
  },
];

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router>
      <Head PageResource={PageResource}/>
      <Routes>
        {PageResource.map((Page, index) => (
          <Route path={Page.Link} Component={Page.Component} key={index}/>
        ))}
      </Routes>
    </Router>
    <Tail />
  </React.StrictMode>
);
