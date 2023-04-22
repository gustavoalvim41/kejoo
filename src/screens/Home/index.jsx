import React from 'react';
import './styles.sass';

import Header from '../../components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';

const Home = () => {
  return (
    <div className='container'>
      <Header />

      <main>
        <Hero />

        <Features />
        
        <Benefits />

        <Pricing />
      </main>
    </div>
  )
}

export default Home;
