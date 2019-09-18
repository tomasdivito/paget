import React from 'react';

import './project.scss';
const Images = require.context("../../images");

const ProjectButton = function ({ project, selected, evt }) {
  console.log(selected);
  return (
    <button onClick={() => evt()} className={`project ${selected ? 'selected' : ''}`}>
      <div className="project-image">
        <img alt={`${project.name} logo`} src={Images(`./${project.thumbnail}`)} />
      </div>
      <div className="project-summary">
        <h4 className="project-title">{project.name}</h4>
      </div>
    </button>
  )
};

export default ProjectButton;