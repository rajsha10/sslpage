import { useState } from 'react'
import { BrowserRouter as Route, Routes, Router } from 'react-router-dom'
import NavHero from './superSection/NavHero';
import UseCase from './sections/UseCase';
import Integrations from './sections/Integrations';
import Download from './sections/Download';
import './App.css'
import Footer from './sections/Footer';
import ThreeD from './components/ThreeD';

function App() {
  return (
    <>
    <NavHero />
    <ThreeD />
    <UseCase />
    <Integrations />
    <Download />
    <Footer />
    </>
  )
}

export default App
