import React from "react";
import { BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-box">
        <h1>Site Name</h1> {/* TODO Logo component */}
      </div>
      <div className="contacts-box">
        <h4>Contacts</h4>
        <ul>
          <li>Econtinuum@gmail.com</li>
          <li>+380 123 456 789</li>
          <li>+380 341 599 124</li>
        </ul>
      </div>
      <div className="social-box">
        <h4>Social</h4>
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
      <div className="copyright-box">
        <p>© 2022 Econtinuum</p>
      </div>
    </footer>
  );
};

export default Footer;
