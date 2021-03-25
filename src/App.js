import React from 'react';
import Arrived from './components/Arrived.js';
import Browse from './components/Browse.js';
import Clients from './components/Clients.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import AsideMenu from './components/AsideMenu.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Browse/>
    <Arrived/>
    <Clients/>
    <AsideMenu/>
    <Footer/>
    </>

  );
}

export default App;
