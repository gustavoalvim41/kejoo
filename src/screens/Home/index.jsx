import React from 'react';
import './styles.sass';

import Header from '../../components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

const Home = () => {
  return (
    <div className='home'>
      <Header />

      <main>
        <Hero />

        <Features />
        
        <section className='benefits'>
          benefits
        </section>
      </main>
    </div>
  )
}

export default Home;
