import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './samples/p3';
import BasicstatsList from './samples/basicstats-class-List';

function App() {
  return (
    <div className="App">
      <h1 style={{color:'green', border: "solid black", padding : "1%"}}> Report Card'22 for AMS Basic </h1>
     
     <BasicstatsList />
    </div>
  );
}

export default App;
