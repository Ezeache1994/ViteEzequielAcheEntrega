// ButtonDark.jsx
import React from 'react';
import { useTheme } from './DarkMode';
import "./ButtonDark.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faSun,faMoon} from '@fortawesome/free-solid-svg-icons';
export default function ButtonDark() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button className='DarkButton' onClick={toggleDarkMode}>
      {isDarkMode ? <div style={{display:"flex", alignItems:"center", textAlign:"center"}}><FontAwesomeIcon style={{fontSize:"18px"}} icon={faSun} />  </div> : <><FontAwesomeIcon icon={faMoon} /> </> }
    </button>
  );
}




