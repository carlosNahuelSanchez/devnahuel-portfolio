import React, { useEffect, useRef, useState } from 'react';
import { createRenderer } from '../../fft-ocean/renderer';

export default function OceanHero() {
  const canvasRef = useRef(null);
  const [hasWebGpu, setHasWebGpu] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (typeof navigator !== 'undefined' && !navigator.gpu) {
      setHasWebGpu(false);
      return;
    }

    let renderer;
    try {
      renderer = createRenderer({ canvas });
      renderer.ready.catch((err) => {
        console.warn('WebGPU Ocean initialization note:', err?.message || err);
        setHasWebGpu(false);
      });
    } catch (err) {
      console.warn('WebGPU not supported on this device/browser:', err);
      setHasWebGpu(false);
    }

    return () => {
      if (renderer) {
        try {
          renderer.dispose();
        } catch {
          // Teardown cleanup
        }
      }
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="absolute inset-x-0 bottom-0 top-28 sm:top-36 lg:top-44 pointer-events-none z-0 overflow-hidden"
    >
      {/* WebGPU Ocean Canvas positioned in the lower portion of the hero */}
      {hasWebGpu && (
        <canvas
          ref={canvasRef}
          className="block w-full h-full touch-none pointer-events-none opacity-85"
        />
      )}

      {/* Atmospheric gradient overlay: smooth top fade and subtle bottom dissolve */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, #050507 0%, rgba(5, 5, 7, 0.15) 30%, rgba(5, 5, 7, 0.4) 75%, #050507 100%),
            radial-gradient(ellipse 90% 70% at 50% 60%, transparent 0%, rgba(5, 5, 7, 0.65) 100%)
          `
        }}
      />
    </div>
  );
}
