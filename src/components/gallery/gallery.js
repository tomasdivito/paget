import React, { useState, useEffect } from 'react';

import Portfolio from '../portfolio/portfolio';
import AboutMe from '../about/about_me';
import Contact from '../contact/contact';

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
  }, [setCurrentPage, props])

  return (
    <section id="gallery">
      <div>
        <button onClick={() => setCurrentPage(pages.portfolio)}>
          Portfolio
        </button>
        <button onClick={() => setCurrentPage(pages.about)}>
          About Me
        </button>
        <button onClick={() => setCurrentPage(pages.contact)}>
          Contact
        </button>
      </div>
      { currentPage }
    </section>
  )
};

export default Gallery;