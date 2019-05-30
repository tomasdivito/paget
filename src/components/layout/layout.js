import React from 'react';
import { Link } from 'react-navi';

import Emoji from '../../emoji';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <div className="navigation">
        <nav>
          <div className="home-title">
            <Link className="app-link header-link" href={`/`}>
              <Emoji margin symbol={"👨‍💻"} label="dev-man" />
              Tomas Di Vito
            </Link>
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;