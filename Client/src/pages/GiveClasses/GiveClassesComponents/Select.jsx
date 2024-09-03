import React from 'react';
import Select from 'react-select';

const customStyles = {
  container: (provided) => ({
    ...provided,
    fontSize: '1.2rem',
    fontFamily: '"Poppins", sans-serif',
    color: '#C1BCCC',
    border: '1px solid #ccc',
    borderRadius: 4,
    boxShadow: 'none', // Remove a sombra padrão
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#6A6180',
    fontWeight: 600,
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '1.2rem',

    fontFamily: '"Poppins", sans-serif',
    backgroundColor: state.isSelected ? '#EBEBF5' : '#fff',
    color: state.isSelected ? '#6A6180' : '#000',
    fontWeight: state.isSelected ? '600' : '500',
    borderLeft: state.isSelected ? '2px solid #8257E5' : '2px solid #fff',
    '&:hover': {
      backgroundColor: '#EBEBF5',
      cursor: 'pointer',
    },
    padding: '1.2rem',
  }),
};

function SelectInput({ label, value, setValueSelect, options, placeholder }) {
  return (
    <label>
      {label}
      <Select
        className="select"
        defaultValuevalue={null}
        value={value}
        onChange={({ value }) => setValueSelect(value)}
        styles={customStyles}
        options={options}
        placeholder={placeholder}
      />
    </label>
  );
}

export default SelectInput;
