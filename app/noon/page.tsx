"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaMoneyBillWave } from "react-icons/fa";

export default function NoonPage() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#3A3A3A_0%,#0F0F0F_30%,#121212_100%)] text-white flex flex-col items-center">
      <div className="w-full max-w-97.5 flex flex-col  px-5 py-6 gap-6">
        {/** Banner */}
        <div className="flex gap-4 pt-7">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl ">
            <Image
              src="/Paris24.png"
              alt="img"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <h1 className="text-[18px] font-semi-bold leading-snug text-white">
              2024 Olympic Tournament
              <br /> Trivial
            </h1>
            <span className="self-start rounded-lg  bg-white/10  px-3 py-1 text-[12px] font-medium text-[#DADADA]">
              start in 4 hours
            </span>
          </div>
        </div>

        {/* Tag pills */}
        <div className="flex gap-2">
          <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[12px]  text-[#DADADA]">
            <FaMoneyBillWave size={14} className="text-white" />
            N50,000
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[12px]  text-[#DADADA]">
            <FaMoneyBillWave size={14} className="text-white" />
            Medium
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-[12px] leading-relaxed mt-3 text-white/60 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            Test your knowledge of the 2024 Olympic Games, held in the vibrant
            city of Paris, France! Dive into questions ranging from athlete
            highlights to event history, all set against the backdrop of one of
            the world&apos;s most iconic sporting celebrations.
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start text-[12px] font-semibold text-white/80"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>

         {/* Sample question card */}
        <div className="rounded-2xl border border-[#303030]  bg-[#1D1D1D] p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[14px]  text-[#F6F2F2]">
              Sample Question
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[12px] font-semibold text-[#F6F2F2]">
              12
            </span>
          </div>
          <p className="text-[14px] text-[#F6F2F2] leading-snug">
            Which country has won the most FIFA World Cup titles in
            men&apos;s football?
          </p>
        </div>

         {/* CTA link */}
        <button
          onClick={() => router.push("/bigband2")}
          className="text-center text-[12px] text-white/50"
        >
          Not Sure, play a{" "}
          <span className="font-bold text-[#FCFC77]">Sample Trivia Game</span>
        </button>
      </div>
    </div>
  );
}
