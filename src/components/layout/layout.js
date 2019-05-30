import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { useLoadingRoute }
import { Link } from 'react-navi';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <div className="navigation">
        <nav>
          <Link className="app-link header-link" href={`/`}>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faCoffee} />
            TOMAS DI VITO
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;