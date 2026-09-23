import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ lang, setLang, content }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050507]/85 backdrop-blur-md border-b border-hairline transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Mark with 'N' (Nahuel) and Name */}
          <div className="flex items-center gap-3">
            <div 
              className="w-7 h-7 sm:w-8 sm:h-8 bg-card border border-white/20 rounded-xs flex items-center justify-center font-display font-bold text-white text-xs select-none shadow-sm"
              aria-label="Logo N"
            >
              N
            </div>
            <span className="font-display font-bold text-sm tracking-wider uppercase text-white">
              {content.meta.name}
            </span>
            <span className="hidden sm:inline font-mono text-xs text-zinc-400 border-l border-hairline pl-3">
              {content.meta.geo}
            </span>
          </div>

          {/* Desktop Right Header: Contact CTA and Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Header Direct CTA to Contact */}
            <a
              href="#contacto"
              className="font-mono text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 bg-white text-black hover:bg-zinc-200 border border-white transition-colors rounded-xs inline-flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-black" />
              <span>{content.meta.ctaContact}</span>
            </a>

            {/* Bilingual Switcher: ES (default) / EN */}
            <div className="inline-flex items-center bg-card border border-bright p-0.5 rounded-xs" role="group" aria-label="Selector de idioma">
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`font-mono text-xs font-bold px-3 py-1.5 rounded-xs transition-colors relative min-w-[34px] min-h-[30px] flex items-center justify-center ${
                  lang === 'es' ? 'text-black' : 'text-zinc-400 hover:text-white'
                }`}
                aria-pressed={lang === 'es'}
              >
                {lang === 'es' && (
                  <motion.div
                    layoutId="langPillDesktop"
                    className="absolute inset-0 bg-white rounded-xs z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">ES</span>
              </button>

              <button
                type="button"
                onClick={() => setLang('en')}
                className={`font-mono text-xs font-bold px-3 py-1.5 rounded-xs transition-colors relative min-w-[34px] min-h-[30px] flex items-center justify-center ${
                  lang === 'en' ? 'text-black' : 'text-zinc-400 hover:text-white'
                }`}
                aria-pressed={lang === 'en'}
              >
                {lang === 'en' && (
                  <motion.div
                    layoutId="langPillDesktop"
                    className="absolute inset-0 bg-white rounded-xs z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">EN</span>
              </button>
            </div>

          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-card border border-hairline hover:border-bright text-white rounded-xs transition-colors flex items-center justify-center focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white stroke-[1.8]" />
              ) : (
                <Menu className="w-5 h-5 text-white stroke-[1.8]" />
              )}
            </button>
          </div>

        </div>

        {/* Desktop Step Navigation Tabs */}
        <nav className="hidden md:flex border-t border-hairline mt-3.5 pt-0 overflow-x-auto whitespace-nowrap" aria-label="Navegación principal">
          {content.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex-1 min-w-[130px] py-2.5 px-4 font-mono text-xs tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.02] border-r border-hairline last:border-r-0 text-center transition-colors relative group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-hairline bg-[#050507]/98 backdrop-blur-xl px-6 py-5 flex flex-col gap-4 overflow-hidden shadow-2xl"
          >
            {/* Navigation links */}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest px-2 pb-1">
                Navegación
              </span>
              {content.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs py-2.5 px-3 text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-xs flex items-center justify-between border-b border-white/[0.04] transition-colors"
                >
                  <span className="tracking-wide uppercase">{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              ))}
            </div>

            {/* Actions: Contact and Language */}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs font-semibold tracking-wider uppercase w-full py-2.5 bg-white text-black hover:bg-zinc-200 border border-white transition-colors rounded-xs flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>{content.meta.ctaContact}</span>
              </a>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                <span className="font-mono text-xs text-zinc-400">Idioma / Language:</span>
                <div className="inline-flex items-center bg-card border border-bright p-0.5 rounded-xs" role="group" aria-label="Selector de idioma">
                  <button
                    type="button"
                    onClick={() => {
                      setLang('es');
                      setMobileMenuOpen(false);
                    }}
                    className={`font-mono text-xs font-bold px-3 py-1 rounded-xs transition-colors relative min-w-[34px] flex items-center justify-center ${
                      lang === 'es' ? 'text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {lang === 'es' && (
                      <motion.div
                        layoutId="langPillMobile"
                        className="absolute inset-0 bg-white rounded-xs z-0"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">ES</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`font-mono text-xs font-bold px-3 py-1 rounded-xs transition-colors relative min-w-[34px] flex items-center justify-center ${
                      lang === 'en' ? 'text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {lang === 'en' && (
                      <motion.div
                        layoutId="langPillMobile"
                        className="absolute inset-0 bg-white rounded-xs z-0"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">EN</span>
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
