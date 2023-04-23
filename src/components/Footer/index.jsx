import React from 'react';
import './styles.sass';

import logoFooter from '../../assets/logo-footer.svg';

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
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className='terms'> 
            <div>
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Testimonial</li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
              </ul>
            </div>
            <div>
              <h4>Our Works</h4>
              <ul>
                <li>Pricing</li>
                <li>Customer</li>
                <li>Product</li>
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