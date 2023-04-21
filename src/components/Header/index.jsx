import React from 'react';
import './styles.sass';

import logo from '../../assets/logo.svg';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
  return (
    <header className='header'>
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

      <button className='menu-mobile'>
        <BiMenu 
          size={42}
          color='#000'
        />
      </button>
    </header>
  )
}

export default Header;
