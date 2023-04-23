import React from 'react';
import './styles.sass';

const Switch = () => {
  return (
    <div className='switch-wrapper'>
      <p>Monthly</p>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <p>Annualy</p>
    </div>
  )
} 

const Pricing = () => {
  return (
    <section className='pricing'>
      <div className='title-subtitle'>
        <h2>Price we offer</h2>
        <p>Get the best package offer based on your business needs, regardless of the number of employees.</p>
      </div>
      
      <Switch />

      
    </section>
  )
}

export default Pricing;