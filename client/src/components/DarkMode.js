import React from 'react';
import './DarkMode.css';
import Button from './Button';
import {useDarkMode} from '../hooks/useDarkMode';

import PlayerCard from './PlayerCard';

export default function DarkMode({data}) {
  const [darkMode,setDarkMode] = useDarkMode(false);

  function tgglDMode() {
    setDarkMode(!darkMode);
  }


  return ( <>
    <div className="tglBtn">
      <Button textDisplay="Toggle card dark mode" runFunc={tgglDMode} />
      <p className="statusDM">{`Dark Mode:${darkMode?"ON":"OFF"}`}</p>
    </div>
        
    <div className="divOfCards">
      {data.map( elm => 
        <PlayerCard key={elm.id} playerData={elm}/>
      )}
    </div>
  
  </>)
  
}