import React from 'react';
import logo from './logo.svg';
import './src/App.css';
import './Header.js';
import './ReadingList';
import './ReadingForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Header />
          <ReadingList />
          <ReadingForm />
        </p>
      </header>
    </div>
  );
}

export default App;
