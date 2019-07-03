import React from 'react';

import './project.scss';
const Images = require.context("../../images");

const Project = function ({ project }) {
  return (
    <div className="project">
      <h2>{project.name}</h2>
      <img alt={`${project.name} logo`} src={Images(`./${project.thumbnail}`)} />
      <div className="details">
        <p>Basic description of the project, hidden for when you click or hover over the project</p>
        <div className="skill-list">
          Javascript - Angular JS
        </div>
      </div>
    </div>
  )
};

export default Project;