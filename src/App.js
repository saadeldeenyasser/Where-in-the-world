import { useState,useEffect } from "react";
import{Routes,Route} from "react-router-dom"
import './output.css';
import Header from './Header';
import Main from './Main';
import Country from './Country';
import { useTheme,ThemeProvider } from "./context/themeContext";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered,setFiltered]=useState([])
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const{isDark,dStyle,lStyle,toggleTheme}=useTheme();
  
  console.log('dark',isDark);

  async function fetchingData() {
    const res = await fetch('http://localhost:3500/countries');
    const data = await res.json();
    setCountries(data);
  }
  const filterData=()=>{
    setFiltered(countries.filter(c=>c.name.includes(search)&&c.region.includes(select)));
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
    <ThemeProvider>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main countries={filtered} setSearch={setSearch} setSelect={setSelect} search={search} select={select}/>}/> <Route path="/:id" element={<Country countries={countries}/>}/>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
