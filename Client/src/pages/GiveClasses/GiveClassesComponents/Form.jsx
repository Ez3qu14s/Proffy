import React, { useRef } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import { dias, materias } from '../selectMocks';
import InfoAulas from './InfoAulas';
import FooterForm from './FooterForm';

function Form() {
  const [materiaSelect, setMateriaSelect] = React.useState(null);
  const [diaSelect, setDiaSelect] = React.useState(null);
  const a = useRef(null);

  function handleClick() {
    console.log(a.current);
  }

  return (
    <div className="form container-primary limit">
      <form className="" onSubmit={(event) => event.preventDefault()}>
        <div className="container-primary">
          <h2>Seus dados</h2>
          <hr />

          <Input label="Nome completo" type="text" />
          <div className="grid">
            <Input
              label="Link da sua foto"
              sublabel="(comece com //http)"
              type="text"
            />
            <Input label="Whatsapp" type="tel" />
          </div>

          <Textarea label="Biografia" sublabel="Máximo 300 caracteres" />

          <h2>Sobre a aula</h2>
          <hr />
          <Select
            label="Matéria"
            options={materias}
            setValueSelect={setMateriaSelect}
            placeholder="Selecione qual você quer ensinar"
          />
          <Input label="Custo da sua hora por aula" type="number" />

          <div className="header_horarios">
            <h2>Horários disponíveis</h2>

            <button ref={a} className="add_time desktop">
              + Novo horário
            </button>
          </div>
          <hr />

          <div className="horarios">
            <InfoAulas ref={a} dias={dias} setDiaSelect={setDiaSelect} />
            <button onClick={handleClick} className="add_time mobile">
              + Novo horário
            </button>
          </div>
        </div>

        <FooterForm />
      </form>
    </div>
  );
}

export default Form;
