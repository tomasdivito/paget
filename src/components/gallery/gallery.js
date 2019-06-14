import React from 'react';

import Projects from '../projects/projects';
import './gallery.scss';

const Gallery = function () {
  return (
    <div className="portfolio-gallery">
      <h2>Portfolio</h2>

      <Projects />
    </div>
  )
}

export default Gallery;