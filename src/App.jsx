import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App
