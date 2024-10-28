import React, { useEffect } from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accordions from './components/Accordions';
import Carousel from './components/Carousel';
import ResumeDisplay from './components/ResumeDisplay';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Carousel />
      <ResumeDisplay />
      <Accordions />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
