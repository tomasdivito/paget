import React from 'react';
import { importMDX } from 'mdx.macro';

import './about_me.scss';

const Avatar = require('../../images/toti-pixel.png');

const AboutDocument = React.lazy(() => importMDX('./about_me.md'));

export default () => (
  <div className="about-me-section">
    <h1>Who am I?</h1>
    <div className="about-me">
      <div className="portrait">
        <img alt="toti-logo" className="logo" src={Avatar} />
      </div>
      <div className="about-me-summary">
        <React.Suspense fallback={<div>Loading...</div>}>
          <AboutDocument />
        </React.Suspense>
      </div>
    </div>
  </div>
);
