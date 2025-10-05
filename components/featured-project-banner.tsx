import Link from "next/link"
import { Rocket } from "lucide-react"
import type React from "react"

export default function FeaturedProjectBanner() {
  return (
    <div className="my-8">
      <div
        role="region"
        aria-label="Featured Project"
        className="rounded-[12px] p-[2px]"
        style={{
          background: "linear-gradient(to right, #e81cff, #40c4ff)",
        }}
      >
        <div
          className="flex items-center justify-between rounded-[inherit]"
          style={{
            backgroundColor: "#1a1a2e",
            padding: "15px 20px",
          }}
        >
          <div className="flex items-center flex-1 min-w-0">
            <Rocket color="#ffffff" size={30} style={{ marginRight: "15px" }} />
            <div className="flex flex-col flex-grow min-w-0">
              <span
                style={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "2px",
                }}
              >
                Latest Project : discord-bot-with-gemini
              </span>
              <span
                style={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "13px",
                  color: "#c4c4c4",
                }}
              >
                A simple Discord bot with AI Q&A (Gemini), movie/series watchlist (OMDb), and scheduled reminders.
              </span>
            </div>
          </div>
          <Link href="https://github.com/MMalikRachman/discord-bot-with-gemini" className="ml-5" target="_blank" rel="noopener noreferrer">
            <button
              className="transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(to right, #7b68ee, #8a2be2)",
                color: "#ffffff",
                padding: "8px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


