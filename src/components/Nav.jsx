import React from 'react';
import Logo from './resources/img/logo-buhoblanco.png';
import SearchBar from './SearchBar.jsx';
import './styles/Nav.css';

import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-logo">
          <img id="logoArkhaine" src={Logo} alt="Logo Arkhaine" />
        </span>
        </Link>
        <Link to="/about">
          <span>About</span>
          </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
