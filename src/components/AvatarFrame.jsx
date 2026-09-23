import React, { useState } from 'react';
import { User } from 'lucide-react';

export default function AvatarFrame({ className = '' }) {
  const [imgError, setImgError] = useState(false);

  // Looks for photo.jpg in public/ (served at /photo.jpg) or relative root
  const photoPath = '/me-photo.jpeg';

  return (
    <div
      className={`relative w-60 h-60 xs:w-64 xs:h-64 sm:w-48 sm:h-48 md:w-52 md:h-52 shrink-0 bg-void border border-bright p-2.5 flex items-center justify-center overflow-hidden group shadow-2xl rounded-xs ${className}`}
      aria-label="Fotografía de perfil"
    >
      {/* Precision Corner Crosshairs */}
      <span className="absolute top-2 left-2 font-mono text-xs text-zinc-400 leading-none select-none z-10 pointer-events-none">+</span>
      <span className="absolute top-2 right-2 font-mono text-xs text-zinc-400 leading-none select-none z-10 pointer-events-none">+</span>
      <span className="absolute bottom-2 left-2 font-mono text-xs text-zinc-400 leading-none select-none z-10 pointer-events-none">+</span>
      <span className="absolute bottom-2 right-2 font-mono text-xs text-zinc-400 leading-none select-none z-10 pointer-events-none">+</span>

      {!imgError ? (
        <img
          src={photoPath}
          alt="Carlos Nahuel Sanchez"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover block grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-2 text-zinc-500 p-2">
          <User className="w-14 h-14 stroke-[1] text-zinc-600" />
          <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
            photo.jpg
          </span>
        </div>
      )}
    </div>
  );
}
