import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandLogo({ className = '', variant = 'dark', size = 'md' }: BrandLogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1 ${className}`}>
      {/* Flame Icon based on Wakisha original branding */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-2 shadow-md border border-orange-500/20 group-hover:border-orange-500/50 transition-colors`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main outer swoosh flame - Fire Crimson Red */}
          <path
            d="M50 8C48 24 38 34 26 44C12 56 8 68 14 80C20 92 34 96 48 94C38 86 34 76 38 66C42 56 54 48 58 36C62 26 58 16 50 8Z"
            fill="url(#outerFlameGradient)"
          />
          {/* Inner energetic flame - Vibrant Orange to Gold */}
          <path
            d="M54 28C56 38 68 46 72 58C76 70 70 82 58 88C68 84 74 74 72 64C70 54 62 46 60 38C58 34 56 30 54 28Z"
            fill="url(#innerFlameGradient)"
          />
          {/* Core spark */}
          <circle cx="50" cy="72" r="6" fill="#FBBF24" className="animate-pulse" />
          <defs>
            <linearGradient id="outerFlameGradient" x1="10" y1="10" x2="60" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DC2626" />
              <stop offset="0.6" stopColor="#EA580C" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="innerFlameGradient" x1="50" y1="30" x2="75" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="0.7" stopColor="#FBBF24" />
              <stop offset="1" stopColor="#FEF08A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-black tracking-wider uppercase leading-tight ${titleSizes[size]} ${isLight ? 'text-white' : 'text-slate-900 group-hover:text-orange-600 transition-colors'}`}>
          WAKISHA
        </span>
        <span className={`font-semibold tracking-widest uppercase ${subSizes[size]} ${isLight ? 'text-orange-400' : 'text-orange-600'}`}>
          Electrical Engineering & Sales
        </span>
      </div>
    </Link>
  );
}
