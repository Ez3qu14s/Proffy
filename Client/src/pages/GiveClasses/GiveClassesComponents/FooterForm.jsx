import React from 'react';
import warning from '../../../assets/images/icons/warning.svg';

function FooterForm() {
  return (
    <footer>
      <div className="container-primary footer">
        <div>
          <img src={warning} alt="" />

          <p>
            Importante! <br />
            Preencha todos os dados
          </p>
        </div>

        <button className="generic-button save">Salvar cadastro</button>
      </div>
    </footer>
  );
}

export default FooterForm;
