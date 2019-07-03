import React from 'react';

import Project from './project';
import PROJECTS_JSON from '../../projects/project_list.json';
import './project.scss';

const Projects = function (props) {
  const PROJECTS = PROJECTS_JSON.projects;

  return (
    <div className="project-gallery">
      {PROJECTS.map(project => (
        <Project key={project.code} project={project} />
      ))}
    </div>
  );
};

export default Projects;