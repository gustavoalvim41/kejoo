import React from 'react';
import './styles.sass';

import Header from '../../components/Header';

const Home = () => {
  return (
    <div className='home'>
      <Header />

      <main>
        <section className='hero'>
        hero
        </section>

        <section id='Features' className='features'>
        features
        </section>
      </main>
    </div>
  )
}

export default Home;
