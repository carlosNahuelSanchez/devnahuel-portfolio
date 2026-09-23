import React from 'react';
import { motion } from 'framer-motion';
import StatsParticles from './StatsParticles';

export default function StatsSection({ highlight, stats }) {
  const data = highlight || stats;
  if (!data) return null;

  return (
    <section className="bg-surface border-b border-hairline py-16 sm:py-24 relative overflow-hidden" aria-labelledby="experience-highlight-heading">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-void border border-bright p-6 sm:p-10 lg:p-16 rounded-xs relative group overflow-hidden shadow-2xl"
        >
          {/* Reactive Particle System inside 3 Years Exp Card */}
          <StatsParticles />

          {/* Precision Corner Crosshairs */}
          <span className="absolute top-2.5 left-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none z-10" aria-hidden="true">+</span>
          <span className="absolute top-2.5 right-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none z-10" aria-hidden="true">+</span>
          <span className="absolute bottom-2.5 left-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none z-10" aria-hidden="true">+</span>
          <span className="absolute bottom-2.5 right-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none z-10" aria-hidden="true">+</span>

          {/* Ambient Glow in the card background */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 pointer-events-none rounded-full z-0 translate-x-1/4 -translate-y-1/4"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)'
            }}
            aria-hidden="true"
          />

          {/* Top Technical Metadata */}
          <div className="mb-6 sm:mb-12 relative z-10">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              {data.badge}
            </span>
          </div>

          {/* Massive Display Row */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 pb-8 sm:pb-10 border-b border-hairline/60 relative z-10">
            {/* The Big Number */}
            <div className="font-display font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] text-white tracking-tight leading-none select-none">
              {data.number}
            </div>

            {/* Giant Title */}
            <div className="flex flex-col gap-2 min-w-0">
              <h2
                id="experience-highlight-heading"
                className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide leading-tight break-words"
              >
                {data.title}
              </h2>
              <p className="font-heading text-base sm:text-xl lg:text-2xl text-chrome font-semibold leading-snug">
                {data.subtitle}
              </p>
            </div>
          </div>

          {/* Detailed Narrative Description */}
          <div className="pt-6 sm:pt-8 relative z-10">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-[80ch]">
              {data.desc}
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
