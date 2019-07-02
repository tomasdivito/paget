import React from 'react';

import Projects from '../projects/projects';
import './gallery.scss';

const Gallery = function () {
  return (
    <section id="gallery" className="portfolio-gallery">
      <h2 className="title">Portfolio</h2>

      <Projects />
    </section>
  )
}

export default Gallery;