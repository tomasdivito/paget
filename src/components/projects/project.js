import React from 'react';

import './project.scss';
const Images = require.context("../../images");

const Project = function ({ project }) {
  console.log(Images)
  return (
    <div className="project">
      <h2>{project.name}</h2>
      <img className="project-thumbnail" alt={`${project.name} logo`} src={Images(`./${project.thumbnail}`)} />
    </div>
  )
};

export default Project;