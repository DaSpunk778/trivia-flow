"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { HelpCircle, Clock } from "lucide-react"

type ResultState = "high" | "medium" | "low"

const resultConfig = {
  high: {
    percentage: "89%",
    color: "#20BF55",
    bgColor: "#303030",
    heading: "Congratulations! 🥳",
    description: "You're one of our 5 lucky winners in this round. Check your email for details on how to claim your reward.",
    attempted: "8 of 12",
    time: "5 mins",
  },
  medium: {
    percentage: "50%",
    color: "#E5C907",
    bgColor: "rgba(254, 228, 70, 0.15)",
    heading: "Great Job! 👍",
    description: "Keep going! You surpassed 25 other players and climbed the leaderboard.",
    attempted: "5 of 12",
    time: "8 mins",
  },
  low: {
    percentage: "20%",
    color: "#FF7366",
    bgColor: "rgba(224, 19, 0, 0.15)",
    heading: "Almost! 😢",
    description: "Better luck next time. View your current ranking on the leaderboard.",
    attempted: "5 of 12",
    time: "8 mins",
  },
}

export default function SubmitPage() {
  const router = useRouter()
  const [resultState, setResultState] = useState<ResultState>("high")

  const result = resultConfig[resultState]

  const handleNext = () => {
    if (resultState === "high") {
      setResultState("medium")
    } else if (resultState === "medium") {
      setResultState("low")
    } else {
      router.push("/leaderboard")
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#3A3A3A_0%,#0F0F0F_30%,#121212_100%)] text-white flex flex-col items-center">
      <div className="w-full max-w-97.5 flex flex-col ">

        {/* Header */}
        <div className="sticky top-0 z-50 flex backdrop-blur items-center justify-center px-5 py-4">
          <h1 className="text-sm font-semibold text-white">Trivia Summary</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-5 pt-6">

          {/* Result Card */}
          <div className="bg-primary-card border border-card-border rounded-2xl p-6 flex flex-col items-center text-center mb-6">

            {/* Percentage Circle */}
            <div
              className="w-20 h-20  font-light rounded-full border-2 flex items-center justify-center mb-4"
              style={{ borderColor: result.color, backgroundColor: result.bgColor }}
            >
              <span className="text-xl font-bold" style={{ color: result.color }}>
                {result.percentage}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-primary-text text-[22px] font-semi-bold mb-2">
              {result.heading}
            </h2>

            {/* Description */}
            <p className="text-primary-grey text-xs leading-relaxed">
              {result.description}
            </p>

          </div>

          {/* Breakdown Section */}
          <h3 className="text-primary-text text-sm font-semibold mb-4">
            Here is a breakdown of your result
          </h3>

          <div className="flex items-start justify-between mb-6">

            {/* Questions Attempted */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#CDCACA]" />
                <span className="text-primary-grey text-xs">Total questions attempted</span>
              </div>
              <span className="text-primary-text text-sm px-6 font-semibold">{result.attempted}</span>
            </div> 

            {/* Time Used */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#CDCACA]" />
                <span className="text-primary-grey text-xs">Total time used</span>
              </div>
              <span className="text-primary-text text-sm px-6 font-semibold">{result.time}</span>
            </div>

          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom Buttons */}
          <div className="flex gap-3 mb-6 py-30">
            <button
              onClick={() => router.push("/landing")}
              className="flex-1 bg-primary-card text-primary-yellow font-bold text-sm py-3 rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              Go to Homepage
            </button>
            <button 
              onClick={handleNext}
              className="flex-1 bg-primary-yellow text-primary-dark font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:bg-[#fdfd6f] active:scale-[0.98]"
            >
              View Leaderboard
            </button>
          </div>
 
        </div>
      </div>
    </div>
  )
}