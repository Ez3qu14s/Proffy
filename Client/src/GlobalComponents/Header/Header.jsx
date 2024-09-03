import React from 'react';
import arrow from '../../assets/images/icons/backArrow.svg';
import logo from '../../assets/images/Proffy.svg';
import { Link, useLocation } from 'react-router-dom';

import './header.css';

function titleName() {
  const local = useLocation().pathname;
  if (local === '/give-classes') {
    return 'Dar aulas';
  } else {
    return 'Estudar';
  }
}

function Header() {
  return (
    <header>
      <div className="container-primary header">
        <Link to="/">
          <img src={arrow} alt="Voltar" />
        </Link>

        <h1>{titleName()}</h1>

        <img className="logo" src={logo} alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
