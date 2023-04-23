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

export default Switch;