import React from 'react';
import { mount, route } from 'navi'
import { Router, View } from 'react-navi'
import './App.css';

import Landing from './components/landing/landing';

function App() {
  const routes = mount({
    '/': route({
      title: `Tomas Di Vito's Portfolio`,
      view: <Landing />,
    }),
    '/projects': route({
      title: `Tomas Di Vito's Projects`,
      view: <div>Projects placeholder!</div>
    })
  });

  return (
    <Router routes={routes}>
      <div className="app">
        <View />
      </div>
    </Router>
  );
}

export default App;
