import React, { useState, useEffect } from 'react';

import Portfolio from '../portfolio/portfolio';
import AboutMe from '../about/about_me';
import Contact from '../contact/contact';

import './gallery.scss';

const pages = {
  portfolio: <Portfolio />,
  about: <AboutMe />,
  contact: <Contact />,
};

function Gallery(props) {
  const [currentPage, setCurrentPage] = useState(pages.portfolio);

  useEffect(() => {
    const hash = window.location.hash;
    const currentPageProp = props.current;

    if (currentPageProp) {
      setCurrentPage(pages[currentPageProp]);
      window.history.pushState(null, null, `#${currentPageProp}`);
    } else if (hash) {
      const hashWithNoHash = hash.split('#')[1];
      if (pages[hashWithNoHash]) {
        setCurrentPage(pages[hashWithNoHash])
        document.querySelector('#gallery').scrollIntoView();
      }
    }
  }, [setCurrentPage, props]);

  const changeCurrentPage = newPage => {
    setCurrentPage(pages[newPage]);
    window.history.pushState(null, null, `#${newPage}`);
  };

  return (
    <section id="gallery">
      <div className="gallery-selector">
        <button className={`btn-selector ${currentPage === pages.about ? 'btn-selector-active' : ''}`} onClick={() => changeCurrentPage('about')}>
          About Me
        </button>
        <button className={`btn-selector ${currentPage === pages.portfolio ? 'btn-selector-active' : ''}`} onClick={() => changeCurrentPage('portfolio')}>
          Portfolio
        </button>
        <button className={`btn-selector ${currentPage === pages.contact ? 'btn-selector-active' : ''}`} onClick={() => changeCurrentPage('contact')}>
          Contact
        </button>
      </div>
      <div className="gallery-section">
        { currentPage }
      </div>
    </section>
  )
};

export default Gallery;