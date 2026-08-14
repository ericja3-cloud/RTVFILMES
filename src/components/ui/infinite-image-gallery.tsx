import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import React, { useState } from "react";

export function InfiniteImageGallery({ images }: { images: string[] }) {
  const row1 = images.slice(0, 14);
  const row2 = images.slice(14, 27);
  const row3 = images.slice(27);

  return (
    <div className="w-full overflow-hidden flex flex-col gap-4 py-10 relative">
      <MarqueeRow images={row1} direction="forward" speed={0.5} />
      <MarqueeRow images={row2} direction="backward" speed={0.4} />
      <MarqueeRow images={row3} direction="forward" speed={0.6} />
    </div>
  );
}

export function MarqueeRow({ images, direction, speed, itemClassName }: { images: string[], direction: "forward" | "backward", speed: number, itemClassName?: string }) {
  if (!images || images.length === 0) return null;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: speed * 2, stopOnInteraction: false, stopOnMouseEnter: true, direction: direction })]
  );
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full relative group">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-4 px-2">
          {[...images, ...images, ...images, ...images, ...images].map((img, i) => (
            <div 
              key={i}
              onClick={() => emblaApi?.clickAllowed() && setSelectedImage(img)}
              className={`flex-shrink-0 flex-grow-0 min-w-0 rounded-2xl overflow-hidden border border-border/50 bg-black/20 relative transform-gpu cursor-pointer ${itemClassName || 'w-64 sm:w-80 md:w-96 aspect-video'}`}
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <img draggable={false} src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 will-change-transform select-none" loading="lazy" alt="Gallery frame" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-[90vw] h-[90vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center z-[100]">
          <DialogTitle className="sr-only">Visualizar Imagem</DialogTitle>
          {selectedImage && <img src={selectedImage} className="max-w-full max-h-full object-contain rounded-xl" alt="Gallery preview" />}
        </DialogContent>
      </Dialog>
    </div>
  )
}
