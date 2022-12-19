import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import Expenses from './components/Expenses';
import Income from './components/Income';
import { Target } from './components/Target';

function App() {
  return (
    <>
    <header>Budget Application</header>
    <hr />
    <div className='App__container'>
    <div className="App">
      <Income/>
      <Expenses/>
    </div>
    <div className="rightPane_container">
      <Target />
      <Balance/>
    </div>
    </div>
    </>
  );
}

export default App;
