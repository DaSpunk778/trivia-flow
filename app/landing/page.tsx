"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, ChevronRight } from "lucide-react";
import Image from "next/image";
import { MatchCard } from "@/components/matchCard";
import { TriviaCard } from "@/components/triviaCard";

const tabs = ["Trivia", "Games", "Wheel"];

const matches = [
  {
    league: "Premier League",
    leaguelogo: "/premier-league.png",
    date: "24 Aug",
    homeTeam: { name: "Manchester United", logo: "/manu.png" },
    awayTeam: { name: "Chelsea FC", logo: "/chealsea.png" },
  },
  {
    league: "Premier League",
    leaguelogo: "/premier-league.png",
    date: "24 Aug",
    homeTeam: { name: "Manchester United", logo: "/manu.png" },
    awayTeam: { name: "Chelsea FC", logo: "/chealsea.png" },
  },
];

const triviaList = [
  {
    title: "Big Band Questions",
    prize: "Win up to ₦20,000",
    closes: "Closes in 2 hours",
    image: "/Glow.jpg",
  },
  {
    title: "Big Band Questions",
    prize: "Win up to ₦20,000",
    closes: "Closes in 2 hours",
    image: "/Glow.jpg",
  },
  {
    title: "Big Band Questions",
    prize: "Win up to ₦20,000",
    closes: "Closes in 2 hours",
    image: "/Glow.jpg",
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Trivia");

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#3A3A3A_0%,#0F0F0F_30%,#121212_100%)] text-white flex flex-col items-center">
      <div className="w-full max-w-97.5 flex flex-col min-h-screen">
        {/* the Header */}
        <div className="sticky top-0 z-50 backdrop-blur-md  px-5 py-4">
          {/* menu and tabs */}
          <div className="relative flex items-center justify-between mb-4">
            <Menu className="w-8 h-6 text-[#CDCACA]" />
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-semibold pb-1 px-2 transition-all duration-200 ${
                    activeTab === tab
                      ? "text-[#5DE505] border-b-2 border-[#5DE505]"
                      : "text-[#DADADA]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/** content */}
        <div className="flex flex-col flex-1 px-5 pt-6">
          {/** predict section */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#F6F2F2] text-[16px] font-bold">Predict</h2>
            <span className="text-xs text-[#20BF55] font-bold border border-[#20BF55] bg-[#20BF55]/10 shadow-[0_0_2px_#20BF55] rounded-4xl px-2 py-1">
              Live Now
            </span>
          </div>

          {/** matches */}
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 [&::-webkit-scrollbar]:hidden">
            {matches.map((match, i) => (
              <MatchCard key={i} {...match} onClick={() => console.log("tapped", i)} />
            ))}
          </div>

          {/** view all predictions */}
          <button className="text-sm mt-4 self-center rounded-full border border-white px-5 py-1 text-[14px] font-medium text-white transition-colors hover:bg-white/5 active:bg-white/10">
            View all predictons
          </button>

          {/** section divider */}
          <div className="my-6 -mx-5 h-px bg-white/10" />

          {/** trivia section */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[#F6F2F2] text-[16px] font-bold">Trivia</h2>
            <button className="flex items-center gap-1 text-[14px] font-semibold text-[#5DE505]">
              See all
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {triviaList.map((trivia, i) => (
              <TriviaCard
                key={i}
                {...trivia}
                onPlay={() => console.log("play", i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
