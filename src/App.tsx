import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>Click me!</Button>
      </header>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button>Click me!</Button>
        </header>
        
      </div>
    </div>
  );
}

export default App;
