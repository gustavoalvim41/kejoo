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

      <div className='cards-pricing'>
        <div className='card'>
          <div className='card-info'>
            <h3>Free</h3>
            <div className='price'>
              <h4>$0</h4>
              <span>/No Limit</span>
            </div>
          </div>
          <ul>
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
            <li>
              <p>Item 3</p>
            </li>
            <li>
              <p>Item 4</p>
            </li>
            <li>
              <p>Item 5</p>
            </li>
          </ul>
          <button>
            Register Now
          </button>
        </div>
        <div className='card'></div>
        <div className='card'></div>
      </div>

    </section>
  )
}

export default Pricing;