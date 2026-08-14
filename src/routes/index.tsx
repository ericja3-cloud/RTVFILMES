import { createFileRoute } from "@tanstack/react-router";

import {
  Video, Radio, Mic, Tv, Megaphone, Camera, CheckCircle2, ArrowRight,
  Building2, Landmark, Factory, Store, Vote, PartyPopper, GraduationCap,
  Users, Headphones, Plane, Sun, Monitor, Scissors, Wrench, ChevronRight,
  Instagram, Youtube, Linkedin, Facebook, MessageCircle, MapPin, Mail, Phone, Clock,
} from "lucide-react";
import heroStudio from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-11-00).jpg";
import heroVideo from "@/assets/24497-344562750.mp4";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { InfiniteImageGallery, MarqueeRow } from "@/components/ui/infinite-image-gallery";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import rtvLogo from "@/assets/RTV INST 23-26 FRAMES/rtv-logo.png";
import estudiosLogo from "@/assets/estudios.png";
import estruturaBg from "@/assets/IMG_3458.PNG";

import { Spotlight } from "@/components/ui/spotlight";
import { motion, useScroll, useTransform } from "framer-motion";
import mobileUnit from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-23-05).jpg";
import podcastStudio from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-33-18).jpg";
import droneEvent from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-43-01).jpg";
import liveEvent from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-56-01).jpg";

const framesModules = import.meta.glob('../assets/RTV INST 23-26 FRAMES/*.jpg', { eager: true, query: '?url', import: 'default' });
const galleryImages = [estruturaBg, ...Object.values(framesModules) as string[]];

import React, { useEffect, useRef, useState } from "react";

const instagramPosts = [
  "C-Gxhw4PmLo",
  "CwVCtQ4AWvU",
  "Da5ifFhupKG",
  "Da5E4OKusaf",
  "Da4CAQCOIpo",
  "Da3u8isPPD_",
  "Da3hVZxP2ht",
  "Daiuw2bGdqz",
];

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Video, title: "Produção de Vídeos", desc: "Institucionais, comerciais, campanhas, documentários e vídeos para redes sociais." },
  { icon: Radio, title: "Transmissões ao Vivo", desc: "Cobertura das Eleições, eventos, podcasts, seminários, esportes e programas ao vivo." },
  { icon: Mic, title: "Estúdios Profissionais", desc: "Estrutura completa para gravações de podcasts, videocasts, programas de TV e conteúdos digitais." },
  { icon: Tv, title: "Produção para TV", desc: "Produção de programas, reportagens, entrevistas e conteúdos jornalísticos." },
  { icon: Megaphone, title: "Campanha Política", desc: "Especialistas em campanhas eleitorais, mandatos e comunicação pública." },
  { icon: Camera, title: "Cobertura de Eventos", desc: "Captação multicâmera, transmissão simultânea e produção completa." },
];

const structure = [
  { icon: Mic, label: "3 Estúdios Profissionais" },
  { icon: Wrench, label: "Unidade Móvel de Produção" },
  { icon: Sun, label: "Iluminação Profissional" },
  { icon: Plane, label: "Drone" },
  { icon: Radio, label: "Streaming Multiplataforma" },
  { icon: Headphones, label: "Podcast" },
  { icon: Video, label: "Videocast" },
  { icon: Users, label: "Equipe técnica especializada" },
];

const reasons = [
  "Mais de 20 anos de experiência",
  "Equipe especializada",
  "Estrutura própria",
  "Atendimento personalizado",
  "Tecnologia profissional",
  "Soluções completas",
  "Melhor custo-benefício",
];

const segments = [
  { icon: Building2, label: "Empresas", desc: "" },
  { icon: Landmark, label: "Prefeituras", desc: "" },
  { icon: Landmark, label: "Câmaras Municipais", desc: "" },
  { icon: Factory, label: "Indústrias", desc: "" },
  { icon: Vote, label: "Campanhas Políticas", desc: "" },
  { icon: PartyPopper, label: "Eventos", desc: "" },
  { icon: GraduationCap, label: "Instituições", desc: "" },
  { icon: Mic, label: "Podcasts", desc: "" },
];

