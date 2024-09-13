import React, { useEffect } from 'react'

import {MdOutlineLightMode,MdNightlightRound} from "react-icons/md";
import { useTheme } from './context/themeContext';



const Header = () => {
  const{isDark,toggleTheme}=useTheme();
  useEffect(()=>{
      const toggleTheme=()=>{
      const root=document.documentElement;
      root.style.setProperty('--primaryColor',(isDark)?"hsl(209, 23%, 22%)":"hsl(0, 0%, 96%)")
      root.style.setProperty('--secondaryColor',(isDark)?" hsl(207, 26%, 17%)":"hsl(0, 0%, 100%)")
      root.style.setProperty('--textColor',(isDark)?" hsl(0, 0%, 100%)":"hsl(0, 0%, 52%)")
    }
    toggleTheme()
  },[isDark])
  return (
    <header id='header'>
        <h1>Where in the world?</h1>
        <div id='toglComp'>
        {(isDark)? <MdNightlightRound style={{}}/>:<MdOutlineLightMode/>}
        <button  id="toggle" onClick={()=>{toggleTheme()}}>{(isDark)?"Light":"Dark"}</button>
        </div>
    </header>
  )
}

export default Header