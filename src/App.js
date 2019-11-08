import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from  "./clock/clock";
import Button from "./components/button/button";
import Products from './components/products/index';

let time = new Date().toLocaleString();

function App() {
  return (
    <div className="App">
        <Clock time = {time} />
        <Products />
    </div>
  );
}

export default App;
