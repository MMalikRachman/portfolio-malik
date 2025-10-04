import React from "react"
import Image from "next/image"
import { FaGraduationCap } from "react-icons/fa"
import { HiOutlineBriefcase } from "react-icons/hi"
import { SiJavascript, SiPython, SiVsco, SiPostman, SiCypress } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { BsMicrosoft } from "react-icons/bs"
import { MdOutlineSmartToy } from "react-icons/md"
import { TbTestPipe } from "react-icons/tb"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { CardContainer, CardBody } from "@/components/ui/3d-card"

const skillIconMap: Record<string, React.ReactNode> = {
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "Python": <SiPython className="text-blue-500" />,
  "Java": <FaJava className="text-red-500" />,
  "Microsoft Office": <BsMicrosoft className="text-green-600" />,
  "Visual Paradigm (UML)": <SiVsco className="text-violet-500" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "SQL": <span className="text-blue-700 dark:text-blue-400">🗄️</span>,
  "API Testing": <span className="text-pink-500">🔗</span>,
  "Manual Testing": <span className="text-purple-500">📝</span>,
  "Automation Testing": <MdOutlineSmartToy className="text-amber-500" />,
  "Katalon": <TbTestPipe className="text-green-500" />,
  "Cypress": <SiCypress className="text-green-700 dark:text-green-400" />,
  "Playwright": <span className="text-purple-700 dark:text-purple-400">🎭</span>,
  "Teamwork/Collaboration": <span className="text-green-500">🤝</span>,
  "Effective Communication": <span className="text-blue-400">💬</span>,
}

const skillGroups = [
  {
    title: "CV Skills",
    skills: [
      "JavaScript",
      "Python",
      "Java",
      "SQL",
      "API Testing",
      "Manual Testing",
      "Automation Testing",
      "Katalon",
      "Cypress",
      "Playwright",
      "Microsoft Office",
      "Visual Paradigm (UML)",
      "Postman",
      "Teamwork/Collaboration",
      "Effective Communication",
    ],
  },
]

const experience = [
  {
    title: "QA Engineer at Paper.ID",
    year: "May 2025 - Now",
    type: "Intern",
  },
  {
    title: "Application Quality at Kalbe Farma",
    year: "Feb 2024 - Feb 2025",
    type: "Intern",
  },
]

const education = [
  {
    degree: " Student Information Systems",
    school: "Bina Nusantara University",
    year: "2021 - 2025",
    gpa: "GPA: 3.67 / 4.00",
  },
]

