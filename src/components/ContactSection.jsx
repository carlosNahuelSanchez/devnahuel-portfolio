import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, MessageSquare, Download, Mail } from 'lucide-react';

export default function ContactSection({ contact }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-surface border-t border-hairline" aria-labelledby="contact-title">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="bg-void border border-bright p-5 sm:p-8 md:p-12 lg:p-14 rounded-xs grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative overflow-hidden"
        >
          {/* Precision Corner Crosshairs */}
          <span className="absolute top-2.5 left-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none" aria-hidden="true">+</span>
          <span className="absolute top-2.5 right-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none" aria-hidden="true">+</span>
          <span className="absolute bottom-2.5 left-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none" aria-hidden="true">+</span>
          <span className="absolute bottom-2.5 right-2.5 font-mono text-xs text-zinc-400 select-none pointer-events-none" aria-hidden="true">+</span>

          {/* Left Column: Call to Action */}
          <div className="min-w-0">
            <h2
              id="contact-title"
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-5 leading-[1.15] tracking-tight break-normal uppercase"
            >
              {contact.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[55ch]">
              {contact.lead}
            </p>
            <div className="mt-5 sm:mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-emerald animate-pulse shrink-0" aria-hidden="true" />
              <span className="font-mono text-xs text-zinc-400">
                {contact.loc}
              </span>
            </div>
          </div>

          {/* Right Column: Direct Contact Actions */}
          <div className="flex flex-col gap-3.5 sm:gap-4 min-w-0 w-full">
            
            {/* Direct Email Card with Copy button */}
            <div className="p-4 sm:p-5 bg-card/90 border border-hairline hover:border-white/40 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-colors min-w-0">
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="p-2.5 bg-panel border border-hairline rounded-xs shrink-0">
                  <Mail className="w-4 h-4 text-white stroke-[1.5]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                    {contact.emailLabel}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-white block truncate select-all">
                    {contact.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                aria-label={contact.copyEmail}
                className={`font-mono text-xs px-4 py-2 sm:py-1.5 rounded-xs border transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0 w-full sm:w-auto ${
                  copied
                    ? 'border-status-emerald text-status-emerald bg-emerald-500/10'
                    : 'border-hairline text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                <span>{copied ? contact.copiedEmail : contact.copyEmail}</span>
              </button>
            </div>

            {/* WhatsApp Direct Link */}
            <a
              href="https://wa.me/543704093764"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 bg-card/90 border border-hairline hover:border-white/40 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-colors group min-w-0"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="p-2.5 bg-panel border border-hairline rounded-xs shrink-0">
                  <MessageSquare className="w-4 h-4 text-white stroke-[1.5]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                    {contact.phoneLabel}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-white block">
                    {contact.phone}
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs font-semibold text-zinc-300 group-hover:text-white transition-all inline-flex items-center justify-end sm:justify-start gap-1 shrink-0 group-hover:translate-x-0.5">
                {contact.phoneAction}
              </span>
            </a>

            {/* Download Official CV Card */}
            <a
              href="/official-cv.pdf"
              download="Carlos_Nahuel_Sanchez_CV.pdf"
              className="p-4 sm:p-5 bg-card/90 border border-hairline hover:border-white/40 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-colors group min-w-0"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="p-2.5 bg-panel border border-hairline rounded-xs shrink-0">
                  <Download className="w-4 h-4 text-white stroke-[1.5]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                    {contact.cvLabel}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-white block truncate">
                    {contact.cvFileName}
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs font-semibold text-zinc-300 group-hover:text-white transition-all inline-flex items-center justify-end sm:justify-start gap-1 shrink-0 group-hover:translate-x-0.5">
                {contact.cvAction}
              </span>
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
