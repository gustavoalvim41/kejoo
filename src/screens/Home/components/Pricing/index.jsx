import React, { useState } from 'react';
import './styles.sass';

import Switch from '../../../../components/Switch';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section className='pricing'>
      <div className='title-subtitle'>
        <h2>Price we offer</h2>
        <p>Get the best package offer based on your business needs, regardless of the number of employees.</p>
      </div>
      
      <Switch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />

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
        <div className='card'>
          <div className='card-info'>
            <h3>Standard</h3>
            <div className='price'>
              <h4>${isMonthly ? '9.99' : '39.99'}</h4>
              <span>/{isMonthly ? 'Month' : 'Year'}</span>
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
            Try it free
          </button>
        </div>
        <div className='card'>
          <div className='card-info'>
            <h3>Pro</h3>
            <div className='price'>
              <h4>${isMonthly ? '19.99' : '69.99'}</h4>
              <span>/{isMonthly ? 'Month' : 'Year'}</span>
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
            Try it free
          </button>
        </div>
      </div>

    </section>
  )
}

export default Pricing;