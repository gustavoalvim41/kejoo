import React from 'react';
import './styles.sass';

import Header from '../../components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

const Home = () => {
  return (
    <div className='container'>
      <Header />

      <main>
        <Hero />

        <Features />
        
        <section className='benefits'>
          under construction 🏗️ 🏗️
        </section>
      </main>
    </div>
  )
}

export default Home;
