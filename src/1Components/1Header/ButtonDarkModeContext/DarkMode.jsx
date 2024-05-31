import "./DarkMode.css";
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`AllWebDarkLightMode ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};




