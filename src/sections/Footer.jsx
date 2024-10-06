import React from 'react';
import './css/footer.css';
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footLogo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="socials">
        <p>@2024 Switch Social</p>
        <p>|</p>
        <div className="icons">
          <a href="" target='_blank'>
            <FaXTwitter color='white' />
          </a>
          <a href="" target='_blank'>
            <FiYoutube color='white' />
          </a>
          <a href="" target='_blank'>
            <FiInstagram color='white' />
          </a>
        </div>
      </div>
    </div>
  )
}
