import React from 'react';
import './styles.sass';

import logo from '../../assets/logo.svg';
import { BiMenu } from 'react-icons/bi';

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
              <a href='#Features'>Features</a>
            </li>
            <li>
              <a href='#Price'>Price</a>
            </li>
            <li>
              <a href='#Blog'>Blog</a>
            </li>
          </ul>
        </nav>

        <div className='buttonsWrapper'>
          <a>Login</a>

          <button>Register</button>
        </div>

        <button className='menu-mobile'>
          <BiMenu 
            size={36}
            color='#000'
          />
        </button>
      </div>
    </header>
  )
}

export default Header;
