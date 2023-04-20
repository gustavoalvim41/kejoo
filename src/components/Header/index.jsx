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

        <nav>
          <ul>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Price</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </nav>

        <div className='buttonsWrapper'>
          <a>Login</a>
          
          <button>Register</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
