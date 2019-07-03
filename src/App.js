import React, { useState } from 'react';

import './App.scss';

import Gallery from './components/gallery/gallery';

const Images = require.context("./images");

function App() {
  let [currentGallery, setCurrentGallery] = useState(null);

  let changeGallery = (newGallery) => {
    document.querySelector('#gallery').scrollIntoView();
    setCurrentGallery(newGallery);
  };

  return (
    <div id="app">
      <section className="landing">
        <img alt="toti-logo" className="logo" src={Images('./toti-pixel.png')} />
        <h2 className="portfolio-title">Tomas Di Vito</h2>
        <p>Freelance Software Developer</p>
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
        <div className="page-links">
          <a className="page-link" href="#about" onClick={() => changeGallery('about')}>
            About Me
          </a>
          <a className="page-link" href="#portfolio" onClick={() => changeGallery('portfolio')}>
            Portfolio
          </a>
          <a className="page-link" href="#contact" onClick={() => changeGallery('contact')}>
            Contact
          </a>
        </div>
      </section>
      <Gallery current={currentGallery} />
    </div>
  );
}

export default App;
