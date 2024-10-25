import { HeroSection } from '@/components/landing-page/sections/hero-section'
import { PricingSection } from '@/components/landing-page/sections/pricing-section'
import { ProductsSection } from '@/components/landing-page/sections/products-section'
import { Footer } from '@/components/wrappers/footer'
import { Navbar } from '@/components/wrappers/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container my-8 space-y-32">
        <HeroSection />
        <ProductsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
