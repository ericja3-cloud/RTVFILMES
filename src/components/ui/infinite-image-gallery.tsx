import { motion } from "framer-motion";

export function InfiniteImageGallery({ images }: { images: string[] }) {
  const row1 = images.slice(0, 14);
  const row2 = images.slice(14, 27);
  const row3 = images.slice(27);

  return (
    <div className="w-full overflow-hidden flex flex-col gap-4 py-10 relative">
      {/* Gradients to fade edges removed as per user request */}

      <MarqueeRow images={row1} direction="left" speed={60} />
      <MarqueeRow images={row2} direction="right" speed={50} />
      <MarqueeRow images={row3} direction="left" speed={70} />
    </div>
  );
}

export function MarqueeRow({ images, direction, speed, itemClassName }: { images: string[], direction: "left" | "right", speed: number, itemClassName?: string }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex w-full relative overflow-hidden group">
      <style>{`
        @keyframes slide-marquee-${direction} {
          0% { transform: translateX(${direction === 'left' ? '0' : '-50%'}); }
          100% { transform: translateX(${direction === 'left' ? '-50%' : '0'}); }
        }
        .animate-marquee-${direction} {
          animation: slide-marquee-${direction} ${speed}s linear infinite;
        }
        .group:hover .animate-marquee-${direction} {
          animation-play-state: paused;
        }
      `}</style>
      <div 
        className={`flex gap-4 px-2 w-max animate-marquee-${direction}`}
      >
         {[...images, ...images].map((img, i) => (
           <div key={i} className={`flex-shrink-0 rounded-2xl overflow-hidden border border-border/50 bg-black/20 relative transform-gpu ${itemClassName || 'w-64 sm:w-80 md:w-96 aspect-video'}`}>
             <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
             <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 will-change-transform" loading="lazy" alt="Gallery frame" />
           </div>
         ))}
      </div>
    </div>
  )
}
