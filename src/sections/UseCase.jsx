import React from 'react';
import { useIntersectionObserver } from '../hooks/UseIntersectionObserver';
import './css/useCase.css';

export default function UseCase() {
  const [isVisible, elementRef] = useIntersectionObserver();

  return (
    <div id='useCase' ref={elementRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="useInfo">
        <h1>A better way to be a creator!</h1>
        <p>Designed to make money from your content</p>
      </div>
      <div className="infoSlides">
        <div className="twoSlides">
          <div className="slide">
            <h3>Monetize Your content through out liks!</h3>
            <img src="/images/monetize.svg" alt="" />
          </div>
          <div className="slide">
            <h3>Showcase your talent.</h3>
            <img src="/images/talent.svg" alt="" />
          </div>
        </div>
        <div className="singleSlide">
          <div className="infoButton">
            <h3>Earn switch Tokens</h3>
            <p>Users on Switch Social can earn by purchasing or licensing video content for their projects, using it for marketing campaigns, social media, or personal use. Additionally, businesses can subscribe to plans for regular content access, benefiting from cost-effective and high-quality video resources.</p>
            <button>Learn More</button>
          </div>
          <img src="/images/earn.svg" alt="" />
        </div>
      </div>
      <button className='Download'>Download The APP Now </button>
    </div>
  )
}
