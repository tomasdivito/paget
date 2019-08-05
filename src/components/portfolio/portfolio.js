import React from 'react';

import Project from './project';
import PROJECTS_JSON from '../../projects/project_list.json';
import './project.scss';

export default () => {
  const PROJECTS = PROJECTS_JSON.projects;

  return (
    <div className="portfolio-section">
      <h1>Projects Showcase</h1>
      <div className="portfolio-gallery">
        {PROJECTS.map(project => (
          <Project key={project.code} project={project} />
        ))}
      </div>
    </div>
  );
};