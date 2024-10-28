import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accordions from './components/Accordions';
import Carousel from './components/Carousel';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Carousel />
      <Accordions />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