export default function About() {
  return (
    <div id="about" className="w-full max-w-6xl mx-auto mb-24">
      <CardContainer containerClassName="p-0 w-full h-auto min-h-0" className="rounded-2xl w-full h-auto min-h-0">
        <CardBody className="rounded-2xl w-full h-auto min-h-0">
          <div className="bg-gray-800 rounded-t-2xl px-4 py-2 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500 inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-green-500 inline-block"></span>
            <span className="ml-4 text-gray-300 text-sm font-semibold">About Me</span>
          </div>
          <section className="py-8 px-2 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 rounded-b-2xl">
            <div className="max-w-6xl w-full mx-auto rounded-2xl">
              <BentoGrid className="mt-4 md:items-stretch">
                {/* Experience */}
                <BentoGridItem
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white justify-start"
                  header={
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🗂️</span>
                      <span className="font-semibold text-lg text-gray-900 dark:text-white">My Experience</span>
                    </div>
                  }
                  description={
                    <ul className="space-y-2 mt-2">
                      {experience.map((exp, i) => (
                        <li key={i}>
                          <div className="font-medium text-gray-900 dark:text-white text-sm lg:text-base">{exp.title}</div>
                          <div className="text-xs lg:text-sm text-blue-600 dark:text-blue-400">{exp.year} – {exp.type}</div>
                        </li>
                      ))}
                    </ul>
                  }
                />

                {/* My Skill Card */}
                <BentoGridItem
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white col-span-2"
                  header={
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">✨</span>
                      <span className="font-semibold text-lg text-gray-900 dark:text-white">My Skill</span>
                    </div>
                  }
                  description={
                    <div className="flex flex-col gap-5 mt-2 max-h-32 overflow-hidden">
                      <div className="flex gap-3 overflow-hidden">
                        <div className="flex gap-3 animate-scroll-left">
                          {skillGroups.flatMap(group => group.skills).slice(0, Math.ceil(skillGroups.flatMap(group => group.skills).length / 3)).map((skill, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-blue-100 font-semibold rounded-full px-5 py-1.5 text-sm shadow hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-150 whitespace-nowrap border border-blue-200 dark:border-blue-800 flex-shrink-0"
                            >
                              {skillIconMap[skill] && <span className="text-lg">{skillIconMap[skill]}</span>}
                              {skill}
                            </span>
                          ))}
                          {/* Duplicate for seamless loop */}
                          {skillGroups.flatMap(group => group.skills).slice(0, Math.ceil(skillGroups.flatMap(group => group.skills).length / 3)).map((skill, i) => (
                            <span
                              key={`duplicate-${i}`}
                              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-blue-100 font-semibold rounded-full px-5 py-1.5 text-sm shadow hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-150 whitespace-nowrap border border-blue-200 dark:border-blue-800 flex-shrink-0"
                            >
                              {skillIconMap[skill] && <span className="text-lg">{skillIconMap[skill]}</span>}
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 overflow-hidden">
                        <div 
                          className="flex gap-3 animate-scroll-left"
                          style={{ animationDelay: '-7s' }}
                        >
                          {skillGroups.flatMap(group => group.skills).slice(Math.ceil(skillGroups.flatMap(group => group.skills).length / 3), Math.ceil(skillGroups.flatMap(group => group.skills).length * 2 / 3)).map((skill, i) => (
                            <span
                              key={i + Math.ceil(skillGroups.flatMap(group => group.skills).length / 3)}
                              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-blue-100 font-semibold rounded-full px-5 py-1.5 text-sm shadow hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-150 whitespace-nowrap border border-blue-200 dark:border-blue-800 flex-shrink-0"
                            >
                              {skillIconMap[skill] && <span className="text-lg">{skillIconMap[skill]}</span>}
                              {skill}
                            </span>
                          ))}
                          {/* Duplicate for seamless loop */}
                          {skillGroups.flatMap(group => group.skills).slice(Math.ceil(skillGroups.flatMap(group => group.skills).length / 3), Math.ceil(skillGroups.flatMap(group => group.skills).length * 2 / 3)).map((skill, i) => (
                            <span
                              key={`duplicate-second-${i}`}
                              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-blue-100 font-semibold rounded-full px-5 py-1.5 text-sm shadow hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-150 whitespace-nowrap border border-blue-200 dark:border-blue-800 flex-shrink-0"
                            >
                              {skillIconMap[skill] && <span className="text-lg">{skillIconMap[skill]}</span>}
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 overflow-hidden">
                        <div 
                          className="flex gap-3 animate-scroll-left"
                          style={{ animationDelay: '-14s' }}
                        >
                          {skillGroups.flatMap(group => group.skills).slice(Math.ceil(skillGroups.flatMap(group => group.skills).length * 2 / 3)).map((skill, i) => (
                            <span
                              key={i + Math.ceil(skillGroups.flatMap(group => group.skills).length * 2 / 3)}
                              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-blue-100 font-semibold rounded-full px-5 py-1.5 text-sm shadow hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-150 whitespace-nowrap border border-blue-200 dark:border-blue-800 flex-shrink-0"
                            >
                              {skillIconMap[skill] && <span className="text-lg">{skillIconMap[skill]}</span>}
                              {skill}
                            </span>
                          ))}
                          {/* Duplicate for seamless loop */}
                          {skillGroups.flatMap(group => group.skills).slice(Math.ceil(skillGroups.flatMap(group => group.skills).length * 2 / 3)).map((skill, i) => (
                            <span
                              key={`duplicate-third-${i}`}
                              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-blue-100 font-semibold rounded-full px-5 py-1.5 text-sm shadow hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-150 whitespace-nowrap border border-blue-200 dark:border-blue-800 flex-shrink-0"
                            >
                              {skillIconMap[skill] && <span className="text-lg">{skillIconMap[skill]}</span>}
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* Education Card */}
                <BentoGridItem
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white justify-start"
                  header={
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="text-blue-500 text-xl" />
                      <span className="font-semibold text-lg text-gray-900 dark:text-white">Education</span>
                    </div>
                  }
                  description={
                    <ul className="space-y-2 mt-2">
                      {education.map((edu, i) => (
                        <li key={i} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 flex flex-col">
                          <span className="text-base font-semibold text-gray-900 dark:text-white">{edu.degree}</span>
                          <span className="text-gray-600 dark:text-gray-300">{edu.school}</span>
                          <Image src="/logo_Universitas-Bina-Nusantara-thumb.png" alt="Bina Nusantara University Logo" width={200} height={50} className="mt-2 self-start" />
                          <span className="text-gray-500 dark:text-gray-400 text-xs mt-2">{edu.year}</span>
                          {edu.gpa && <span className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-1">{edu.gpa}</span>}
                        </li>
                      ))}
                    </ul>
                  }
                />

                {/* Last Experience Card */}
                <BentoGridItem
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white col-span-2 justify-start"
                  header={
                    <div className="flex items-center gap-3">
                      <HiOutlineBriefcase className="text-blue-500 text-xl" />
                      <span className="font-semibold text-lg text-gray-900 dark:text-white">Last Experience</span>
                    </div>
                  }
                  description={
                    <div>
                      <div className="text-gray-600 dark:text-gray-300 mb-2">During my internship at PT Kalbe Farma Tbk, I completed <b className="text-gray-900 dark:text-white">five major projects</b> and developed comprehensive skills in software quality assurance.</div>
                      <div className="flex gap-8 mb-2">
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">100+</span>
                          <span className="text-gray-600 dark:text-gray-300 text-xs">Test Scenarios</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">50+</span>
                          <span className="text-gray-600 dark:text-gray-300 text-xs">Issues Found</span>
                        </div>
                      </div>
                      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                        <li>Performed manual and automated testing using Katalon, Playwright, and Cypress</li>
                        <li>Conducted API testing with Postman and load testing with K6 & JMeter</li>
                        <li>Collaborated with cross-functional teams to enhance user experience</li>
                        <li>Analyzed system flows through FSD documents and UML diagrams</li>
                      </ul>
                    </div>
                  }
                />
              </BentoGrid>
            </div>
          </section>
        </CardBody>
      </CardContainer>
    </div>
  )
}
