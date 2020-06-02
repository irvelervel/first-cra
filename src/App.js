import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'

const style = { border: '2px solid white', padding: '1rem' }

const App = () => {
  return (
    // JSX
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span className="red">HELLO</span>
        <p>
          HELLO STRIVERS!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent
          rocket="SOME TEXT"
          spaceship="SPACESHIP"
        />
        <MyComponent
          rocket="OTHER TEXT"
          spaceship="SPACESHIP"
        />
        <MyComponent
          spaceship="SPACESHIP"
        />
        <a
          href="/"
        >CONTENT</a>
      </header>
    </div>
  );
}

export default App;
