import React from 'react';
import './assets/fonts.css';
import './App.css';
import Board from "./components/Board";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Board></Board>
      </header>
    </div>
  );
}

export default App;
