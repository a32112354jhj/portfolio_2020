import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { HashRouter, Route, Link } from 'react-router-dom';
import Page01 from './page/page01';


function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
