import React from 'react';

import Skill from '../skill/skill';
import './about_me.scss';

const skills = [
  "Javascript",
  "React",
  "React Native",
  "Redux",
  "AngularJS",
  "HTML",
  "CSS",
  "Jasmine",
  "Karma",
  "Rust",
  "Ruby",
  "C#",
  "ASP.net",
  "Webpack"
];

export default () => (
  <div className="about-me-section">
    <h1>Who am I?</h1>
    <p>
    I’m a computing engineering student, working as a software developer professionally since 2016, and coding since I was 14. I’m currently working on front-end web development with Javascript.
    I’m also interested in game development, and systems programming. I’m looking for challenges, and having fun learning new technologies.
    </p>
    <h1>My Skills</h1>
    <div className="skill-list">
      {skills.map((skill, index) => <Skill skill={skill} key={index} />)}
    </div>
  </div>
);
