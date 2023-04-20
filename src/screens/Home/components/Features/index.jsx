import React from 'react';
import './styles.sass';

import { BiDollarCircle, BiCalendar, BiBriefcase, BiAnalyse } from 'react-icons/bi';

const Features = () => {
  return (
    <section id='Features' className='features'>
      <h2>Features of Kejoo app</h2>
      <p className='sub-title'>Kejoo provides many app features to make it easier for companies to manage company performance.</p>
      <div className='cards'>
        <div className='card'>
          <div className='box-icon'>
            <BiDollarCircle 
              size={36}
              className='icon'
            />
          </div>
          <h3>Calculate salary and other benefits</h3>
          <p>Kejoo's employee payroll system is accessed online, making it easy to calculate salaries with various benefit components.</p>
        </div>
        <div className='card'>
          <div className='box-icon'>
            <BiCalendar 
              size={36}
              className='icon'
            />
          </div>
          <h3>Record employee attendance</h3>
          <p>Optimized employee information and attendance recording and easy to calculate online attendance directly from the app.</p>
        </div>
        <div className='card'>
          <div className='box-icon'>
            <BiBriefcase 
              size={36}
              className='icon'
            />
          </div>
          <h3>Managing work patterns</h3>
          <p>Companies can implement various working hour regulations. With Kejoo's, managing working hours becomes easier.</p>
        </div>
        <div className='card'>
          <div className='box-icon'>
            <BiAnalyse 
              size={36}
              className='icon'
            />
          </div>
          <h3>Analyze employee performance</h3>
          <p>There is a real-time employee performance analysis feature in one place. Such as productivity data on the app.</p>
        </div>
      </div>
    </section>
  )
}

export default Features;
