import React from 'react';
import './styles.sass';

import Switch from '../../../../components/Switch';

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