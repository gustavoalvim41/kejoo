import React from 'react';
import './styles.sass';

import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <img 
          src={logo} 
          alt='Logo Kejoo' 
        />

        <ul>
          <li>
            <a href='#Features'>Features</a>
          </li>
          <li>
            <a href='#'>Price</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </ul>

        <div className='buttonsWrapper'>
          <a href='#'>Login</a>
          
          <button>Register</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
