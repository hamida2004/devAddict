import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false; // Default to false (light mode)
  });
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
