import React, { forwardRef } from 'react';
import Input from './Input';
import Select from './Select';

const InfoAulas = forwardRef(({ dias, setDiaSelect }, ref) => {
  return (
    <div ref={ref} className="flex">
      <Select
        label="Dia da semana"
        options={dias}
        setValueSelect={setDiaSelect}
        placeholder="Selecione o dia"
      />
      <div className="time">
        <Input label="Das" type="time" />
        <Input label="Até" type="time" />
      </div>
    </div>
  );
});

export default InfoAulas;
