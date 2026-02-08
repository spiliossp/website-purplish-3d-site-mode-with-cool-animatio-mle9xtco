'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import FloatingShapes from '@/components/FloatingShapes'

export default function Home() {
  return (
    <main className="relative">
      <FloatingShapes />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}