const programs = [
  { title: "Conexão Alto Tietê", tag: "Podcast", img: heroStudio, youtubeId: "kyei829xVZI", link: "https://www.youtube.com/watch?v=kyei829xVZI&list=PLVf77GDUaJ2ISKJJtaeFHRACNSSmIgmzm&index=22" },
  { title: "Na Área", tag: "Programa", img: mobileUnit, youtubeId: "sulnZEL2Xic", link: "https://www.youtube.com/watch?v=sulnZEL2Xic&list=PLVf77GDUaJ2JiV9B6YqHiUvxWdYfi8C44&index=13" },
  { title: "Live de Sorteios", tag: "Live", img: podcastStudio, youtubeId: "NL2NIUZ6S8Y", link: "https://www.youtube.com/live/NL2NIUZ6S8Y" },
  { title: "Festa do Divino", tag: "Ao Vivo", img: droneEvent, youtubeId: "AeBv1gAK8Uk", link: "https://www.youtube.com/watch?v=AeBv1gAK8Uk&list=PLVf77GDUaJ2Lyb9t481XC2UFNcqWWZCCG&index=2" },
  { title: "Cobertura das Eleições", tag: "Ao Vivo", img: liveEvent, youtubeId: "jXHPzbcL4eY", link: "https://www.youtube.com/watch?v=jXHPzbcL4eY&list=PLVf77GDUaJ2ITwK_NUqf9NekSfNFpjIkt&index=12" },
  { title: "Câmara Municipal de Mogi das Cruzes", tag: "Câmara", img: podcastStudio, youtubeId: "6XrnwiG2UY0", link: "https://www.youtube.com/watch?v=6XrnwiG2UY0&list=PL5-A4XdQWtz3IP87HZbpiI7QhkVuuaGFE" },
  { title: "Mogi Basquete", tag: "Esportes", img: heroStudio, youtubeId: "W3UnTRni1S4", link: "https://www.youtube.com/watch?v=W3UnTRni1S4" },
  { title: "Campanhas Políticas", tag: "Política", img: mobileUnit, youtubeId: "bA3JF_cPm0s", link: "https://www.youtube.com/watch?v=bA3JF_cPm0s" },
];

import thumbNaArea from "@/assets/THUMBS/THUMB NA ÁREA.png";
import thumbAgoraEShow from "@/assets/THUMBS/THUMB AGORA É SHOW OK.png";
import thumbMogiBasquete from "@/assets/THUMBS/THUMB MOGI BASQUETE.png";
import thumbConexao from "@/assets/THUMBS/conexao auto tietejpg.jpg";
import thumbPaPum from "@/assets/THUMBS/THUMB PÁ PUM.png";
import thumbCafe from "@/assets/THUMBS/THUMB CAFÉ COM + SAÚDE.png";
import thumbEleicoes from "@/assets/THUMBS/THUMB ELEICOES 2026.jpg";
import thumbEventos from "@/assets/THUMBS/thumb estuidos RTV.png";
import thumbPadre from "@/assets/THUMBS/THUMB PADRE CLEITON RESPONDE.jpg";
import thumbSeConecta from "@/assets/THUMBS/THUMB SE CONECTA.jpeg";
import thumbPodSorrir from "@/assets/THUMBS/THUMB APCD.png";
import thumbBarufi from "@/assets/THUMBS/THUMB BARUFI.jpeg";

