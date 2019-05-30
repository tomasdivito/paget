import React from 'react';
import { Link } from 'react-navi';
import avatar from '../../images/toti-pixel.png';
import './landing.scss';

const Header = () => {
  return (
    <div>
      <header className="header">
        <img alt="toti-logo" className="logo" src={avatar} />
        <h2>Tomas Di Vito</h2>
        <p>Freelance Software Developer</p>
        <Link href={`/projects`}>Projects here</Link>
      </header>
    </div>
  );
};

export default Header;