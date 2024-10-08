import Navbar from '@/core/layout/navbar'
import HeroSection from '@/screens/landing-page/components/hero-section/hero-section'
import ProjectsSection from '@/screens/landing-page/components/projects-section/projects-section'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="container space-y-16 pt-36">
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  )
}
