import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/Nav.css';

function Nav() {
  const history = useHistory();
  const [show, handleShow] = useState<boolean>(false);

  const transitionNavBar = () => {
    window.scrollY > 100 ? handleShow(true) : handleShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <nav className={`nav ${show && `nav__black`} `}>
      <div className="nav__contents">
        <img
          onClick={() => history.replace('/')}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <img
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="avatar"
        />
      </div>
    </nav>
  );
}

export default Nav;
