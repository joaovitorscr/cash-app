'use client'

import { HeroSection } from '@/components/landing-page/sections/hero-section'
import { PlansSection } from '@/components/landing-page/sections/plans-section'
import { ProductsSection } from '@/components/landing-page/sections/products-section'
import { Navbar } from '@/components/wrappers/navbar'
import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <ReactLenis root>
      <Navbar />
      <main
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506606401543-2e73709cebb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="backdrop-blur-sm">
          <HeroSection />
          <ProductsSection />
          <PlansSection />
        </div>
      </main>
    </ReactLenis>
  )
}
