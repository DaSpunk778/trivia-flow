"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, Crown } from "lucide-react"
import Image from "next/image"

const podium = [
  { rank: 2, name: "Viveka Mariam Emilia", score: "85%", image: "/image1.png", size: "small" },
  { rank: 1, name: "Adele Kingsley Promise", score: "99%", image: "/image2.png", size: "large" },
  { rank: 3, name: "Mamudu Oluwaferanmi", score: "80%", image: "/image3.png", size: "small" },
]

const rankedList = [
  { rank: 4, name: "Adenrele Ibrahim Akanbi", score: "75%", image: "/image4.jpg", isMe: false },
  { rank: 5, name: "Bamidele Adio Lawal", score: "70%", image: "/image5.jpg", isMe: false },
  { rank: 6, name: "Agbonmagbe Asabi Morenikeji", score: "60%", image: "/image6.jpg", isMe: false },
  { rank: 7, name: "RakshaSallan Alli", score: "50%", image: "/image7.jpg", isMe: false },
  { rank: 8, name: "LakshitKumar Akash", score: "40%", image: "/image8.jpg", isMe: false },
  { rank: 9, name: "Shivam Shinabali Kumar", score: "30%", image: "/image9.jpg", isMe: false },
  { rank: 10, name: "Me", score: "20%", image: "/image10.jpg", isMe: true },
  { rank: 11, name: "Nishit Kishant Sharma", score: "10%", image: "/image11.jpg", isMe: false },
  { rank: 12, name: "Keerti Kerala Anjushim", score: "10%", image: "/image12.png", isMe: false },
]

export default function LeaderboardPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#3A3A3A_0%,#0F0F0F_30%,#121212_100%)] text-white flex flex-col items-center">
      <div className="w-full max-w-[390px] flex flex-col min-h-screen">

        {/* Header */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-5 py-4">
          <button onClick={() => router.back()}>
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-semibold text-white">Leaderboard</h1>
          <div className="w-5" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-5 pt-5">

          {/* Podium Card */}
          <div className="bg-[#1D1D1D] border border-[#303030] rounded-2xl p-5 mb-6">
            <div className="flex items-end justify-center gap-4">
              {podium.map((person) => (
                <div
                  key={person.rank}
                  className={`flex flex-col items-center ${
                    person.size === "large" ? "mb-4" : "mt-4"
                  }`}
                >
                  {/* Avatar with ring */}
                  <div className="relative">
                    <div
                      className={`rounded-full overflow-hidden border-2 ${
                        person.rank === 1
                          ? "w-20 h-20 border-[#D9E012]"
                          : person.rank === 2
                          ? "w-16 h-16 border-[#20BF55]"
                          : "w-16 h-16 border-[#5B8DEF]"
                      }`}
                    >
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Crown + Rank Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[linear-gradient(180deg,#3A3A3A_0%,#0F0F0F_30%,#121212_100%)] rounded-full px-2 py-1">
                      <Crown className="w-3 h-3 text-[#D9E012]" />
                      <span className="text-[#DADADA] text-xs font-bold">#{person.rank}</span>
                    </div>
                  </div>

                  {/* Name + Score */}
                  <div className="text-center mt-4">
                    <p className="text-[#DADADA] text-[10px] font-semibold max-w-[90px]">
                      {person.name}
                    </p>
                    <p className="text-[#888888] text-xs">Score: {person.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ranked List */}
          <div className="flex flex-col gap-3 mb-6">
            {rankedList.map((person) => (
              <div
                key={person.rank}
                className={`flex items-center gap-3 bg-[#1A1A1A] border rounded-xl px-2 py-1 ${
                  person.isMe ? "border-[#20BF55]" : "border-[#2A2A2A]"
                }`}
              >
                <span className="text-white text-sm font-medium w-6">{person.rank}.</span>

                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={19}
                    height={19}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-white text-sm flex-1">{person.name}</span>

                <span className="text-white text-sm font-semibold">{person.score}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}