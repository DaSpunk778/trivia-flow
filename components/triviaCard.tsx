import Image from "next/image";

type TriviaCardProps = {
  title: string;
  prize: string;
  closes: string;
  image: string;
  onPlay?: () => void;
};

export function TriviaCard({
  title,
  prize,
  closes,
  image,
  onPlay,
}: TriviaCardProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-3">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] font-semibold text-white">
            {title}
          </span>
          <span className="text-[13px] text-white/50">{prize}</span>
          <span className="text-[12px] font-medium text-[#FCFC77]">
            {closes}
          </span>
        </div>
      </div>
      <button
        onClick={onPlay}
        className="shrink-0 rounded-full bg-[#1D1D1D] px-5 py-2 text-[13px] font-semibold text-[#FCFC77] transition-colors hover:bg-white/5 active:bg-white/10"
      >
        Play
      </button>
    </div>
  );
}
