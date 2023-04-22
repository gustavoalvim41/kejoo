import React from 'react';
import './styles.sass';

import Accordion from '../../../../components/Accordion';

const items = [
  {
    title: 'Ease of Managing Employees',
    content: 'Kejoo app can be used for monitoring on-site employees, remote employees, WFH employees, field teams, sales teams and marketing teams.'
  },
  {
    title: 'Ease of Managing Employees',
    content: 'Kejoo app can be used for monitoring on-site employees, remote employees, WFH employees, field teams, sales teams and marketing teams.'
  },
  {
    title: 'Ease of Managing Employees',
    content: 'Kejoo app can be used for monitoring on-site employees, remote employees, WFH employees, field teams, sales teams and marketing teams.'
  },
]

const Benefits = () => {
  return (
    <section className='benefits'>
      <article>
        <h2>Kejoo app has several benefits for your business</h2>
        <p>Kejoo's complete features make it easier for HRDs to manage and increase employee productivity in various locations. Save time and money.</p>
        <button>Get started</button>
      </article>
      
      <Accordion items={items} />
    </section>
  )
}

export default Benefits;
