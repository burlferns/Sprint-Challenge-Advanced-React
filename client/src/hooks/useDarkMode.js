import {useEffect,useState} from 'react';

export function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useState(initialValue);

  useEffect(()=>{
    const divElm = document.getElementsByClassName("divOfCards");
    if(darkMode) {
      divElm[0].classList.add('dark-mode');
    } else {
      divElm[0].classList.remove('dark-mode');
    }
  },[darkMode])

  return [darkMode,setDarkMode];
} 