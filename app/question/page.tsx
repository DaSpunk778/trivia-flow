"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 2,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 3,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 4,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 5,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 6,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 7,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 8,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 9,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 10,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 11,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
  {
    id: 12,
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["Germany", "Brazil", "France", "Spain"],
  },
]

const letters = ["A", "B", "C", "D"]

export default function QuestionsPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isLowTime, setIsLowTime] = useState(false)

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1
  const progress = ((currentIndex + 1) / questions.length) * 100

  const handleNext = () => {
    if (isLastQuestion) {
      router.push("/trivia-summary")
    } else {
      setCurrentIndex(currentIndex + 1)
      setSelectedOption(null)
      // simulatng low time on question 8+
      if (currentIndex >= 7) setIsLowTime(true)
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#3A3A3A_0%,#0F0F0F_30%,#121212_100%)]  text-white flex flex-col items-center">
      <div className="w-full max-w-97.5 flex flex-col min-h-screen">

        {/* Header */}
        <div className="sticky top-0 z-50 backdrop-blur flex items-center justify-between px-5 py-4">
          <button onClick={() => router.back()}>
            <X className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-bold text-white">Big Band Trivia</h1>
          <div className="w-5" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-5 pt-5 gap-3">

          {/* Question Card */}
          <div className="bg-[#1D1D1D] border border-[#303030] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white text-sm font-semibold">
                Question {currentQuestion.id}
              </span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  isLowTime
                    ? "bg-[#FF7366]/20 text-[#FF7366] border border-[#FF7366]"
                    : "bg-[#EAFEDD40] text-[#5DE505] border border-[#A8FC73]"
                }`}
              >
                {isLowTime ? "01:30" : "07:30"}
              </span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              {currentQuestion.question}
            </p>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(index)}
                className="flex items-center justify-between bg-[#1A1A1A] border border-[#303030] rounded-2xl px-4 py-4 transition-all duration-200 "
              >
                <span className="text-white text-sm">
                  <span className="text-[#888888] mr-2">{letters[index]}.</span>
                  {option}
                </span>

                {/* Radio Circle */}
                <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        selectedOption === index
                          ? "border-[#444444] bg-[#5DE505]"
                          : "border-[#444444] bg-transparent"
                      }`}
                    >
                  {selectedOption === index && (
                    <div className="w-2 h-2 rounded-full bg-[]" />
                  )}
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="px-5 pb-15">

          {/* Progress Bar */}
          <div className="w-full h-1 bg-[#2A2A2A] rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-[#5DE505] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Count + Button */}
          <div className="flex items-center justify-between">
            <span className="text-[#888888] text-sm">
              {currentIndex + 1} of {questions.length}
            </span>
            <button
              onClick={handleNext}
              className="bg-[#FCFC77] text-[#1E3211] font-bold text-sm px-8 py-3 rounded-xl transition-all duration-200 hover:bg-[#e9e966] active:scale-[0.98]"
            >
              {isLastQuestion ? "Submit" : "Next"}
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}