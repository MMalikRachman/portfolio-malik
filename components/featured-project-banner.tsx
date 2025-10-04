import Link from "next/link"
import { Rocket } from "lucide-react"
import type React from "react"

export default function FeaturedProjectBanner() {
  return (
    <div
      role="region"
      aria-label="Featured Project"
      className="my-8"
      style={{
        backgroundColor: "#1a1a2e",
        borderRadius: "12px",
        padding: "15px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid",
        borderImageSource: "linear-gradient(to right, #e81cff, #40c4ff)",
        borderImageSlice: 1,
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
            Featured Project
          </span>
          <span
            style={{
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "13px",
              color: "#c4c4c4",
            }}
          >
            Check out my latest work!
          </span>
        </div>
      </div>
      <Link href="/projects/latest" className="ml-5">
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
  )
}


