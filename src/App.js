import React from 'react';
import './App.scss';

import Landing from './components/landing/landing';
import AboutMe from './components/about/about_me';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';

function App() {
  return (
    <div id="app">
      <Landing />
      <AboutMe />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
