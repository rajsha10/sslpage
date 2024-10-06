import React from 'react';
import tileData from '../assets/data';
import { useIntersectionObserver } from '../hooks/UseIntersectionObserver';
import './css/tiles.css'

export default function Tiles() {
  const [isVisible, elementRef] = useIntersectionObserver();

  return (
    <div id="tileContainer" ref={elementRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      {tileData.map((tile) => (
        <div key={tile.id} className="tile">
          <h3>{tile.title}</h3>
          <p>{tile.description}</p>
        </div>
      ))}
    </div>
  )
}
