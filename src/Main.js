import React from "react";

import { Link } from "react-router-dom";
import { useTheme } from "./context/themeContext";

const Main = ({ countries, setSelect, select, setSearch, search }) => {
  const {isDark,dStyle,lStyle}=useTheme();

  return countries.length > 0 ? (
    <main id="main">
      <section id="filters">
        <label htmlFor="srch">Countries search</label>
        <input
          type="text"
          placeholder="Search"
          value={search}
          name="search"
          id="srch"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="Select the Region"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option disabled>Fitler By Region</option>
          <option name="Africa" value="Africa">
            Africa
          </option>
          <option name="Asia" value="Asia">
            Asia
          </option>
          <option name="Europe" value="Europe">
            Europe
          </option>
          <option name="America" value="America">
            America
          </option>
          <option name="Oceania" value="Oceania">
            Oceania
          </option>
        </select>
      </section>
      <section id="countries">
        {countries.map((country, index) => (
          <Link to={`/${country.name}`} key={index} className="card">
            <div className="country">
              <img src={country.flag} alt={`${country.name} flag`} />
              <h2>{country.name}</h2>
              <p>
                <strong>Population :</strong> {country.population}
              </p>
              <p>
                <strong>Region :</strong> {country.region}
              </p>
              <p>
                <strong>Capital :</strong> {country.capital}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  ) : (
    <main id="main">
      <p>loading...</p>
    </main>
  );
};

export default Main;
