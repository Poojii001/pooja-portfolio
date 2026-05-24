import React from 'react'
import About from '../Components/About'
import Hero from '../Components/Hero'
import Stats from '../Components/Stats'
import Team from '../Components/Team'

export default function AboutPage() {
  return (
    <>
    <Hero title="About Us" />
        <About />
        <Stats />
        <Team />
    </>
  )
}
