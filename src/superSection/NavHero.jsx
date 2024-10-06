import React from 'react'
import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import './navHero.css'

export default function navHero() {
  return (
    <div className="superSection">
        <Navigation />
        <Hero />
    </div>
  )
}
