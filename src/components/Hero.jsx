import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import AvatarFrame from './AvatarFrame';
import OceanHero from './OceanHero';

export default function Hero({ content }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="perfil" className="relative py-16 lg:py-24 border-b border-hairline overflow-hidden" aria-labelledby="hero-title">
      {/* WebGPU Particles Ocean in Hero Background */}
      <OceanHero />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 max-w-4xl"
        >
          {/* Status / Category Badge */}
          <motion.div variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-3">
            <span className="font-mono text-xs text-zinc-400 tracking-wide uppercase">
              {content.meta.badge}
            </span>
          </motion.div>

          {/* Photo Frame placed directly beside his Name */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 text-center sm:text-left">
            <AvatarFrame className="mx-auto sm:mx-0" />

            <div className="flex flex-col gap-2">
              <h1
                id="hero-title"
                className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-white leading-tight"
              >
                {content.meta.name}
              </h1>
              <p className="font-heading text-lg sm:text-2xl font-semibold text-chrome leading-snug">
                {content.meta.role}
              </p>
            </div>
          </motion.div>

          {/* Narrative Lead */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-[70ch]"
          >
            {content.meta.lead}
          </motion.p>

          {/* Action CTAs: Explore, Download CV, Contact */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 pt-2">
            <a
              href="#proyectos"
              className="font-mono text-xs font-semibold tracking-wider uppercase px-6 py-3.5 bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors rounded-xs shadow-lg inline-flex items-center gap-2"
            >
              <span>{content.meta.ctaWork}</span>
            </a>

            <a
              href="/official-cv.pdf"
              download="Carlos_Nahuel_Sanchez_CV.pdf"
              className="font-mono text-xs font-semibold tracking-wider uppercase px-5 py-3.5 bg-card text-white border border-bright hover:border-white hover:bg-white/[0.06] transition-colors rounded-xs inline-flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-zinc-300" />
              <span>{content.meta.ctaCv}</span>
            </a>

            <a
              href="#contacto"
              className="font-mono text-xs font-medium tracking-wider uppercase px-5 py-3.5 bg-transparent text-zinc-300 border border-hairline hover:border-white hover:text-white hover:bg-white/[0.04] transition-colors rounded-xs inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              <span>{content.meta.ctaContact}</span>
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
