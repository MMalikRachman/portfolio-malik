import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import FloatingNavbar from "@/components/floating-navbar"
import FeaturedProjectBanner from "@/components/featured-project-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <FloatingNavbar />
      <Hero />
      <div className="max-w-4xl mx-auto relative ">
        <FeaturedProjectBanner />
      </div>
      <div className="max-w-4xl mx-auto relative">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
