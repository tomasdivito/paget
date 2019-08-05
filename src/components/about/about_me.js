import React from 'react';

import Skill from '../skill/skill';
import './about_me.scss';

const Avatar = require('../../images/toti-pixel.png');

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
    <div className="about-me">
      <div className="portrait">
        <img alt="toti-logo" className="logo" src={Avatar} />
      </div>
      <div className="about-me-summary">
        <p>
          I’m a Computer Engineering student at Universidad Nacional de La Matanza, I started working professionally as a
          software developer in 2016 although I started learning programming when I was 14 years old. I worked for personal
          projects and for clients as a freelancer. I have experience in the web using <b>Javascript</b>,
          <b>React</b>, <b>AngularJS</b> and the tools surrounding them. I also have experience on backend technologies using <b>Ruby on Rails</b>,
          <b>ASP.net</b> with <b>C#</b> and knowledge of other languages like <b>Java</b> and <b>C/C++</b>. I have interest in languages like <b>Rust</b> and
          <b>elixir</b>, game development and graphics programming in general.
        </p>
      </div>
    </div>
  </div>
);
