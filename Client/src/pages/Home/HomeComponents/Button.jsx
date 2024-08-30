import React from 'react';
import { Link } from 'react-router-dom';

import estudar from '../../../assets/images/icons/estudarIcon.svg';
import darAulas from '../../../assets/images/icons/darAulasIcon.svg';

function Button({ text, page }) {
  return (
    <Link to={`/${page}`} className={`button ${page}`}>
      <img src={page === 'study' ? estudar : darAulas} alt="" />
      {text}
    </Link>
  );
}

export default Button;
