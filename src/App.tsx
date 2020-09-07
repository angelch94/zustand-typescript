import React from 'react';
import './App.css';
import { useStore } from './store';

function App() {
  const countries = useStore(state => state.countries)
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
      </header>
    </div>
  );
}

export default App;
