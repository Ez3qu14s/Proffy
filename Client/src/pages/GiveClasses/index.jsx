import React from 'react';
import Header from '../../GlobalComponents/Header/Header';
import IntroGiveClasses from './GiveClassesComponents/IntroGiveClasses';
import Form from './GiveClassesComponents/Form';

import './give-classes.css';

function GiveClasses() {
  return (
    <div className="container give-classes">
      <Header />
      <IntroGiveClasses />
      <Form />
    </div>
  );
}

export default GiveClasses;
