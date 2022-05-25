import React from "react";
import { BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./footer.styles.scss";
import Logo from "../_common/Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="social-box">
          <div className="inner-contacts-box">
            <h4>Socialize</h4>
            <ul>
              <li>
                <BsYoutube size={30} />
              </li>
              <li>
                <FaFacebookF size={25} />
              </li>
              <li>
                <BsTwitter size={25} />
              </li>
              <li>
                <BsInstagram size={25} />
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
  );
};

export default Footer;
