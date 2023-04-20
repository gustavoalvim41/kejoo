import React from 'react';
import './styles.sass';

import hero from '../../../../assets/hero.svg'

const Hero = () => {
  return (
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
      <article className='banner'>
        <img
          src={hero}
          alt='Banner Kejoo'
        />
      </article>
    </section>
  )
}

export default Hero;
