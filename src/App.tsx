import React from 'react';
import './App.css';
import { useStore } from './store';
import shallow from "zustand/shallow"

function App() {
  // Solo Pick
  const countriesSoloPick = useStore(state => state.countries)
  //Multiple State Pick Example:
  const { countries, languages } = useStore(state => ({
    countries: state.countries, languages: state.languages
  }), shallow)
  // On Click Event Method
  const getAllCountries = useStore(state => state.getAllCountries)
  const styles = countries.length > 0 ? "countries-container" : ""

  return (
    <div className="App">
      <header className="App-header">
        <ul className={styles}>
          { countries.map( country => {
            return (
              <li> {country} </li>
            )
          })}
        </ul>
        <a className="getcountriesbutton" onClick={getAllCountries}>
          Get All Countries
        </a>
        <p> Available languages: {languages.join(", ")}</p>
      </header>
    </div>
  );
}

export default App;
