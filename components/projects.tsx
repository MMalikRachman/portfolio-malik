"use client"

import { ExternalLink, Smartphone, Globe, Code, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkPreview } from "@/components/ui/link-preview"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import ExpandableUICards from "@/components/ui/expandable-ui-cards"
import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Tabs } from "@/components/ui/tabs"

interface UICard {
  title: string;
  description: string;
  type: string;
  icon: any;
  content: () => React.ReactNode;
  imageSrc: string;
}

export default function Projects() {
  const [activeUIProject, setActiveUIProject] = useState<UICard | null>(null)

  const webProjects = [
    {
      title: "KlinikKasih",
      description:
        "A comprehensive clinic platform where users can explore health articles and purchase clinic products. Features include article browsing, product catalog, and e-commerce functionality.",
      type: "Web Platform",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://mmalikrachman.github.io/webklinikkasih/index.html",
    },
    {
      title: "PusBaKas",
      description:
        "A discount tracking website that displays current product discounts with a comprehensive table showing all discounted products from the market.",
      type: "Web Application",
      technologies: ["Web Development", "Database"],
      link: "https://mmalikrachman.github.io/webjualbelibarang/index.html",
    },
    {
      title: "Ticks",
      description:
        "A concert ticket purchasing platform where users can buy concert tickets, merchandise, and other event-related products.",
      type: "E-commerce Web",
      technologies: ["Web Development", "Payment Integration"],
      link: "https://mmalikrachman.github.io/webkonser/",
    },
    {
      title: "E-Pasar",
      description:
        "Built using Wix Web Builder, this platform serves as a marketplace for buying and selling raw foods such as vegetables and meats.",
      type: "Marketplace",
      technologies: ["Wix", "E-commerce"],
      link: "https://malikrachman1403.wixsite.com/e-pasar",
    },
  ]

  const uiProjects = [
    {
      title: "KerJo Mobile App",
      description:
        "A mobile app for job searching that allows users to find both offline and remote jobs, apply for positions, and enhance skills through course registration.",
      type: "Mobile UI",
      icon: Smartphone,
      imageSrc: "/kerjo-mobile.png",
      content: () => (
        <div className="space-y-4">
          <p>
            The KerJo Mobile App is a comprehensive job search platform designed to connect job seekers with employment opportunities. The app features an intuitive user interface that makes job hunting seamless and efficient.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Advanced job search with filters</li>
              <li>One-click job application</li>
              <li>Skill enhancement courses</li>
              <li>Real-time job notifications</li>
              <li>Resume builder and management</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Design Approach:</h4>
            <p className="text-sm">
              The design focuses on user experience with clean navigation, intuitive icons, and a color scheme that promotes trust and professionalism. The mobile-first approach ensures optimal performance across all devices.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Ragunan Zoo Redesign",
      description:
        "Redesigned the Ragunan Zoo website with the aim of improving user experience for visitors and customers.",
      type: "UI Redesign",
      icon: Palette,
      imageSrc: "/ragunan.png",
      content: () => (
        <div className="space-y-4">
          <p>
            The Ragunan Zoo website redesign project focused on creating a more engaging and informative experience for visitors. The new design emphasizes accessibility and user-friendly navigation.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Redesign Goals:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Improve visitor information accessibility</li>
              <li>Enhance ticket booking experience</li>
              <li>Showcase animal exhibits effectively</li>
              <li>Optimize for mobile devices</li>
              <li>Increase visitor engagement</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Design Solutions:</h4>
            <p className="text-sm">
              Implemented a modern, responsive design with clear call-to-actions, improved typography, and intuitive navigation. The color palette reflects the natural environment while maintaining excellent readability.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Raw Food E-commerce",
      description:
        "UI design for a raw food e-commerce platform where users can buy and sell raw foods such as meat, vegetables, and fruits.",
      type: "E-commerce UI",
      icon: Globe,
      imageSrc: "/epasar.png",
      content: () => (
        <div className="space-y-4">
          <p>
            The Raw Food E-commerce platform UI design creates a seamless shopping experience for fresh produce and raw food products. The design emphasizes product quality and freshness through visual elements.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Design Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>High-quality product imagery</li>
              <li>Easy-to-use shopping cart</li>
              <li>Secure payment integration</li>
              <li>Seller dashboard interface</li>
              <li>Real-time inventory tracking</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">User Experience:</h4>
            <p className="text-sm">
              The interface prioritizes ease of use with clear product categories, detailed product information, and streamlined checkout process. The design builds trust through transparency and quality assurance features.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Diet Mobile App",
      description:
        "UI design for a diet mobile app that allows users to record meals, view nutritional information, and subscribe to catering services.",
      type: "Mobile UI",
      icon: Smartphone,
      imageSrc: "/diet-mobile.png",
      content: () => (
        <div className="space-y-4">
          <p>
            The Diet Mobile App UI design focuses on helping users maintain healthy eating habits through intuitive meal tracking and nutritional guidance. The design promotes motivation and consistency in dietary goals.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Core Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Meal logging and tracking</li>
              <li>Nutritional information display</li>
              <li>Personalized diet plans</li>
              <li>Catering service integration</li>
              <li>Progress visualization</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Design Philosophy:</h4>
            <p className="text-sm">
              The app uses a clean, motivational design with progress indicators, achievement badges, and easy-to-understand nutritional data. The color scheme promotes health and wellness while maintaining excellent usability.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const otherProjects = [
    {
      title: "JavaFX Calculator",
      description:
        "A simple calculator application built with JavaFX, featuring a clean user interface and basic mathematical operations.",
      type: "Desktop Application",
      technologies: ["Java", "JavaFX"],
      color: "blue",
    },
    {
      title: "Concert Ticket App",
      description:
        "A JavaFX application for buying concert tickets connected to SQL database. Features user registration, login system, ticket purchasing for users, and ticket management for admins.",
      type: "Desktop Application",
      technologies: ["Java", "JavaFX", "SQL"],
      color: "purple",
    },
    {
      title: "Systems Analysis with UML",
      description:
        "Comprehensive system analysis project for a clothes rental application, analyzing objects, processes, and user workflows from registration to product delivery.",
      type: "System Analysis",
      technologies: ["UML", "System Design", "Visual Paradigm"],
      color: "teal",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        button: "bg-teal-600 hover:bg-teal-700",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700",
      },
    }
    return colorMap[color as keyof typeof colorMap]
  }

  const ProjectCard = ({ project, showLink = false }: { project: any; showLink?: boolean }) => {
    const colors = getColorClasses(project.color)

    return (
      <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
            >
              {project.type}
            </span>
          </div>
          {project.icon && (
            <div className={`${colors.bg} p-3 rounded-xl`}>
              <project.icon className={`h-6 w-6 ${colors.text}`} />
            </div>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}

        {showLink && project.link && (
          <div className="inline-block w-full">
            <LinkPreview url={project.link}>
              <div
                className="w-full"
                onClick={() => window.open(project.link, '_blank')}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full ${colors.button} text-white border-0 hover:shadow-md transition-all duration-200`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </div>
            </LinkPreview>
          </div>
        )}
      </div>
    )
  }

  // Convert webProjects to the format expected by HoverEffect
  const webProjectsForHover = webProjects.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.link,
    technologies: project.technologies,
    type: project.type,
    // No imageSrc for web projects
  }))

  // Convert uiProjects to the format expected by HoverEffect
  const uiProjectsForHover = uiProjects.map((project, idx) => ({
    title: project.title,
    description: project.description,
    link: `uiux-${idx}`, // Use a unique key for each project
    technologies: [project.type],
    type: project.type,
    imageSrc: project.imageSrc,
  }))

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Things I've Built
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of web applications, mobile UI designs, and system analysis projects
          </p>
        </div>

        <Tabs
          contentClassName="min-h-[700px]"
          tabs={[
            {
              title: "Web Projects",
              value: "web",
              content: (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <Globe className="mr-3 h-6 w-6 text-blue-600" />
                    Web Projects
                  </h3>
                  <HoverEffect items={webProjectsForHover} layout="grid" />
                </div>
              ),
            },
            {
              title: "UI/UX Projects",
              value: "uiux",
              content: (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <Palette className="mr-3 h-6 w-6 text-purple-600" />
                    UI/UX Design Projects
                  </h3>
                  <HoverEffect items={uiProjectsForHover} layout="list" />
                </div>
              ),
            },
            {
              title: "Other Projects",
              value: "other",
              content: (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <Code className="mr-3 h-6 w-6 text-teal-600" />
                    Other Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  )
}

function ExpandableUIModal({ project, onClose }: { project: UICard; onClose: () => void }) {
  // Prevent background scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Close on overlay click
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOverlayClick}
      >
        <motion.div
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full mx-4 overflow-y-auto max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <button
            className="absolute top-4 right-4 z-10 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
            style={{ transform: "translate(50%,-50%)" }}
            onClick={onClose}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-700 dark:text-gray-200"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-56 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <project.icon className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{project.type}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div>{project.content()}</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
