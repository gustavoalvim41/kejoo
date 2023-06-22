import React from 'react';
import './styles.sass';

import logoFooter from '../../assets/logo-footer.svg';

import facebook from '../../assets/Facebook.png'
import twitter from '../../assets/Twitter.png'
import instagram from '../../assets/Instagram.png'


const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='kejoo'>
          <div>
            <img
              className='logo'
              src={logoFooter}
              alt='Logo Kejoo'
            />
            <div className='address'>
              <p>+62 877 2789 0900</p>
              <p>Klaten, Gg. Hasana Yahya No. 315 B, RT. 001/RW. 003, Papandayan, Daerah Istimewa Yogyakarta, Indonesia 55161</p>
            </div>
            <div className='social'>
              <button>
                <img src={facebook} alt='facebook' />
              </button>
              <button>
                <img src={twitter} alt='twitter' />
              </button>
              <button>
                <img src={instagram} alt='instagram' />
              </button>
            </div>
          </div>
          <div className='terms'> 
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Testimonial</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms of Services</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Our Works</h4>
              <ul>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Customer</a>
                </li>
                <li>
                  <a>Product</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className='copyright'>© 2023 Kejoo. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;