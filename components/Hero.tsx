import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const yText = useTransform(scrollY, [0, 300], [0, 150]);
  const opacityImg = useTransform(scrollY, [0, 400], [0.6, 0]);

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      {/* Background Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity: opacityImg }}
      >
        <div className="absolute inset-0 bg-slate-950 z-[-1]" />
        <img 
            src="/ahab.png" 
            alt="Captain Ahab" 
            className="w-full h-full object-cover object-top opacity-70 scale-105"
        />
        {/* Stormy Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-cyan-950/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]" />
      </motion.div>
      
      {/* Floating Green Candles (Foreground) */}
      <div className="absolute inset-0 z-10 overflow-hidden opacity-40 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-green-500 w-1 md:w-2 rounded-sm shadow-[0_0_20px_#22c55e]"
            style={{
              left: `${Math.random() * 100}%`,
              top: '110%',
              height: `${Math.random() * 80 + 40}px`,
            }}
            animate={{
              y: [0, -1200],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText }}
        className="relative z-20 w-full max-w-7xl px-4 flex flex-col items-center justify-center text-center mx-auto"
      >
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 2, -2, 0] }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-8 bg-slate-900/60 border border-cyan-500/30 px-6 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.1)]"
        >
            <span className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold drop-shadow-md">
               Obsession • Conviction • Vengeance
            </span>
        </motion.div>

        {/* Logo - Fixed Layout */}
        <div className="relative mb-8 flex justify-center items-center w-full py-4">
           <h1 className="relative z-10 font-meme text-[8rem] sm:text-[10rem] md:text-[14rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-cyan-500 via-cyan-100 to-white drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] pb-4">
             $AHAB
           </h1>
           {/* Static Shadow Layer for Depth */}
           <h1 className="absolute z-0 font-meme text-[8rem] sm:text-[10rem] md:text-[14rem] leading-none tracking-tighter text-black/80 blur-sm translate-y-4 pb-4 select-none">
             $AHAB
           </h1>
        </div>
        
        <p className="max-w-3xl mt-2 text-xl md:text-2xl font-display text-slate-300 drop-shadow-lg leading-relaxed px-4 text-shadow-sm">
          Where the White Whale is calm mastery, <br className="hidden md:block"/>
          <span className="text-white font-bold tracking-wide">Ahab is violent intent.</span>
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-6 w-full justify-center px-6">
            <button 
                onClick={() => document.getElementById('game')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-green-600 hover:bg-green-500 text-black font-black font-meme text-2xl px-12 py-4 rounded-xl border-b-[6px] border-green-900 active:border-b-0 active:translate-y-1 transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)] overflow-hidden"
            >
                <span className="relative z-10 flex items-center gap-2">
                   START THE HUNT
                </span>
            </button>
            <button 
                onClick={() => window.open('https://pump.fun', '_blank')}
                className="bg-slate-900/80 hover:bg-slate-800 text-white font-bold font-display text-xl px-12 py-4 rounded-xl border-b-[6px] border-black active:border-b-0 active:translate-y-1 transition-all backdrop-blur-sm"
            >
                BUY BAGS
            </button>
        </div>
      </motion.div>

      {/* Foreground Waves */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[-10px] left-0 w-full z-30 pointer-events-none opacity-100"
      >
         <svg className="w-full h-24 md:h-48" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#020617" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
      </motion.div>
    </div>
  );
};
