import React from 'react';
import './App.css';
import MainContain from './componenet/MainContain';
import Footer from './componenet/Footer';
import Header from './componenet/Header';

import OurServices from './pages/OurServices';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <div className = 'container'>
        <Header/>
        <MainContain/>
        <Footer/>
      </div>
      
      <div className = "pages">
        <Home/>
        <OurServices/>
        <About/>
        <Contact/>
        </div>
      </>
    );
    
}

export default App;
