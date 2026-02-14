"use client"

import { Mail, Instagram, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackButtonClick, trackSocialClick } from "@/lib/analytics"

// Hoist contactInfo data outside component
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "m.malik.rachman@outlook.com",
    href: "mailto:m.malik.rachman@outlook.com",
    color: "blue",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@m.malik.rachman",
    href: "https://instagram.com/m.malik.rachman",
    color: "purple",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Malik Rachman",
    href: "https://linkedin.com/in/malik-rachman",
    color: "teal",
  },
]

export default function Contact() {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/20",
        text: "text-blue-600",
        hover: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/20",
        text: "text-purple-600",
        hover: "hover:bg-purple-50 dark:hover:bg-purple-900/30",
      },
      teal: {
        bg: "bg-teal-100 dark:bg-teal-900/20",
        text: "text-teal-600",
        hover: "hover:bg-teal-50 dark:hover:bg-teal-900/30",
      },
    }
    return colorMap[color as keyof typeof colorMap]
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const colors = getColorClasses(contact.color)
            const Icon = contact.icon

            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick(contact.label.toLowerCase(), 'card_click')}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${colors.hover} group`}
              >
                <div className="text-center">
                  <div
                    className={`${colors.bg} p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{contact.label}</h3>
                  <p className={`${colors.text} font-medium`}>{contact.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always excited to connect and discuss about exciting project or just want to say hi, feel free to reach out!.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                trackButtonClick('send_email', {
                  location: 'contact_section',
                  email: 'm.malik.rachman@outlook.com'
                })
                window.open("mailto:m.malik.rachman@outlook.com", "_blank")
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 text-gray-700 dark:text-gray-300 hover:text-blue-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 bg-transparent dark:bg-transparent"
              onClick={() => {
                trackButtonClick('connect_linkedin', {
                  location: 'contact_section',
                  profile: 'malik-rachman'
                })
                window.open("https://linkedin.com/in/malik-rachman", "_blank")
              }}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300">
              <MapPin className="inline h-4 w-4 mr-1" />
              Based in Indonesia • Available for remote opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
