

import { redirect } from "next/navigation"

export default function Home() {
  <div className="flex flex-col flex-1 bg-[#111111] text-white">
    {redirect("/landing")}
  </div>
}
