import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceSection({ experience }) {
  return (
    <section id="experiencia" className="py-20 border-b border-hairline" aria-labelledby="exp-title">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-wrap justify-between items-end border-b border-hairline pb-5 mb-10 gap-4">
          <div>
            <h2 id="exp-title" className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              {experience.title}
            </h2>
            <p className="font-mono text-xs text-zinc-400 mt-1">
              {experience.meta}
            </p>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            Formosa, Argentina
          </span>
        </div>

        {/* Experience Table with Hairline Grid */}
        <div className="border border-hairline rounded-xs overflow-hidden bg-surface p-3">
          {experience.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[280px_1fr] border-b border-hairline last:border-b-0 hover:bg-white/[0.02] transition-colors"
            >
              {/* Meta column */}
              <div className="p-5 sm:p-8 border-b lg:border-b-0 lg:border-r border-hairline bg-panel flex flex-col justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-white block">
                    {item.period}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 mt-1 block">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Content column */}
              <div className="p-5 sm:p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-1 leading-tight">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-chrome mb-4 inline-block">
                  {item.org}
                </span>

                <ul className="flex flex-col gap-2.5 mb-5">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-sm text-zinc-300 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-zinc-600">
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-5 pt-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-white hover:text-chrome underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{item.linkLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {item.secondaryLink && (
                    <a
                      href={item.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-zinc-400 hover:text-white underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{item.secondaryLinkLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
