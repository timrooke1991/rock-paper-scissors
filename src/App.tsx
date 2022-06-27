import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { Score } from './components/Score';


function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '450px',
        padding: '12px 16px',
        borderRadius: '10px',
        border: 'solid 2px hsl(217, 16%, 45%)'
      }}>
        <AppHeader title="Rock, Paper, Scissors" />
        <Score score={10} />
      </div>
    </div>
  );
}

export default App;
