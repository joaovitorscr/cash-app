import Navbar from '@/screens/landing-page/components/navbar'
import HeroSection from '@/screens/landing-page/sections/hero-section/hero-section'
import ProjectsSection from '@/screens/landing-page/sections/projects-section/projects-section'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="container space-y-16 py-36">
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  )
}
