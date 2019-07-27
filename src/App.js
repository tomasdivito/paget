import React from 'react';

import './App.scss';

const Images = require.context("./images");

function App() {
  return (
    <div id="app">
      <section className="landing">
        <div className="title-background">
          <h2 className="portfolio-title">Tomas Di Vito</h2>
          <p>Software Developer</p>
        </div>
        <div className="social-links">
          <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/tomasdivito">
            <img className="social-link" src={Images('./Github.svg')} alt="Github logo" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tomas-di-vito">
            <img className="social-link" src={Images('./Linkedin.svg')} alt="Linkedin logo" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/totiiimon">
            <img className="social-link" src={Images('./Twitter.svg')} alt="Twitter logo" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
