import Image from 'next/image';

interface CardProps {
  title: string;
  date: string;
  clientName: string;
  bgImageUrl: string;
}

export default function Card({ title, date, clientName, bgImageUrl }: CardProps) {
  return (
    <div className="relative w-[200px] h-[300px] rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-gray-800 border-3 border-white hover:border-[#ffdf20] transition duration-300"> 
      {/* 1. Only render the Image if bgImageUrl is truthy and not an empty string */}
      {bgImageUrl && (
        <Image
          src={bgImageUrl}
          alt={`${title} background`}
          fill
          sizes="300px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      )}

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content Container (Single Column Layout) */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
          {date}
        </span>
        <h3 className="text-lg font-bold leading-tight line-clamp-2 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-200 font-medium">
          <span className="text-gray-400 font-normal">Client:</span> {clientName}
        </p>
      </div>
    </div>
  );
}

