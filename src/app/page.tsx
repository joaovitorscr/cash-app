import { HeroSection } from '@/components/landing-page/hero-section'
import { ProductsSection } from '@/components/landing-page/products-section'
import { Navbar } from '@/components/wrappers/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container space-y-16 py-36">
        <HeroSection />
        <ProductsSection />
      </main>
    </>
  )
}
