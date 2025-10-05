"use client"

import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { Typewriter } from 'react-simple-typewriter'
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hello, I'm Muhammad Malik Rachman"
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 120)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-16">
      <BackgroundBeams className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center max-w-xl w-full mx-auto">
        <div className="mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-purple-400/70">
          <Image
            src="/Muhammad Malik Rachman - Edited red.jpeg"
            alt="Muhammad Malik Rachman"
            width={140}
            height={140}
            className="rounded-full"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center text-gray-900 dark:text-white">
          {displayText.startsWith("Hello") ? (
            <>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hello</span>
              {displayText.slice(5)}
            </>
          ) : (
            displayText
          )}
          {currentIndex < fullText.length && (
            <span className="animate-pulse">|</span>
          )}
        </h1>
        <p className="text-lg text-gray-700 dark:text-blue-200 mb-4 text-center">
          Enthusiastic Information Systems student with a passion for 
          <br />
          <Highlight> Software Testing</Highlight>,
          <Highlight> System Analysis</Highlight>, and
          <Highlight> Project Management</Highlight>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button onClick={scrollToProjects} className="px-6 py-2 text-base font-semibold rounded-full">
            Explore My Work
          </Button>
          <Button
            variant="outline"
            className="px-6 py-2 text-base font-semibold rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2 shadow-md"
            onClick={() => window.open("https://github.com/MMalikRachman", "_blank")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Button>
          <Button variant="outline" className="px-6 py-2 text-base font-semibold rounded-full">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