const cases = [
  { title: "Na Área", desc: "", img: thumbNaArea, tag: "Programa", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2JiV9B6YqHiUvxWdYfi8C44&si=oAtoFMUyWxwqMjhV" },
  { title: "Agora é Show", desc: "", img: thumbAgoraEShow, tag: "Programa", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2Ku81oZqjiA5qnmtUGo5apM&si=Vrq-wxAWLXp-LVgQ" },
  { title: "Mogi Basquete", desc: "", img: thumbMogiBasquete, tag: "Esportes", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2JgzdL51orSXwDSuVjI547X&si=G7EKiwcQweXxUQpJ" },
  { title: "Conexão Alto Tietê", desc: "", img: thumbConexao, tag: "Podcast", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2ISKJJtaeFHRACNSSmIgmzm&si=uO-0cnTnSQcHJDrm" },
  { title: "Pá Pum Podcast", desc: "", img: thumbPaPum, tag: "Podcast", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2KY2M-fM2qGxX-E6DXpe4jU&si=M_FNMvD484Chow6L" },
  { title: "Café com + Saúde", desc: "", img: thumbCafe, tag: "Podcast", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2Ll7e2OvWkSX_jimvqN15NB&si=QudYwGUUisVK52L-" },
  { title: "Eleições 2026", desc: "", img: thumbEleicoes, tag: "Política", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2ITwK_NUqf9NekSfNFpjIkt&si=vGczSRvEXUgOqCwq" },
  { title: "Eventos Estúdios RTV", desc: "", img: thumbEventos, tag: "Eventos", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2Lyb9t481XC2UFNcqWWZCCG&si=IkrnsKUsXWZHnyGp" },
  { title: "Padre Cleiton Responde", desc: "", img: thumbPadre, tag: "Programa", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2IYXN-XPGTcVVnAuJdk3-rl&si=LEQiY9__A6kGkgpx" },
  { title: "Se Conecta", desc: "", img: thumbSeConecta, tag: "Podcast", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2I47yFy8yEa42hYaGJasno-&si=ImdhCYT2VcuWdZzV" },
  { title: "Pod Sorrir", desc: "", img: thumbPodSorrir, tag: "Podcast", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2Jy5mpuuvAB9oMrAz75mXL4&si=PH6XBOpNvXs7EE89" },
  { title: "Barufi Podcast", desc: "", img: thumbBarufi, tag: "Podcast", link: "https://youtube.com/playlist?list=PLVf77GDUaJ2IU_3VkauIj0Aa2BFQgTN0e&si=J0KcFZIlzArwqG4o" },
];

const process = [
  { n: "01", title: "Entendemos sua necessidade", desc: "Briefing detalhado e alinhamento de objetivos." },
  { n: "02", title: "Planejamos o projeto", desc: "Roteiro, cronograma e logística sob medida." },
  { n: "03", title: "Produzimos", desc: "Captação com equipe e equipamentos profissionais." },
  { n: "04", title: "Editamos", desc: "Pós-produção, cor, som e finalização em alta qualidade." },
  { n: "05", title: "Entregamos", desc: "Nos formatos ideais para cada canal e público." },
];

const testimonials = [
  {
    quote: "A melhor produtora do Alto Tietê! Estrutura completa, não perde nada para São Paulo. Estúdio de TV, melhores equipamentos.",
    name: "Talita Mota",
    role: "Avaliação Google · ★★★★★",
    initials: "TM",
  },
  {
    quote: "Excelente estrutura para podcast e camarim. Toda a equipe muito atenciosa, especialmente o Léo que acompanha as gravações!",
    name: "Kelly Passos",
    role: "Local Guide · Google · ★★★★★",
    initials: "KP",
  },
  {
    quote: "Excelente estrutura e profissionais altamente capacitados. Alto nível de entrega. Em breve estarei de novo com vocês. Sucesso!",
    name: "Glauco Rocha",
    role: "Local Guide · Google · ★★★★★",
    initials: "GR",
  },
  {
    quote: "Excelente ambiente, muito bem equipado e um pessoal de excelência no atendimento.",
    name: "Cláudio Truffa",
    role: "Avaliação Google · ★★★★★",
    initials: "CT",
  },
  {
    quote: "Grande estrutura para filmagens, sejam internas ou externas.",
    name: "Marcelo Monteiro",
    role: "Local Guide · Google · ★★★★★",
    initials: "MM",
  },
  {
    quote: "Equipe incrível, lugar maravilhoso e serviços de uma qualidade sem igual. Obrigado, RTV!",
    name: "Matheus Hussein",
    role: "Avaliação Google · ★★★★★",
    initials: "MH",
  },
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_20px_-5px_oklch(0.82_0.17_82/0.4)] backdrop-blur-md">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-glow" />
      {children}
    </div>
  );
}

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = 'text-muted-foreground';
  const hoverTextColor = 'text-foreground';
  const textSizeClass = 'text-sm font-medium';

  return (
    <a href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-300 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

function MiniYoutubeCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const videos = ["3a_rRiPdto8", "4EhqJS1bD24", "79LuFI2qDr4", "7LoDM_HnUP4", "83-6fod1QP0", "9MLcG1ADuU4", "Cc0810DIlAc", "HPWeOo6WH2g"];

  return (
    <div className="w-full overflow-hidden relative rounded-xl border border-border/50 bg-black/20 p-3 group cursor-grab active:cursor-grabbing">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {[...videos, ...videos, ...videos].map((id, idx) => (
            <a 
              key={idx} 
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (emblaApi && !emblaApi.clickAllowed()) e.preventDefault();
              }}
              className="w-40 h-24 md:w-44 md:h-24 rounded-lg overflow-hidden relative shrink-0 hover:scale-105 transition-transform border border-white/10"
            >
              <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="YouTube Thumbnail" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Youtube className="w-8 h-8 text-[#FF0000] drop-shadow-md" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}

function CasesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedCase, setSelectedCase] = useState<{img: string, title: string} | null>(null);

  return (
    <div className="w-full relative mt-10 group">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6 px-4">
          {[...cases, ...cases, ...cases].map((c, i) => (
            <div 
              key={`${c.title}-${i}`}
              onClick={() => emblaApi?.clickAllowed() && setSelectedCase({img: c.img, title: c.title})}
              className="w-[320px] md:w-[500px] flex-shrink-0 flex-grow-0 min-w-0 aspect-video relative group/item rounded-2xl overflow-hidden border border-border bg-card shadow-elegant cursor-pointer transform-gpu"
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <img 
                draggable={false}
                src={c.youtubeId ? `https://i.ytimg.com/vi/${c.youtubeId}/maxresdefault.jpg` : c.img} 
                alt={c.title} 
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 ease-out will-change-transform select-none" 
                loading="lazy" 
                onError={(e) => {
                  if (c.youtubeId && !(e.target as HTMLImageElement).src.includes('hqdefault')) {
                    (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${c.youtubeId}/hqdefault.jpg`;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-80 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500 ease-out">
                <span className="inline-flex self-start text-[10px] md:text-xs uppercase tracking-widest bg-primary/20 text-primary px-3 py-1 rounded-full mb-3 backdrop-blur-md border border-primary/20">
                  {c.tag}
                </span>
                <h3 className="text-white text-xl md:text-3xl font-display font-bold leading-tight mb-2 drop-shadow-md">
                  {c.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover/item:h-auto overflow-hidden">
                  {c.desc}
                </p>
                {c.link && (
                  <a 
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 delay-150 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white"
                  >
                    Assistir <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedCase} onOpenChange={(isOpen) => !isOpen && setSelectedCase(null)}>
        <DialogContent className="max-w-6xl w-[90vw] h-[90vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center z-[100]">
          <DialogTitle className="sr-only">{selectedCase?.title || "Visualizar Imagem"}</DialogTitle>
          {selectedCase && <img src={selectedCase.img} className="max-w-full max-h-full object-contain rounded-xl" alt={selectedCase.title} />}
        </DialogContent>
      </Dialog>
      
      {/* Gradient Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-30" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-30" />
    </div>
  );
}

function Index() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  useEffect(() => {
    // Hold the loading screen for 1.8s
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 1800);
    
    // Remove from DOM after fade out (800ms)
    const timer2 = setTimeout(() => {
      setShowPreloader(false);
    }, 2600);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-2xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Preloader */}
      {showPreloader && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="relative flex flex-col items-center">
            {/* Logo pulse animation */}
            <motion.img 
              src={rtvLogo} 
              alt="RTV Filmes" 
              className="h-8 md:h-10 w-auto mb-6 drop-shadow-[0_0_15px_rgba(255,200,0,0.3)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Loading line */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      )}
      {/* Nav */}
      <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                       flex flex-col items-center
                       px-6 md:px-10 py-3 md:py-3.5 backdrop-blur-md
                       ${headerShapeClass}
                       border border-border/60 bg-background/60
                       w-[calc(100%-2rem)] md:w-auto md:min-w-[850px] lg:min-w-[1000px]
                       transition-[border-radius] duration-300 ease-in-out shadow-elegant`}>

        <div className="flex items-center justify-between w-full gap-x-6 md:gap-x-10">
          <a href="#top" className="flex items-center group shrink-0">
            <img src={rtvLogo} alt="RTV Filmes" className="h-8 md:h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-[1.02]" fetchPriority="high" loading="eager" />
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              ["#quem-somos", "Quem somos"],
              ["#servicos", "Serviços"],
              ["#estrutura", "Estrutura"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <AnimatedNavLink key={href} href={href}>
                {label}
              </AnimatedNavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <div className="relative group w-full sm:w-auto">
               <div className="absolute inset-0 -m-1.5 rounded-full
                             hidden sm:block
                             bg-primary/30
                             opacity-40 filter blur-lg pointer-events-none
                             transition-all duration-300 ease-out
                             group-hover:opacity-80 group-hover:blur-xl group-hover:-m-2"></div>
               <a href="#contato" className="relative z-10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary bg-transparent border border-primary rounded-full hover:bg-primary/10 transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2">
                 Solicitar Orçamento
               </a>
            </div>
          </div>

          <button className="md:hidden flex items-center justify-center w-8 h-8 text-foreground focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
            {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        <div className={`md:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                         ${isOpen ? 'max-h-[1000px] opacity-100 pt-6 pb-2' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-4 text-sm w-full font-medium">
            {[
              ["#quem-somos", "Quem somos"],
              ["#servicos", "Serviços"],
              ["#estrutura", "Estrutura"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={toggleMenu} className="text-muted-foreground hover:text-foreground transition-colors w-full text-center">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center space-y-4 mt-6 w-full">
            <a href="#contato" onClick={toggleMenu} className="px-5 py-2.5 text-sm font-semibold text-primary bg-transparent border border-primary rounded-full hover:bg-primary/10 transition-all duration-200 w-full text-center">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 lg:pb-32 px-6 overflow-hidden bg-black min-h-[85vh] flex flex-col justify-center items-center font-sans">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster={heroStudio}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Main Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 w-full relative">
          <div className="flex items-center bg-transparent border border-primary/50 rounded-full pl-1 pr-4 py-1 text-primary text-xs mb-5 tracking-wider font-light backdrop-blur-sm">
            <span className="border border-primary text-primary px-3 py-1 rounded-full mr-2 text-xs font-semibold">Desde 2003</span>
            Produtora Audiovisual
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.5rem] font-bold leading-[1.1] font-display text-white"
          >
            Produções Audiovisuais que Conectam
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.5rem] font-bold leading-[1.1] mb-6 font-display text-white/90"
          >
            Marcas, Pessoas e Resultados.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mb-8 font-light text-white/80"
          >
            A RTV Filmes desenvolve soluções audiovisuais completas para empresas, órgãos públicos, campanhas políticas e eventos. Da criação à transmissão ao vivo, entregamos qualidade, inovação e experiência em cada projeto.
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="#contato" className="bg-gradient-to-r from-primary to-[#ff9900] text-black font-bold px-8 py-4 cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_rgba(255,200,0,0.6)] border-none rounded-full text-sm transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,200,0,0.3)]">
              Solicitar orçamento
            </a>
            <a href="#servicos" className="bg-white/5 border border-white/20 text-white font-medium px-8 py-4 cursor-pointer hover:bg-white/15 hover:border-white/40 rounded-full text-sm transition-all duration-300 backdrop-blur-md">
              Conheça nossos serviços
            </a>
          </div>
        </div>

        {/* Infinite Moving Fading Carousel - Full Width Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16 flex items-center z-20 border-t border-white/10 bg-black/20 backdrop-blur-md">
          <style>{`
            @keyframes slide-text-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.333333%); } /* Since we have 3 identical sets, shift by 1/3 */
            }
            .animate-text-marquee {
              animation: slide-text-marquee 15s linear infinite;
              will-change: transform;
            }
          `}</style>
          <div className="flex whitespace-nowrap text-white/50 text-sm tracking-[0.2em] font-medium items-center w-max animate-text-marquee">
            {/* We output the same set 3 times to allow seamless infinite scrolling */}
            {[1, 2, 3].map((setIndex) => (
              <div key={setIndex} className="flex items-center">
                <span className="mx-8">CINEMA</span>
                <span className="mx-8 text-primary/60">∞</span>
                <span className="mx-8">TV</span>
                <span className="mx-8 text-primary/60">∞</span>
                <span className="mx-8">LIVE</span>
                <span className="mx-8 text-primary/60">∞</span>
                <span className="mx-8">STREAMING</span>
                <span className="mx-8 text-primary/60">∞</span>
              </div>
            ))}
          </div>
          {/* Fading gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20"></div>
        </div>

        {/* Gradient Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] lg:h-[450px] bg-gradient-to-t from-primary/40 via-primary/10 to-transparent rounded-t-full opacity-70 blur-[100px] pointer-events-none"></div>
      </section>

      {/* Quem Somos */}
      <Section id="quem-somos" className="border-t border-border pt-20 pb-20">
        <Reveal className="grid lg:grid-cols-12 gap-y-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 lg:col-start-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Eyebrow>Quem Somos</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Mais de duas décadas produzindo conteúdo de qualidade.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 relative">
            <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/60 via-primary-glow/30 to-transparent shadow-elegant">
              <div className="relative rounded-3xl overflow-hidden bg-black">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/rYbCwxswHnE?rel=0&modestbranding=1"
                    title="RTV Filmes — Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
              </div>
              <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-primary/15 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-1 space-y-6 text-muted-foreground text-lg leading-relaxed pt-2 lg:pt-0">
            <p>
              A RTV Filmes é uma produtora audiovisual especializada em transformar ideias em projetos de alto impacto.
            </p>
            <p>
              Com estrutura própria, equipe especializada e equipamentos profissionais, atendemos empresas, órgãos públicos, campanhas eleitorais, eventos e emissoras de televisão.
            </p>
            <p className="font-medium text-foreground/90">
              Nosso compromisso é entregar soluções completas, aliando criatividade, tecnologia e eficiência para conectar sua marca em todas as telas.
            </p>
          </div>

        </Reveal>
      </Section>

      {/* Serviços */}
      <Section id="servicos" className="border-t border-border">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-5xl font-bold">Nossos Serviços</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full p-8 rounded-2xl bg-card border border-border overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition duration-500 group-hover:scale-110">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Estrutura */}
      <Section id="estrutura" className="border-t border-border relative overflow-hidden pb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
          style={{ backgroundImage: `url(${estruturaBg})` }} 
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
            Nossa Estrutura
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {structure.map((s, i) => (
              <Reveal key={s.label} delay={i * 50}>
                <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all hover:-translate-y-1 h-full shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                    <s.icon className="w-6 h-6 text-primary shrink-0" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground/90 leading-tight">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery Carousel - Full Width */}
      <div className="w-full py-6 pb-24 border-b border-border/30 overflow-hidden">
        {galleryImages.length > 0 && <MarqueeRow images={galleryImages.slice(0, 18)} direction="forward" speed={0.6} itemClassName="w-80 sm:w-96 md:w-[32rem] lg:w-[40rem] aspect-[16/9]" />}
      </div>

      {/* Segmentos */}
      <Section className="border-t border-border bg-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold">Segmentos que Atendemos</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-6xl mx-auto relative z-10">
          {segments.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/10 backdrop-blur-md p-5 flex items-start gap-4 w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33%-14px)] lg:w-[calc(25%-15px)] hover:bg-card/40 transition-all duration-300 hover:border-primary/40 shadow-sm"
            >
              <Spotlight className="from-primary/30 via-primary/5 to-transparent" size={250} />
              
              <div className="shrink-0 w-10 h-10 rounded-xl bg-black/50 border border-border/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-300">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex-1 pt-0.5">
                <h3 className="font-semibold text-foreground text-sm tracking-wide">{s.label}</h3>
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programas */}
      <Section className="border-t border-border !pt-8 md:!pt-0 !pb-0">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center md:justify-start">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left relative z-10">Já conhece o nosso canal?</h2>
          <img src={estudiosLogo} alt="Estúdios RTV" className="w-[28rem] sm:w-[36rem] md:w-[48rem] lg:w-[56rem] object-contain drop-shadow-2xl scale-125 md:scale-110 -mt-2 -mb-8 md:-my-12" />
        </div>

        <div className="-mt-12 md:-mt-20 flex flex-col items-center mx-auto relative z-20 w-full">
          <div className="max-w-4xl text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed space-y-4 text-justify px-6 md:px-0">
            <p>
              Além dos conteúdos desenvolvidos especialmente para nossos clientes, grande parte das produções realizadas pela RTV também ganha espaço no Estúdios RTV, nosso canal exclusivo.
            </p>
            <p>
              Por lá, reunimos programas ao vivo, podcasts, jornalismo, esportes e edições especiais, levando conteúdo, informação e entretenimento para todas as telas.
            </p>
          </div>
        </div>
      </Section>

      {/* Carousel movido da seção de baixo e Botão */}
      <div className="w-full relative mb-12 -mt-10 overflow-hidden">
        <div className="w-full px-6 mb-12 mt-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">Programas do canal</h2>
          </div>
        </div>
        <div className="w-full relative mb-12">
          <CasesCarousel />
        </div>

        <div className="flex justify-center mt-4 mb-16 w-full">
          <a 
            href="https://youtube.com/@estudiosrtv?si=xh42LrKdrrHFOp9Q" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-glow"
          >
            <Youtube className="w-6 h-6" />
            Inscreva-se agora
          </a>
        </div>
      </div>

      {/* Galeria Completa removida */}


      {/* Instagram */}
      <Section className="border-t border-border relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "conic-gradient(from 210deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)" }} />
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 relative">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Ao vivo no Instagram</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Nos bastidores da{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 55%,#962fbf 80%,#4f5bd5 100%)" }}
              >
                RTV
              </span>
              .
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">Uma amostra dos nossos últimos trabalhos direto do @rtvfilmes.</p>
          </div>
          <a
            href="https://www.instagram.com/rtvfilmes/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-medium px-5 py-3 rounded-full text-sm text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
            style={{ background: "linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 55%,#962fbf 80%,#4f5bd5 100%)" }}
          >
            <Instagram className="w-4 h-4" /> Seguir @rtvfilmes
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <InstagramCarousel />
      </Section>

      <section id="contato" className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="max-w-5xl mx-auto px-6 py-32 relative text-center">
          <Eyebrow>Pronto para começar?</Eyebrow>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Vamos produzir seu <span className="text-gradient">próximo projeto?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Nossa equipe está pronta para transformar sua ideia em uma produção audiovisual de alto impacto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511950257273" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-5 rounded-full hover:bg-primary/90 transition-colors shadow-glow"
            >
              Solicitar orçamento <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511950257273" 
              className="inline-flex items-center gap-2 border border-border/80 bg-card/30 backdrop-blur-sm font-semibold px-10 py-5 rounded-full hover:bg-secondary/60 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </motion.a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <img src={rtvLogo} alt="RTV Filmes" className="h-10 w-auto mb-4" />
              <p className="text-muted-foreground text-sm max-w-md">
                Produções Audiovisuais que Conectam Marcas, Pessoas e Resultados.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <a href="tel:+551147924794" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> (11) 4792-4794
                  </a>
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <a href="https://wa.me/5511950257273" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> (11) 95025-7273
                  </a>
                </li>
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><Mail className="w-4 h-4 shrink-0" /> contato@rtvfilmes.com.br</li>
                <li className="flex items-start gap-2 pt-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> 
                  <span className="leading-tight">
                    Rua Eudóxia Castello Branco, 383<br/>
                    Vila Suissa, Mogi das Cruzes - SP<br/>
                    08810-040
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xs pt-1">
                  <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-80" />
                  <span className="opacity-80">Seg a Sex - 8h às 18h</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">Redes</h4>
              <div className="flex gap-2">
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.instagram.com/rtvfilmes/?hl=pt-br" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-glow transition-all"><Instagram className="w-4 h-4" /></motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.youtube.com/@estudiosrtv" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-glow transition-all"><Youtube className="w-4 h-4" /></motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://pt-br.facebook.com/rtvfilmesprodutora/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-glow transition-all"><Facebook className="w-4 h-4" /></motion.a>
              </div>
              <a href="#" className="block mt-6 text-xs text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
            </div>
          </div>
          <div className="border-t border-border/50">
            <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-muted-foreground flex flex-wrap justify-center text-center">
              <div>© {new Date().getFullYear()} RTV Filmes. Todos os direitos reservados.</div>
            </div>
          </div>
        </Reveal>
      </footer>
    </div>
  );
}

function InstagramCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  };

  useEffect(() => {
    updateState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-ig-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.9;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {instagramPosts.map((code, i) => (
          <div
            key={code}
            data-ig-card
            className="group/card shrink-0 w-[290px] sm:w-[330px] relative rounded-[22px] p-[1.5px] transition-transform duration-300 hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, hsl(var(--border)) 0%, hsl(var(--border)) 100%)" }}
          >
            {/* animated gradient border on hover */}
            <div
              className="absolute inset-0 rounded-[22px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 55%,#962fbf 80%,#4f5bd5 100%)" }}
            />
            <div className="relative rounded-[20px] overflow-hidden bg-card flex flex-col h-full">
              {/* card header as link */}
              <a 
                href={`https://www.instagram.com/p/${code}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 border-b border-border/60 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full p-[2px]"
                    style={{ background: "linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 55%,#962fbf 80%,#4f5bd5 100%)" }}
                  >
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <img src={rtvLogo} alt="" className="w-4 h-4 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate">rtvfilmes</div>
                    <div className="text-[10px] text-muted-foreground">Mogi das Cruzes · SP</div>
                  </div>
                </div>
                <Instagram className="w-4 h-4 text-muted-foreground group-hover/card:text-primary transition" />
              </a>

              {/* embed */}
              <div className="relative w-full bg-black flex-1" style={{ minHeight: "290px" }}>
                <iframe
                  src={`https://www.instagram.com/p/${code}/embed`}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  allow="encrypted-media"
                  title={`Post ${i + 1} de @rtvfilmes`}
                  scrolling="no"
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* controls + progress */}
      <div className="flex items-center gap-4 mt-2">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full border border-border bg-card/60 backdrop-blur flex items-center justify-center hover:border-primary hover:text-primary transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className="w-10 h-10 rounded-full border border-border bg-card/60 backdrop-blur flex items-center justify-center hover:border-primary hover:text-primary transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 h-[3px] rounded-full bg-border/60 overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-150"
            style={{
              width: `${Math.max(8, progress * 100)}%`,
              background: "linear-gradient(90deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
            }}
          />
        </div>
        <div className="text-xs text-muted-foreground tabular-nums hidden sm:block">
          {Math.round(progress * 100)}%
        </div>
      </div>
    </div>
  );
}
