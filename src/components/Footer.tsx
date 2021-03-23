import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contents">
        <p className="footer__text"> Questions? Contact us. </p>
        <br />
        <div className="footer__lists">
          <ul className="footer__list">
            <li className="footer__list-item">
              <p>FAQ</p>
            </li>
            <li className="footer__list-item">
              <p>Investor Relations</p>
            </li>
            <li className="footer__list-item">
              <p>Privacy</p>
            </li>
            <li className="footer__list-item">
              <p>Speed Test</p>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item">
              <p>Help Center</p>
            </li>
            <li className="footer__list-item">
              <p>Jobs</p>
            </li>
            <li className="footer__list-item">
              <p>Cookie Preferences</p>
            </li>
            <li className="footer__list-item">
              <p>Legal Notices</p>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item">
              <p>Account</p>
            </li>
            <li className="footer__list-item">
              <p>Ways to Watch</p>
            </li>
            <li className="footer__list-item">
              <p>Coperate Information</p>
            </li>
            <li className="footer__list-item">
              <p>Netflix Orignals</p>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item">
              <p>Media Center</p>
            </li>
            <li className="footer__list-item">
              <p>Terms of Use</p>
            </li>
            <li className="footer__list-item">
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
        <br />
        <p className="footer__text">Netflix&trade;</p>
      </div>
    </footer>
  );
}

export default Footer;
