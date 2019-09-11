import React, { useState } from 'react';

import ProjectButton from './project_button';
import PROJECTS_JSON from '../../projects/project_list.json';
import './project.scss';

export default () => {
  const [selected, setSelected] = useState({ code: null });
  const PROJECTS = PROJECTS_JSON.projects;

  return (
    <div className="portfolio-section">
      <h1>Projects Showcase</h1>
      <div className="portfolio-gallery">
        {PROJECTS.map(project => (
          <ProjectButton
            selected={project.code === selected.code}
            evt={() => setSelected(project)}
            key={project.code}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};