import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
