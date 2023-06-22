import React, { useState } from 'react';
import './styles.sass';

import Switch from '../../../../components/Switch';
import { BiCheck } from 'react-icons/bi';


const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section id='Price' className='pricing'>
      <div className='title-subtitle'>
        <h2>Price we offer</h2>
        <p>Get the best package offer based on your business needs, regardless of the number of employees.</p>
      </div>
      
      <Switch 
        isMonthly={isMonthly} 
        setIsMonthly={setIsMonthly} 
      />

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
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Maximum 2 employees</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>1 attendance location</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>1 Administrator</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Dedicated CS manager</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Training online</p>
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
              <h4>${isMonthly ? '9.99' : '49.99'}</h4>
              <span>/{isMonthly ? 'Month' : 'Year'}</span>
            </div>
          </div>
          <ul>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Maximum 2 employees</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>1 attendance location</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>1 Administrator</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Dedicated CS manager</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Training online</p>
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
              <h4>${isMonthly ? '19.99' : '89.99'}</h4>
              <span>/{isMonthly ? 'Month' : 'Year'}</span>
            </div>
          </div>
          <ul>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Maximum 2 employees</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>1 attendance location</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>1 Administrator</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Dedicated CS manager</p>
            </li>
            <li>
              <div className='icon-box'>
                <BiCheck 
                  size={20}
                  className='icon'
                />
              </div>
              <p>Training online</p>
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