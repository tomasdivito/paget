import React from 'react';
import { mount, route } from 'navi'
import { Router, View } from 'react-navi'
import './App.scss';

import Layout from './components/layout/layout';
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
    <Router style={{ height: '100%' }} routes={routes}>
      <Layout>
        <View />
      </Layout>
    </Router>
  );
}

export default App;
