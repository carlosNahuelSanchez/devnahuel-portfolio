import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Layout, Terminal, GraduationCap } from 'lucide-react';
import { StructureFlowCollection } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';

export default function SkillsSection({ skills, education }) {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Cpu className="w-5 h-5 text-white stroke-[1.5]" />;
      case 1: return <Server className="w-5 h-5 text-white stroke-[1.5]" />;
      case 2: return <Layout className="w-5 h-5 text-white stroke-[1.5]" />;
      case 3: return <Terminal className="w-5 h-5 text-white stroke-[1.5]" />;
      default: return <Cpu className="w-5 h-5 text-white stroke-[1.5]" />;
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.06,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="habilidades" className="py-20 border-b border-hairline relative overflow-hidden" aria-labelledby="skills-title">
      {/* 3D StructureFlow Flux Vortex from ThreeUI in the background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      >
        <div className="shader-frame w-full h-full">
          <StructureFlowCollection
            variant="flux-vortex"
            speed={1.00}
            size={1.60}
            length={1.00}
            density={1.00}
            opacity={1.00}
            hue={0}
            saturation={1.00}
            brightness={0.50}
          />
        </div>
        {/* Soft edge blend for seamless integration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #050507 0%, transparent 12%, transparent 88%, #050507 100%)'
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-wrap justify-between items-end border-b border-hairline pb-5 mb-10 gap-4">
          <div>
            <h2 id="skills-title" className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              {skills.title}
            </h2>
            <p className="font-mono text-xs text-zinc-400 mt-1">
              {skills.meta}
            </p>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            Modular & Full Stack
          </span>
        </div>

        {/* 4 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.domains.map((dom, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={skillCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="bg-[#0b0b12]/80 backdrop-blur-md border border-hairline/80 p-6 rounded-xs transition-colors duration-200 hover:bg-[#11111c]/90 hover:border-white/30 flex flex-col transform-gpu"
            >
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/[0.08]">
                {getIcon(idx)}
                <h3 className="font-heading text-base font-bold text-white">
                  {dom.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {dom.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-xs px-2.5 py-1 bg-panel border border-hairline text-zinc-300 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 bg-[#0b0b12]/80 backdrop-blur-md border border-hairline/80 p-8 rounded-xs flex flex-wrap justify-between items-center gap-6 transform-gpu"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-card border border-hairline rounded-xs">
              <GraduationCap className="w-6 h-6 text-white stroke-[1.5]" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-1">
                {education.degree}
              </h3>
              <p className="font-mono text-xs text-chrome">
                {education.school}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-status-emerald inline-block" />
              {education.status}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
