import React from 'react';

import Skill from '../skill/skill';
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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