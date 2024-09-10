import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import './output.css';

const Country = ({countries}) => {
  const navigate=useNavigate(); 

  const {id} =useParams();
  console.log('unique',id);

  const temp=countries.filter(country=>country.name===id);
  console.log("temp",temp);
  const country=temp[0];
/*   const [country]=temp; */
  console.log('data',country);
  console.log(country.flag);
  console.log(country.name);

  const handleBorders = (cntrs,rgn,abbr) =>{
    const borders = cntrs.filter(cntr => cntr.region === rgn);
    for(let a of abbr){
      for(let c of borders){
        return (c.alpha3Code === a )? `<li>${c.alpha3Code}</li>`:null;
      }
    }
  }
  const handleBack=()=>{
    navigate(-1);
  }
  return (
    <main id="country">
      <button id="back" onClick={()=>{handleBack()}}>Back</button>
      <section id='details'>
        <img src={country.flag} alt={`${country.name} flag`} id="full"/>
        <div id="content">
          <h2>{country?.name}</h2>
          <p className="data"><strong>Native Name :</strong>{country?.nativeName}</p>
          <p className="data"><strong>Top Level Domain :</strong>{country?.topLevelDomain}</p>
          <p className="data"><strong>Population :</strong>{country?.population}</p>
          <p className="data"><strong>currencies :</strong>{country?.currencies?.map(curr=>`${curr.name} `)}</p>
          <p className="data"><strong>Region :</strong>{country?.region}</p>
          <p className="data"><strong>Language :</strong>{country?.languages?.map(lang=>`${lang.name} `)}</p>
          <p className="data"><strong>Sub Region :</strong>{country?.subregion}</p>
          <p className="data"><strong>Capital :</strong>{country?.capital}</p>
          <p id="borders"><strong>Border Countries : {country.borders&&countries.map(c=>country?.borders.map(b=>(c?.alpha3Code===b)?<span className='brdr'>{`${c.name} `}</span>:null))}</strong>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Country
