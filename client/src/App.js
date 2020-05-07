import React from 'react';
import './App.css';
import AppNavbar from "./components/AppNavbar"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar/>
      </header>
    </div>
  );
}

export default App;
