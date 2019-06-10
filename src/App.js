import React from 'react';
import './App.scss';

import Landing from './components/landing/landing';
import Gallery from './components/gallery/gallery';

function App() {
  return (
    <div id="app">
      <Landing />
      <Gallery />
    </div>
  );
}

export default App;
