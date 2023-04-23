import React from 'react';
import './styles.sass';

const Switch = ({isMonthly, setIsMonthly}) => {

  const toggleSwitch = () => {
    setIsMonthly(!isMonthly)
  }
  
  return (
    <div className='switch-wrapper'>
      <p>Monthly</p>
      <label className="switch">
        <input type="checkbox" onClick={toggleSwitch} />
        <span className="slider round"></span>
      </label>
      <p>Annualy</p>
    </div>
  )
} 

export default Switch;