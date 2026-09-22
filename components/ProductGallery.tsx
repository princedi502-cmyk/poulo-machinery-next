'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Ensure selectedIndex remains within bounds if images array changes
  const safeIndex = selectedIndex >= images.length ? 0 : selectedIndex;
  const currentImage = images[safeIndex] || images[0];

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Main Image Display Card with Prev / Next Navigation overlay */}
      <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm group">
        <Image
          src={currentImage}
          alt={`${alt} - view ${safeIndex + 1}`}
          fill
          className={`object-contain transition-all duration-300 ${
            currentImage.includes('water-jet-loom-poulo-machinery-surat')
              ? 'p-1 scale-135 sm:scale-140'
              : 'p-3 sm:p-4'
          }`}
          priority
        />

        {/* Navigation Arrows (Only show if there's more than 1 image) */}
        {images.length > 1 && (
          <>
            {/* Previous Image Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full p-2 backdrop-blur-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer group-hover:opacity-100 sm:opacity-90 hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Image Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full p-2 backdrop-blur-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer group-hover:opacity-100 sm:opacity-90 hover:scale-105"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Counter Badge */}
            <div className="absolute bottom-3 right-3 bg-slate-900/70 text-white text-[11px] font-mono font-medium px-2.5 py-1 rounded-full backdrop-blur-sm pointer-events-none">
              {safeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((img, idx) => {
            const isActive = idx === safeIndex;
            const isTargetThumb = img.includes('water-jet-loom-poulo-machinery-surat');
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`Select preview image ${idx + 1}`}
                className={`relative h-20 rounded border overflow-hidden bg-white transition-all cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-blue-600 border-transparent shadow-sm opacity-100 scale-[1.02]'
                    : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                <Image
                  src={img}
                  alt={`${alt} thumbnail ${idx + 1}`}
                  fill
                  className={`object-contain ${isTargetThumb ? 'p-0 scale-125' : 'p-1'}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

