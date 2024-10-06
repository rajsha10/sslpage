import React from 'react';
import { useIntersectionObserver } from '../hooks/UseIntersectionObserver';
import './css/download.css';

export default function Download() {
  const [isVisible, elementRef] = useIntersectionObserver();

  return (
    <div id="download" ref={elementRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="dArea">
            <h3>Explore and be one of the first Switch Creator!</h3>
            <button>Download App</button>
        </div>
    </div>
  )
}
