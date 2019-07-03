import React from 'react';

import Projects from '../projects/projects';
import './portfolio.scss';

const Portfolio = function () {
  return (
    <React.Fragment>
      <h2 className="title">Portfolio</h2>

      <Projects />
    </React.Fragment>
  )
}

export default Portfolio;