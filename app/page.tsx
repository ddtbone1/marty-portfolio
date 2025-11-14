'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import About from '@/components/about'
import Contact from '@/components/contact'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      <Navigation scrollY={scrollY} />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
