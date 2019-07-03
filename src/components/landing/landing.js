import React from 'react';
import avatar from '../../images/toti-pixel.png';
import './landing.scss';
const Images = require.context("../../images");

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <img alt="toti-logo" className="logo" src={avatar} />
      <h2 className="portfolio-title">Tomas Di Vito</h2>
      <p>Freelance Software Developer</p>
      <div className="social-links">
        <a href="https://www.github.com/tomasdivito">
          <img className="social-link" src={Images("./Github.svg")} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/tomas-di-vito">
          <img className="social-link" src={Images("./Linkedin.svg")} alt="Linkedin logo" />
        </a>
        <a href="https://www.twitter.com/totiiimon">
          <img className="social-link" src={Images("./Twitter.svg")} alt="Twitter logo" />
        </a>
      </div>
      <div className="page-links">
        <a className="page-link" href="#about-me">
          About Me
        </a>
        <a className="page-link" href="#gallery">
          Portfolio
        </a>
        <a className="page-link" href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
};

export default Landing;