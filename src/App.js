import React from 'react';
import './App.css';
import MainContain from './componenet/MainContain';
import Footer from './componenet/Footer';
import Header from './componenet/Header';

function App() {
  return (
      <div className = 'container'>
        <Header/>
        <MainContain/>
        <Footer/>
      </div>
      
    );
}

export default App;
