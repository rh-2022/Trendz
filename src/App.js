import React from 'react';
import StockData from './StockData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robinhood Clone</h1>
      </header>
      <main>
        <StockData ticker="AAPL" />
      </main>
    </div>
  );
}

export default App;
