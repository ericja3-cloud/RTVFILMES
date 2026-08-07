"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ProjectCase {
  title: string;
  desc: string;
  img: string;
  tag: string;
}

interface ScrollMorphGalleryProps {
  cases: ProjectCase[];
}

export default function ScrollMorphGallery({ cases }: ScrollMorphGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animates from a pill-like centered inset to full screen
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["inset(10% 10% 10% 10% round 3rem)", "inset(0% 0% 0% 0% round 0rem)"]
  );

  // Content fades in after morphing
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);

  // Intro text fades out
  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // The first case is our "featured" morphing background
  const featured = cases[0];
  const others = cases.slice(1);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background that morphs */}
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 w-full h-full bg-card shadow-glow border border-primary/20 flex flex-col justify-center"
        >
          {/* Featured Image acting as background */}
          <div className="absolute inset-0 pointer-events-none">
             <img src={featured.img} alt={featured.title} className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          
          {/* Initial Title (fades out) */}
          <motion.div 
            style={{ opacity: introOpacity, scale: introScale }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10"
          >
             <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md shadow-glow">
               Casos de Sucesso
             </span>
             <h2 className="text-4xl md:text-6xl font-bold font-display max-w-3xl text-foreground leading-tight">
               Projetos que levam <span className="text-gradient">resultados</span> reais.
             </h2>
             <p className="mt-6 text-muted-foreground text-lg flex items-center gap-2">
               Role para explorar <ArrowRight className="w-4 h-4 animate-bounce" />
             </p>
          </motion.div>

          {/* Grid of other cases (fades in) */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="relative z-20 w-full h-full p-6 md:p-12 lg:p-24 flex flex-col justify-center"
          >
             <h3 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-foreground">
               Destaques do <span className="text-gradient">Portfólio</span>
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {others.slice(0, 4).map((c, i) => (
                  <motion.div 
                    key={c.title}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-premium transition-all duration-500 cursor-pointer"
                  >
                     <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                     <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                       <span className="inline-block px-3 py-1.5 mb-3 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-primary/20 text-primary backdrop-blur-md border border-primary/20">
                         {c.tag}
                       </span>
                       <h4 className="font-semibold text-lg leading-tight mb-2">{c.title}</h4>
                       <p className="text-xs text-muted-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">{c.desc}</p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
