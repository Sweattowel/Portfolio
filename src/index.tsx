import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports

import Head from './Dependencies/Global/Head';
import Tail from './Dependencies/Global/Tail';
import ProjectDocument from './Dependencies/Routes/ProjectDocument';
import { PageResources, Projects } from './Dependencies/Data/Resources';

// Model Imports

import { PageResourceType, ProjectType } from './Models/Elements';



const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router>
      <Head />
      <Routes>
        {PageResources.map((PageResource : PageResourceType, index : number) => (
          <Route path={PageResource.Path} Component={PageResource.component} key={index}/>
        ))}
        {Projects.map((Project: ProjectType, index: number) => (
          <Route path={Project.Path} Component={ProjectDocument} key={index} />
        ))}
      </Routes>
      <Tail />
    </Router>
  </React.StrictMode>
);
