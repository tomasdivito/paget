import React from 'react';
import './App.scss';

import Landing from './components/landing/landing';
import Gallery from './components/gallery/gallery';

// TODO: Use `<section>` tag to separate the page
function App() {
  return (
    <div id="app">
      <Landing />
      <Gallery />
    </div>
  );
}

export default App;
