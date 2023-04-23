import React from 'react';
import './styles.sass';

import Header from '../../components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />

      <main>
        <div className='container'>
          <Hero />

          <Features />

          <Benefits />

          <Pricing />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home;
