import { useState,useEffect } from "react";
import{Routes,Route} from "react-router-dom"
import './output.css';
import Header from './Header';
import Main from './Main';
import Country from './Country';
import { useTheme } from "./context/themeContext";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered,setFiltered]=useState([])
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const{isDark,dStyle,lStyle,toggleTheme}=useTheme();
  
  

  async function fetchingData() {
    const res = await fetch('http://localhost:3500/countries');
    const data = await res.json();
    setCountries(data);
  }
  const filterData=()=>{
    setFiltered(countries.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())&&c.region.toLowerCase().includes(select.toLowerCase())));
  }


  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(()=>{

    setTimeout(()=>{

    filterData()
    },0)
  },[countries,search,select]);
  /* useEffect(()=>{
    setFiltered(countries.filter(country=>(country.region.toLowerCase()).includes(select.toLowerCase())));
  },[select]); */
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main countries={filtered} setSearch={setSearch} setSelect={setSelect} search={search} select={select}/>}/> 
        <Route path="/:id" element={<Country countries={countries}/>}/>
      </Routes>
    </div>
  );
}

export default App;
