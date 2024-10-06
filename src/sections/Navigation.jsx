import React from 'react'
import { Link } from 'react-router-dom';
import './css/navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="navMenu">
        <ul>
            <li>Download</li>
            <li>Features</li>
            <li>Integrations</li>
            <li>pricing</li>
        </ul>
      </div>
      <div className="signOptions">
        <button className='signUp'>Sign Up</button>
        <button className='signIn'>Sign In</button>
      </div>
    </nav>
  )
}
