import React from 'react';
import './style.css';

import logo from '../../assets/images/Proffy.svg';
import hero from '../../assets/images/Hero.png';
import heart from '../../assets/images/icons/coracaoRoxo.svg';

import Button from './HomeComponents/Button';

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
      <div className="container-primary">
        <div className="call_action">
          <div className="ask_action">
            <p>Seja bem vindo.</p>
            <span>O que deseja fazer?</span>
          </div>
          <div className="conections">
            <p>
              Total de 285 conexões <br className="break-line" /> já realizadas{' '}
              <img style={{ width: '16px' }} src={heart} alt="" />{' '}
            </p>
          </div>

          <div className="buttons">
            <Button text="Estudar" page="study" />
            <Button text="Dar Aulas" page="give-classes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
