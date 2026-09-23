import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { StructureFlowCollection } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';

export default function ProjectsSection({ projects }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="proyectos" className="py-20 border-b border-hairline relative overflow-hidden" aria-labelledby="projects-title">
      {/* 3D StructureFlow Topology Field behind Featured Projects */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      >
        <div className="shader-frame w-full h-full">
          <StructureFlowCollection
            variant="topology-field"
            hue={0}
            saturation={1.00}
            brightness={1.65}
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
        <div className="border-b border-hairline pb-5 mb-10">
          <h2 id="projects-title" className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
            {projects.title}
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-1">
            {projects.meta}
          </p>
        </div>

        {/* 2x2 Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.list.map((proj, i) => (
            <motion.article
              key={proj.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="bg-[#08080d]/65 backdrop-blur-md border border-hairline/70 p-8 rounded-xs flex flex-col justify-between transition-colors duration-200 hover:bg-[#11111c]/85 hover:border-white/30 group relative overflow-hidden transform-gpu"
            >
              {/* Precision Corner Crosshairs */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-zinc-500 select-none pointer-events-none" aria-hidden="true">+</span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-zinc-500 select-none pointer-events-none" aria-hidden="true">+</span>
              <span className="absolute bottom-2 left-2 font-mono text-[10px] text-zinc-500 select-none pointer-events-none" aria-hidden="true">+</span>
              <span className="absolute bottom-2 right-2 font-mono text-[10px] text-zinc-500 select-none pointer-events-none" aria-hidden="true">+</span>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-chrome transition-colors">
                  {proj.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-hairline/60 flex items-center justify-between mt-auto">
                <a
                  href={proj.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-white hover:text-chrome inline-flex items-center gap-1.5 transition-transform group-hover:translate-x-1"
                >
                  <span>{proj.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
