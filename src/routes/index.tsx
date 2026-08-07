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

// Optimize image loading by only extracting their URLs, avoiding base64 inlining in JS bundle
const framesModules = import.meta.glob('../assets/RTV INST 23-26 FRAMES/*.jpg', { eager: true, query: '?url', import: 'default' });
const galleryImages = Object.values(framesModules) as string[];

import { Spotlight } from "@/components/ui/spotlight";
import { motion, useScroll, useTransform } from "framer-motion";
import mobileUnit from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-23-05).jpg";
import podcastStudio from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-33-18).jpg";
import droneEvent from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-43-01).jpg";
import liveEvent from "@/assets/RTV INST 23-26 FRAMES/Comp RTV FILMES INST60 4K p frames (0-00-56-01).jpg";
import rtvLogo from "@/assets/rtv-logo.png";
import { useEffect, useRef, useState } from "react";

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
  { icon: Video, title: "Produção de Vídeos", desc: "Institucionais, comerciais, campanhas, documentários e conteúdo para redes sociais." },
  { icon: Radio, title: "Transmissões ao Vivo", desc: "Lives corporativas, eventos, podcasts, seminários, esportes e programas ao vivo." },
  { icon: Mic, title: "Estúdios Profissionais", desc: "Estrutura completa para podcasts, videocasts, programas de TV e conteúdos digitais." },
  { icon: Tv, title: "Produção para TV", desc: "Programas, reportagens, entrevistas e conteúdos jornalísticos." },
  { icon: Megaphone, title: "Comunicação Política", desc: "Especialistas em campanhas eleitorais, mandatos e comunicação pública." },
  { icon: Camera, title: "Cobertura de Eventos", desc: "Captação multicâmera, transmissão simultânea e produção completa." },
];

const structure = [
  { icon: Mic, label: "3 Estúdios Profissionais" },
  { icon: Wrench, label: "Unidade Móvel de Produção" },
  { icon: Camera, label: "Equipamentos 4K" },
  { icon: Sun, label: "Iluminação Profissional" },
  { icon: Plane, label: "Drone" },
  { icon: Radio, label: "Streaming Multiplataforma" },
  { icon: Headphones, label: "Podcast" },
  { icon: Video, label: "Videocast" },
  { icon: Monitor, label: "Teleprompter" },
  { icon: Scissors, label: "Ilhas de Edição" },
  { icon: Users, label: "Equipe Técnica Especializada" },
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
  { icon: Building2, label: "Empresas", desc: "Produções corporativas, institucionais e comerciais de alto impacto visual e estratégico." },
  { icon: Landmark, label: "Prefeituras", desc: "Comunicação pública e prestação de contas com linguagem acessível." },
  { icon: Landmark, label: "Câmaras Municipais", desc: "Sessões, debates e transparência com qualidade broadcast." },
  { icon: Factory, label: "Indústrias", desc: "Vídeos técnicos, institucionais e normativas de segurança (NRs)." },
  { icon: Store, label: "Comércio", desc: "Conteúdo digital de conversão e campanhas promocionais." },
  { icon: Vote, label: "Campanhas Políticas", desc: "Estratégia, roteiro e captação eleitoral para TV e meio digital." },
  { icon: PartyPopper, label: "Eventos", desc: "Cobertura de ponta a ponta, transmissões ao vivo e aftermovies." },
  { icon: GraduationCap, label: "Instituições", desc: "Documentários e conteúdos educacionais de credibilidade." },
  { icon: Users, label: "Associações", desc: "Histórias de engajamento social, valorização e impacto." },
  { icon: Mic, label: "Podcasts", desc: "Estrutura completa para gravação, edição e streaming de videocasts profissionais." },
];

const programs = [
  { title: "Conexão Alto Tietê", tag: "Programa", img: heroStudio },
  { title: "Na Área", tag: "Programa", img: mobileUnit },
  { title: "Podcasts", tag: "Série", img: podcastStudio },
  { title: "Coberturas Especiais", tag: "Ao Vivo", img: droneEvent },
  { title: "Lives Corporativas", tag: "Ao Vivo", img: liveEvent },
];

