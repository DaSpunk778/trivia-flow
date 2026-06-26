import Image from "next/image";

type Team = {
  name: string;
  logo: string;
};

type MatchCardProps = {
  league: string;
  leaguelogo: string;
  date: string;
  homeTeam: Team;
  awayTeam: Team;
  onClick?: () => void;
};

export function MatchCard({
  league,
  leaguelogo,
  date,
  homeTeam,
  awayTeam,
  onClick,
}: MatchCardProps) {
  return (
    <button 
      onClick={onClick}
      className="flex w-70 shrink-0 flex-col gap-4 rounded-2xl bg-primary-card border border-card-border px-4 py-3.5 text-left transition-colors hover:bg-[#242426] active:bg-[#262628]"
    >
      {/* Header: competition + date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
            <Image
              src={leaguelogo}  
              alt={league}
              width={30}
              height={30}
              className="h-3 w-3 object-contain" 
            />
          </span>
          <span className="text-[13px] font-medium text-white/90">
            {league}
          </span>
        </div> 
        <span className="text-[13px] text-white">{date}</span>
      </div>

      {/* Teams + chevron */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2.5">
          <TeamRow team={homeTeam} />
          <TeamRow team={awayTeam} />
        </div>
        <ChevronRight />
      </div>
    </button>
  );
}

function TeamRow({ team }: { team: Team }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full bg-white/5">
        <Image
          src={team.logo}
          alt={team.name}
          fill
          className="object-cover"
        />
      </span>
      <span className="text-[14px] font-medium text-white">{team.name}</span>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 text-white/30"
    >
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}