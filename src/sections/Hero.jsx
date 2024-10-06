import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/UseIntersectionObserver';
import './css/hero.css';

export default function Hero() {
  const [isVisible, elementRef] = useIntersectionObserver();
  return (
    <div id="hero" ref={elementRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      
      <div className="taglineSegment">
        <p className='tagline'>#1 content Sharing Platform in Web3</p>
        <h1 className='head1'>Lorem ipsum dolor sit amet.</h1>
        <h1 className='head2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className='title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veniam deserunt, illo dolor exercitationem perferendis?</p>
        <button>Sign Up For Free</button>
      </div>
      
      <div className="displaySegment">
        <div className="left">
          <div className="engagement">Lorem ipsum dolor sit.</div>
          <div className="engagement">Lorem ipsum dolor sit.</div>
        </div>
        <div className="screen"></div>
        <div className="right">
          <div className="engagement">Lorem ipsum dolor sit amet.</div>
          <div className="engagement">Lorem ipsum dolor sit.</div>
        </div>
      </div>
    </div>
  );
}
