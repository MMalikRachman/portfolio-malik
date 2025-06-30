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
          Final-year Information Systems student passionate about
          <Highlight> web development</Highlight>,
          <Highlight> system analysis</Highlight>, and
          <Highlight> software testing</Highlight>.
        </p>
        <div className="flex gap-4 mt-4">
          <Button onClick={scrollToProjects} className="px-6 py-2 text-base font-semibold rounded-full">
            Explore My Work
          </Button>
          <Button variant="outline" className="px-6 py-2 text-base font-semibold rounded-full">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
