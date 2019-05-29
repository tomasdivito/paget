import React from 'react';
import avatar from '../../images/toti-pixel.png';

const Header = () => {
  const imageStyle = {
    borderRadius: "50%",
    maxWidth: "200px"
  };
  
  return (
    <div>
      <img style={imageStyle} src={avatar} />
      <h2>Tomas Di Vito</h2>
      <p>Freelance Software Developer</p>
    </div>
  );
};

export default Header;