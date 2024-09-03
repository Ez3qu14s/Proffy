import React from 'react';
import './style.css';

import logo from '../../assets/images/Proffy.svg';
import hero from '../../assets/images/Hero.png';

import CallAction from './HomeComponents/CallAction';

function Home() {
  return (
    <div className="container home">
      <div className="landing">
        <div className="container-primary landing-child">
          <div className="intro">
            <img className="logo" src={logo} alt="Proffy Logo" />
            <p className="subtitle">
              Sua plaforma de <br className="break-line" /> estudos online.
            </p>
          </div>
          <div className="hero">
            <img className="hero-image" src={hero} alt="Hero Proffy" />
          </div>
        </div>
      </div>
      <CallAction />
    </div>
  );
}

export default Home;
