import React from 'react';
import eli from './Eli.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={eli} className="App-logo" alt="logo" />
        <div className="tagline">
        <h3>Eli Merrell</h3>
        <p>Full Stack Developer based in San Jose, CA</p>
        </div>
        <div className="button-wrapper">
          <button className="btn-primary">
            My Work
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
