import React, { useState } from 'react';

import './App.scss';

import Gallery from './components/gallery/gallery';

const Images = require.context("./images");

function App() {
  let [currentGallery, setCurrentGallery] = useState(null);

  let changeGallery = (newGallery) => {
    document.querySelector('#gallery').scrollIntoView();

    if (currentGallery === newGallery) {
      setCurrentGallery(null);
    }

    // This is a **DIRTY HACK** in order to prevent a bug
    // that can be reproduced in this way:
    // Select `About` in the Landing.
    // In the Gallery select the `Portfolio` button.
    // Go back to Landing and if you try to select `About` it
    // won't change since it's already selected. So we rewrite the
    // state with `null` first and we introduced the real change under
    // a timeout in order for the `null` state to take effect first.
    setTimeout(() => setCurrentGallery(newGallery), 0);
  };

  return (
    <div id="app">
      <section className="landing">
        <div className="text-background">
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
