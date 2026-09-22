'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    src: '/images/poulo-machinery-loom-1-surat.webp',
    alt: 'High-Speed Air Jet Loom supplied by Poulo Machinery',
    name: 'PL920 High-Speed Air Jet Loom System',
  },
  {
    src: '/images/poulo-machinery-loom-2-surat.webp',
    alt: 'Heavy Duty Profile Reed Air Jet Loom',
    name: 'Heavy Duty Profile Reed Air Jet Loom',
  },
  {
    src: '/images/poulo-machinery-loom-3-surat.webp',
    alt: 'Multi-Nozzle Precision Air Jet Loom',
    name: 'Multi-Nozzle Acceleration Air Jet Loom',
  },
  {
    src: '/images/poulo-machinery-loom-4-surat.webp',
    alt: 'Electronic Let-Off Air Jet Loom',
    name: 'Electronic Let-Off (ELO) Air Jet Loom',
  },
  {
    src: '/images/poulo-machinery-loom-5-surat.webp',
    alt: 'PL5810 High-Speed Water Jet Loom',
    name: 'PL5810 High-Speed Water Jet Loom',
  },
  {
    src: '/images/poulo-machinery-loom-6-surat.webp',
    alt: 'Hydrophobic Synthetic Filament Water Jet Loom',
    name: 'Hydrophobic Synthetic Filament Water Jet Loom',
  },
];

const AUTO_PLAY_INTERVAL = 3500;

export default function HeroImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] w-full group">
      {/* Soft Radial Backdrop Glow Behind Machine */}
      <div className="absolute inset-0 bg-blue-500/15 blur-3xl rounded-full pointer-events-none" />

      {/* Floating Machine Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
            i === index ? 'opacity-100 scale-100 z-10 pointer-events-auto' : 'opacity-0 scale-95 z-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-[82%] sm:h-[86%]">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-contain object-center drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
              priority={i === 0}
            />
          </div>

          {/* Machine Label Badge */}
          <div className="mt-2 px-3.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-xs text-slate-300 flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span><strong className="text-blue-400 font-semibold">Featured Machine:</strong> {slide.name}</span>
          </div>
        </div>
      ))}

      {/* Manual Navigation Chevrons */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous machine image"
        className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-slate-900/70 hover:bg-slate-900 text-white p-2 rounded-full border border-slate-700/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-xl"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next machine image"
        className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-slate-900/70 hover:bg-slate-900 text-white p-2 rounded-full border border-slate-700/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-xl"
      >
        <ChevronRight size={20} />
      </button>

      {/* Floating Dots Indicator */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 shadow-md">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === index ? 'w-5 bg-blue-400' : 'w-1.5 bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
