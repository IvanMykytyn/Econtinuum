import React from 'react'
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import './footer.styles.scss'
import Logo from '../_common/Logo/Logo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="social-box">
          <div className="inner-contacts-box">
            <h4>Socialize</h4>
            <ul>
              <li>
                <a href="https://www.youtube.com/">
                  <BsYoutube size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF size={25} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <BsTwitter size={25} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <BsInstagram size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contacts-box">
          <h4>Contact us</h4>
          <ul>
            <li>econtinuum@gmail.com</li>
            <li>+380 334 342 437</li>
          </ul>
        </div>
        <div className="logo-box">
          <Logo />
        </div>
        <div className="copyright-box">
          <p>© 2022 Econtinuum</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
