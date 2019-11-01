import React from 'react';
import { render } from '@testing-library/react';

import PlayerCard from './PlayerCard';

import dataObj from "../../../data";

const dataAry = dataObj.data;

const dataPlayer = dataAry[0];

test('it checks that a card has the proper text', () => {
  const component= render(<PlayerCard  playerData={dataPlayer}/>);

  const { getByText } = component;
  
  getByText(`Name: ${dataPlayer.name}`);
  getByText(`Country: ${dataPlayer.country}`);
  
  
});