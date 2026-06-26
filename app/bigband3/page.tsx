"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"

const tabs = ["Noon (12pm)", "Evening (4pm)", "Night (10pm)"]

export default function TriviaDetailPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("Night (10pm)")
 
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#3A3A3A_0%,#0F0F0F_30%,#121212_100%)] text-white flex flex-col items-center">
      <div className="w-full max-w-97.5 flex flex-col ">

        {/* Header */}
        <div className="sticky top-0 z-50 backdrop-blur flex items-center justify-between px-5 py-4">
          <button onClick={() => router.back()}>
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-bold text-white">Big Band Trivia 3</h1>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
            <Image
              src="/prof.png"
              alt="Profile"
              width={59}
              height={59}
              className="object-contain"
            />
          </div>
        </div>

        {/* Time Tabs */}
        <div className="flex items-center justify-between px-5 py-3 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-[14px] font-semibold py-1 px-1 rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? "bg-primary-green border border-[#A8FC73] text-black "
                  : "text-faded-white" 
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-5 pt-2">

          {/* Trivia Image */}
          <div className="w-full rounded-2xl overflow-hidden mb-4">
            <Image
              src="/bigband.jpg"
              alt="Big Band Trivia"
              width={390}
              height={220}
              className="w-full h-55 object-cover"
            />
          </div>

          {/* Title + Duration */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white text-[16px] font-bold">Big Bang Trivia 3</h2>
            <span className="text-primary-grey text-xs bg-[#2A2A2A] rounded-full px-3 py-1">
              5 minutes
            </span>
          </div>

          {/* Description */}
          <p className="text-primary-grey text-xs leading-relaxed mb-5">
            This game is a for runners, stand the chance to win amazing prizes with our trivia game questions happening 3 times a day, your percentage show your stand on the leaderboards after playing, so try as much as you can to get a higher percentage.
          </p>

          {/* Sample Question Card */}
          <div className="bg-primary-card border border-card-border rounded-2xl p-4">

            {/* Card Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-primary-text text-sm font-semibold">Sample Question</span>
              <span className="text-primary-text text-xs bg-[#2A2A2A] rounded-full px-2 py-1">
                12
              </span>
            </div>

            {/* Question Text */}
            <p className="text-white text-sm leading-relaxed mb-4">
              Which country has won the most FIFA World Cup titles in men's football?
            </p>

            {/* Start Trivia Button */}
            <button
              onClick={() => router.push("/question")}
              className="w-full bg-primary-yellow text-[#1A1A1A] font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:bg-[#e9e966] active:scale-[0.98]"
            >
              Start Trivia
            </button>

          </div>
 
          {/* Not Sure Link */}
          <p className="text-primary-grey text-xs text-center mt-4 mb-6">
            Not Sure, play a{" "}
            <span
              className="text-primary-yellow font-bold cursor-pointer"
              onClick={() => router.push("/question")}
            >
              Sample Trivia Game
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}