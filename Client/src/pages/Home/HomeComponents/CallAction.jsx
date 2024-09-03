import React from 'react';
import Button from './Button';
import heart from '../../../assets/images/icons/coracaoRoxo.svg';

function CallAction() {
  return (
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
  );
}

export default CallAction;
