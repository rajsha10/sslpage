import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/UseIntersectionObserver';
import './css/hero.css';

export default function Hero() {
  const [isVisible, elementRef] = useIntersectionObserver();
  return (
    <div id="hero" ref={elementRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      
      <div className="taglineSegment">
        <p className='tagline'>The Best Content Sharing Platform in Web3</p>
        <h1 className='head1'>Own, Monetize</h1>
        <h1 className='head2'>Share Your Videos with Web3 Power on Switch Social</h1>
        <p className='title'>Switch Social offers flexible licensing and seamless social media integration for creators.</p>
        <button>Switch</button>
      </div>
      
      <div className="displaySegment">
        <div className="left">
        <div className="engagement">
          <img src='/images/creators.svg'></img>
          <span>Content Creators & Freelancers</span> 
        </div>
        <div className="engagement">
          <img src='/images/influencer.svg'></img>
          <span>Social Media Influencers</span>
        </div>
        </div>
        <div className="screen">
          <img src="/images/phoneVector.svg" alt="phone" />
       </div>
        <div className="right">
          <div className="engagement">
            <img src='/images/markets.svg'></img>
            <span>Businesses & Marketers</span>
          </div>
          <div className="engagement">
            <img src='/images/consumer.svg'></img>
            <span>Video Consumers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
