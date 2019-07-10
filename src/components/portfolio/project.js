import React from 'react';

import Skill from '../skill';
import './project.scss';
const Images = require.context("../../images");

const Project = function ({ project }) {
  return (
    <div className="project">
      <div className="project-image">
        <img alt={`${project.name} logo`} src={Images(`./${project.thumbnail}`)} />
      </div>
      <div className="project-summary">
        <h4>{project.name}</h4>
        {  /* TODO: Show a description is not big that cerain number of characters (iterating over words) */ }
        <p>Basic description of the project, hidden for when you click or hover over the project</p>
        <div className="skill-list">
          {project.skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Project;