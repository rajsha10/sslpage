import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/UseIntersectionObserver';
import './css/threeD.css'

export default function ThreeD() {
    const [bit1Transform, setBit1Transform] = useState('');
  const [bit2Transform, setBit2Transform] = useState('');
  const [bitJiggle, setBitJiggle] = useState('');
  const [isVisible, elementRef] = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Jiggle and 3D rotate effect for bit1 and bit2
      const bitJiggle = `translateY(${Math.sin(scrollY * 0.02) * 20}px)`;

      setBitJiggle(bitJiggle);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='threeD' ref={elementRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      {/* Apply dynamic transform styles to the images */}
      <img src="/images/bit.png" className="d3" id="bit1" alt="" style={{ transform: bitJiggle }} />
      <img src="/images/bit.png" className="d3" id="bit2" alt="" style={{ transform: bitJiggle }} />
      <img src="/images/sol.png" className="d3" id="sol1" alt="" style={{ transform: bitJiggle }} />
      <img src="/images/arrow.png" className="d3" id="arrow" alt="" style={{ transform: bitJiggle }} />
      <img src="/images/heart.png" className="d3" id="heart1" alt="" style={{ transform: bitJiggle }} />
      <img src="/images/heart.png" className="d3" id="heart2" alt="" style={{ transform: bitJiggle }} />
    </div>
  )
}