const cases = [
  { title: "Câmara Municipal de Mogi das Cruzes", desc: "Produção e operação da TV Câmara.", img: liveEvent, tag: "Governo" },
  { title: "Mogi Basquete", desc: "Transmissões oficiais e produção audiovisual.", img: droneEvent, tag: "Esportes" },
  { title: "Festa do Divino", desc: "Cobertura ao vivo e transmissão especial.", img: mobileUnit, tag: "Cultura" },
  { title: "Eventos Corporativos", desc: "Soluções corporativas customizadas e integradas.", img: podcastStudio, tag: "Corporativo" },
  { title: "Campanhas Eleitorais", desc: "Estratégia, captação e pós-produção política de alto desempenho.", img: heroStudio, tag: "Político" },
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
              ["#cases", "Cases"],
              ["#processo", "Processo"],
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
              ["#cases", "Cases"],
              ["#processo", "Processo"],
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
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.1] font-display text-white"
          >
            Impacto Audiovisual.
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.1] mb-4 font-display text-white/90"
          >
            Padrão Broadcast.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg max-w-xl mb-1 font-light text-white/80"
          >
            Soluções audiovisuais premium para marcas exigentes.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg max-w-xl mb-8 font-light text-white/80"
          >
            Da captação cinematográfica à transmissão ao vivo imersiva.
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="#contato" className="bg-gradient-to-r from-primary to-[#ff9900] text-black font-bold px-8 py-4 cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_rgba(255,200,0,0.6)] border-none rounded-full text-sm transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,200,0,0.3)]">
              Solicitar orçamento
            </a>
            <a href="#servicos" className="bg-white/5 border border-white/20 text-white font-medium px-8 py-4 cursor-pointer hover:bg-white/15 hover:border-white/40 rounded-full text-sm transition-all duration-300 backdrop-blur-md">
              Nossos serviços
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
              20 Anos de Excelência. Sem Concessões.
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
              A RTV Filmes é uma agência e produtora especializada em transformar visões estratégicas em projetos de altíssimo impacto visual.
            </p>
            <p>
              Estrutura cinematográfica, equipe de elite e tecnologia state-of-the-art. Atendemos marcas, instituições e campanhas que não aceitam o mediano.
            </p>
            <p className="font-medium text-foreground/90">
              Nosso compromisso: Execução impecável. Resultados absolutos.
            </p>
          </div>

        </Reveal>
      </Section>

      {/* Serviços */}
      <Section id="servicos" className="border-t border-border">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Eyebrow>Expertise</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold">Precisão em cada frame.</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">Um portfólio completo de serviços audiovisuais, executados sem margem para o comum.</p>
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
      <Section id="estrutura" className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
        <div className="relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Eyebrow>Infraestrutura</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              O poder do broadcast à sua disposição.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Estúdios imersivos, unidades móveis e captação 4K. Estrutura absoluta para produções que exigem excelência técnica inquestionável.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {structure.map((s, i) => (
                <Reveal key={s.label} delay={i * 50}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card/40 border border-border/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                    <s.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground/90">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6 pt-10 lg:pt-0">
            <Parallax speed={0.5} className="rounded-2xl border border-border/50 overflow-hidden shadow-elegant">
              <img src={podcastStudio} alt="Estúdio de podcast" className="w-full h-64 md:h-96 object-cover scale-110" />
            </Parallax>
            <Parallax speed={-0.3} className="rounded-2xl border border-border/50 overflow-hidden shadow-elegant mt-12">
              <img src={mobileUnit} alt="Unidade móvel de transmissão" className="w-full h-64 md:h-96 object-cover scale-110" />
            </Parallax>
            <Parallax speed={0.4} className="rounded-2xl border border-border/50 overflow-hidden shadow-elegant -mt-12">
              <img src={droneEvent} alt="Drone em evento" className="w-full h-64 md:h-96 object-cover scale-110" />
            </Parallax>
            <Parallax speed={-0.4} className="rounded-2xl border border-border/50 overflow-hidden shadow-elegant">
              <img src={liveEvent} alt="Cobertura ao vivo" className="w-full h-64 md:h-96 object-cover scale-110" />
            </Parallax>
          </div>
        </div>
      </Section>

      {/* Por que escolher */}
      <section className="pt-24 border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <Eyebrow>Por que a RTV?</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                O que faz a diferença
                <span className="block text-gradient">em cada projeto.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {reasons.map((r) => (
                <div key={r} className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Single Row Gallery - Full Width */}
        <div className="w-full mt-10 py-6 border-t border-border/30">
          {galleryImages.length > 0 && <MarqueeRow images={galleryImages.slice(0, 18)} direction="left" speed={70} />}
        </div>
      </section>

      {/* Segmentos */}
      <Section className="border-t border-border bg-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-16 relative z-10">
          <Eyebrow>Segmentos que Atendemos</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold">Do público ao privado.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Soluções audiovisuais sob medida para diferentes mercados, entregando a mesma excelência em todos eles.
          </p>
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
      <Section className="border-t border-border">
        <div className="mb-12">
          <Eyebrow>Nossos Programas</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold">Conteúdo Original.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {programs.map((p) => (
            <div key={p.title} className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background to-background" />
              <img src={p.img || heroStudio} alt="" aria-hidden loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <span className="inline-flex self-start text-[10px] uppercase tracking-widest bg-primary/20 text-primary px-2 py-1 rounded-full">{p.tag}</span>
                <div>
                  <h3 className="text-2xl font-display font-bold leading-tight">{p.title}</h3>
                  <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition">
                    Assistir <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cases */}
      <Section id="cases" className="border-t border-border overflow-hidden pb-16">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 text-center w-full">
          <div className="w-full">
            <Eyebrow>Cases</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold">Produções em Destaque.</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Projetos que entregam resultados reais e elevam o patamar visual da sua marca.
            </p>
          </div>
        </div>
        
        {/* Marquee Carousel */}
        <div className="w-full relative mt-10 overflow-hidden group/marquee" style={{ cursor: 'grab' }}>
          <style>{`
            @keyframes slide-cases {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-cases {
              animation: slide-cases 40s linear infinite;
            }
            .group\\/marquee:hover .animate-slide-cases,
            .group\\/marquee:active .animate-slide-cases {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex gap-6 px-4 w-max animate-slide-cases">
            {[...cases, ...cases].map((c, i) => (
              <div 
                key={`${c.title}-${i}`} 
                className="w-[320px] md:w-[500px] aspect-[4/3] flex-shrink-0 relative group rounded-2xl overflow-hidden border border-border bg-card shadow-elegant"
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-flex self-start text-[10px] md:text-xs uppercase tracking-widest bg-primary/20 text-primary px-3 py-1 rounded-full mb-3 backdrop-blur-md border border-primary/20">
                    {c.tag}
                  </span>
                  <h3 className="text-white text-xl md:text-3xl font-display font-bold leading-tight mb-2 drop-shadow-md">
                    {c.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-30" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-30" />
        </div>
      </Section>

      {/* Galeria Completa removida */}
      {/* Processo */}
      <Section id="processo" className="border-t border-border">
        <div className="mb-20 text-center">
          <Eyebrow>Método</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold">Cinco etapas. Zero fricção.</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-border overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: 0 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               viewport={{ once: true, margin: "-10%" }}
               className="w-full h-full bg-primary shadow-glow" 
             />
          </div>
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 150} className="relative text-center group">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative z-10 mx-auto w-14 h-14 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center font-display font-bold text-xl text-muted-foreground group-hover:text-primary mb-6 group-hover:shadow-glow duration-300"
              >
                {p.n}
              </motion.div>
              <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Depoimentos */}
      <section className="pt-24 border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <Eyebrow>Reconhecimento</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold">Quem assina embaixo.</h2>
        </div>
        
        <div className="w-full relative overflow-hidden group/testimonials" style={{ cursor: 'grab' }}>
          <style>{`
            @keyframes slide-testimonials {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-testimonials {
              animation: slide-testimonials 50s linear infinite;
            }
            .group\\/testimonials:hover .animate-slide-testimonials,
            .group\\/testimonials:active .animate-slide-testimonials {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex gap-6 px-4 w-max animate-slide-testimonials pb-24">
            {[...testimonials, ...testimonials].map((t, i) => (
              <blockquote 
                key={`${t.name}-${i}`} 
                className="w-[300px] md:w-[350px] flex-shrink-0 p-6 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 hover:shadow-premium transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="text-4xl text-primary font-display leading-none mb-2 opacity-50">“</div>
                  <p className="text-sm leading-relaxed mb-6 text-foreground/80">{t.quote}</p>
                </div>
                <footer className="flex items-center gap-3 pt-5 border-t border-border/50 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-display font-bold text-primary-foreground text-xs shadow-glow">
                    {t.initials}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
          
          {/* Gradient Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </section>

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
          <Eyebrow>Próximo Passo</Eyebrow>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Eleve o nível da sua <span className="text-gradient">produção.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Nossa equipe de especialistas está pronta para transformar sua visão estratégica em uma obra audiovisual de alto impacto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511950257273" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-5 rounded-full hover:bg-primary/90 transition-colors shadow-glow"
            >
              Iniciar Projeto <ArrowRight className="w-5 h-5" />
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
                Agência e produtora audiovisual. Vídeos, transmissões ao vivo, estúdios e comunicação estratégica para marcas que exigem o melhor.
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
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.youtube.com/user/RTVFilmes" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-glow transition-all"><Youtube className="w-4 h-4" /></motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://pt-br.facebook.com/rtvfilmesprodutora/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-glow transition-all"><Facebook className="w-4 h-4" /></motion.a>
              </div>
              <a href="#" className="block mt-6 text-xs text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
            </div>
          </div>
          <div className="border-t border-border/50">
            <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
              <div>© {new Date().getFullYear()} RTV Filmes. Todos os direitos reservados.</div>
              <div>Impacto Audiovisual. Padrão Broadcast.</div>
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
