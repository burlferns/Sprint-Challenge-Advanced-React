import React from 'react';
import { render } from '@testing-library/react';

import DarkMode from './DarkMode';

import dataObj from "../../../data";

const dataAry = dataObj.data;

test('it checks that all the cards are there', () => {
  const component= render(<DarkMode  data={dataAry}/>);

  const { getByText } = component;
  
  dataAry.forEach( elm => {
    getByText(`Name: ${elm.name}`);
  });
  
});