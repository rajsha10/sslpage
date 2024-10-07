import React, { useState } from 'react';
import './css/navigation.css';

export default function Navigation() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        console.log('Wallet address:', response.publicKey.toString());
      } catch (err) {
        console.error('Connection failed:', err);
      }
    } else {
      alert('Phantom wallet not found. Please install the Phantom extension.');
    }
  };

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
          <li>Pricing</li>
        </ul>
      </div>
      <div className="signOptions">
        {walletAddress ? (
          <button className='signIn'>Wallet: {walletAddress}</button>
        ) : (
          <button className='signIn' onClick={connectWallet}>Connect Phantom</button>
        )}
      </div>
    </nav>
  );
}
