import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme=()=>{
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{isDark,toggleTheme}}>
     {children}
     </ThemeContext.Provider>
  )}

  const useTheme=()=>{
    return useContext(ThemeContext)
  }

  export {ThemeProvider,useTheme};


