// ButtonDark.jsx
import React from 'react';
import { useTheme } from './DarkMode';
import "./ButtonDark.css"

export default function ButtonDark() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button className='DarkButton' onClick={toggleDarkMode}>
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}




