import React from 'react';
import { motion } from 'framer-motion';
import { MANIFESTO_PARAGRAPHS } from '../constants';
import { SectionId } from '../types';
import { Skull, Anchor } from 'lucide-react';

export const Lore: React.FC = () => {
  return (
    <section id={SectionId.LORE} className="relative py-24 px-6 md:px-20 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Visual Side - White Whale Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group perspective-1000"
        >
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
           
           {/* Image Container */}
           <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-900">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
               <img 
                 src="/whale.png" 
                 alt="The White Whale vs The Boat" 
                 className="w-full h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
               />
               
               {/* Hunter's Profile Overlay */}
               <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-xl">
                  <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <Skull className="text-red-500 w-5 h-5" />
                    PSYCHOLOGICAL PROFILE
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                        <span className="text-slate-400 font-mono text-xs uppercase">Obsession Level</span>
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-4 bg-red-500 skew-x-12"/>)}
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                        <span className="text-slate-400 font-mono text-xs uppercase">Reasoning</span>
                        <span className="text-red-400 font-bold text-sm">COMPROMISED</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400 font-mono text-xs uppercase">Target</span>
                        <span className="text-cyan-400 font-bold text-sm tracking-wider">MOBY DICK ($1B MC)</span>
                    </div>
                  </div>
               </div>
           </div>
        </motion.div>

        {/* Text Side */}
        <div className="space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
             <h2 className="text-5xl md:text-6xl font-meme text-white mb-2 drop-shadow-lg">
               THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">WHITE WHALE</span>
             </h2>
             <p className="font-display text-xl text-slate-400 italic">
               "We do not trade with logic. We trade with fire."
             </p>
          </motion.div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
            {MANIFESTO_PARAGRAPHS.map((para, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="border-l-2 border-slate-800 pl-6 hover:border-red-500 transition-colors duration-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-900/50 hover:to-transparent py-2 rounded-r-lg"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 px-6 py-4 rounded-lg cursor-pointer hover:border-cyan-500 transition-all group shadow-lg"
          >
             <Anchor className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
             <span className="font-mono text-sm text-slate-400 group-hover:text-cyan-200">
               CA: 0xWHALE...DEAD...BEEF...1337
             </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
