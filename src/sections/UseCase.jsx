import React from 'react';
import { useIntersectionObserver } from '../hooks/UseIntersectionObserver';
import './css/useCase.css';

export default function UseCase() {
  const [isVisible, elementRef] = useIntersectionObserver();

  return (
    <div id='useCase' ref={elementRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="useInfo">
        <h1>A better way to be a creator.</h1>
        <p>Designed to make money from your content</p>
      </div>
      <div className="infoSlides">
        <div className="twoSlides">
          <div className="slide">
            <h3>Monetize Your content through out links.</h3>
            <img src="" alt="" />
          </div>
          <div className="slide">
            <h3>Showcase your talent.</h3>
            <img src="" alt="" />
          </div>
        </div>
        <div className="singleSlide">
          <div className="infoButton">
            <h3>Earn switch Tokens</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, doloribus!</p>
            <button>Learn More</button>
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <button className='Download'>Download The APP Now </button>
    </div>
  )
}
