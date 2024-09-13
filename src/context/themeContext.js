import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(true);
  const dStyle = {
    backgroundColor: "#f0f0f0",
    color: "#000",
  };
  const lStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };
  const toggleTheme=()=>{
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{isDark,toggleTheme,dStyle,lStyle}}>
     {children}
     </ThemeContext.Provider>
  )}

  const useTheme=()=>{
    return useContext(ThemeContext)
  }

  export {ThemeProvider,useTheme};


