import React from 'react';
import './styles.sass';

import Header from '../../components/Header';

import hero from '../../assets/hero.svg'

const Home = () => {
  return (
    <div className='home'>
      <Header />

      <main>
        <section className='hero'>
          <article className='content'>
            <h1>Manage payroll & HR in your business so easily!</h1>
            <p>Kejoo's complete features make it easier for HRDs to manage and increase employee productivity in various locations. Save time and money.</p>
            <button>Get started</button>
            <div className='numbers'>
              <div>
                <h3>10K+</h3>
                <p>Downloaded</p>
              </div>
              <div>
                <h3>4,3</h3>
                <p>User ratings</p>
              </div>
              <div>
                <h3>300+</h3>
                <p>Company joins</p>
              </div>
            </div>
          </article>
          <article className='hero-img'>
            <img 
              src={hero}
              alt='Hero Kejoo' 
            />
          </article>
        </section>

        <section id='Features' className='features'>
          features
        </section>
      </main>
    </div>
  )
}

export default Home;
