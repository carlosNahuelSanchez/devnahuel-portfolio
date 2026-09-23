import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ footer }) {
  return (
    <footer className="border-t border-hairline py-12 bg-void" role="contentinfo">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-6">
          
          {/* Authentic SVG Barcode Graphic */}
          <div className="flex flex-col gap-1.5">
            <svg className="w-[140px] h-[28px] fill-zinc-600" viewBox="0 0 140 28" xmlns="http://www.w3.org/2000/svg" aria-label="Barcode">
              <rect x="0" y="0" width="4" height="28" />
              <rect x="6" y="0" width="2" height="28" />
              <rect x="11" y="0" width="5" height="28" />
              <rect x="18" y="0" width="2" height="28" />
              <rect x="23" y="0" width="4" height="28" />
              <rect x="30" y="0" width="6" height="28" />
              <rect x="39" y="0" width="2" height="28" />
              <rect x="44" y="0" width="4" height="28" />
              <rect x="51" y="0" width="2" height="28" />
              <rect x="56" y="0" width="5" height="28" />
              <rect x="64" y="0" width="3" height="28" />
              <rect x="70" y="0" width="6" height="28" />
              <rect x="79" y="0" width="2" height="28" />
              <rect x="84" y="0" width="4" height="28" />
              <rect x="91" y="0" width="5" height="28" />
              <rect x="99" y="0" width="2" height="28" />
              <rect x="104" y="0" width="4" height="28" />
              <rect x="111" y="0" width="6" height="28" />
              <rect x="120" y="0" width="2" height="28" />
              <rect x="125" y="0" width="5" height="28" />
              <rect x="133" y="0" width="3" height="28" />
              <rect x="138" y="0" width="2" height="28" />
            </svg>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              SERIES_2026 // AR
            </span>
          </div>

          <div>
            <p className="font-mono text-xs text-zinc-400">
              {footer.rights}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/carlosNahuelSanchez"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nahuel-sanchez-aa7068336"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
