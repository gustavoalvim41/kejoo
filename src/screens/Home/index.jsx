import React from 'react';
import './styles.sass';

import Header from '../../components/Header';

import hero from '../../assets/hero.svg'
import dolar from '../../assets/dollar.svg'

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
          <article className='banner'>
            <img 
              src={hero}
              alt='Hero Kejoo' 
            />
          </article>
        </section>

        <section id='Features' className='features'>
          <h2>Features of Kejoo app</h2>
          <p className='description'>Kejoo provides many app features to make it easier for companies to manage company performance.</p>
          <div className='cards'>
            <div className='card'> 
              <div className='box-icon'>
                <img 
                  src={dolar} 
                  alt='' 
                />
              </div>
              <h3>Calculate salary and other benefits</h3>
              <p>Kejoo's employee payroll system is accessed online, making it easy to calculate salaries with various benefit components.</p>
            </div>
            <div className='card'> 
              <div className='box-icon'>
                <img 
                  src={dolar} 
                  alt='' 
                />
              </div>
              <h3>Record employee attendance</h3>
              <p>Optimized employee information and attendance recording and easy to calculate online attendance directly from the app.</p>
            </div>
            <div className='card'> 
              <div className='box-icon'>
                <img 
                  src={dolar} 
                  alt='' 
                />
              </div>
              <h3>Calculate salary and other benefits</h3>
              <p>Kejoo's employee payroll system is accessed online, making it easy to calculate salaries with various benefit components.</p>
            </div>
            <div className='card'> 
              <div className='box-icon'>
                <img 
                  src={dolar} 
                  alt='' 
                />
              </div>
              <h3>Calculate salary and other benefits</h3>
              <p>Kejoo's employee payroll system is accessed online, making it easy to calculate salaries with various benefit components.</p>
            </div>
          </div>
        </section>
        <section className='benefits'>
          benefits
        </section>
      </main>
    </div>
  )
}

export default Home;
