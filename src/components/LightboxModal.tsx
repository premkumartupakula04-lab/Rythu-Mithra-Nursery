import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  items: Array<{ image: string; title?: string; alt?: string; caption?: string }>;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  items,
  onNavigate,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  // Reset zoom when switching images
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0); // loop
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1); // loop
    }
  };

  return (
    <div
      id="lightbox-modal"
      className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Header Controls */}
      <div className="w-full max-w-6xl flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-semibold text-emerald-400 bg-stone-900/80 px-3 py-1 rounded-full border border-stone-800">
            {currentIndex + 1} / {items.length}
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-stone-200 truncate max-w-[200px] sm:max-w-md">
            {currentItem.title || currentItem.alt || 'Rythu Mithra Nursery Photo'}
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-700 transition-colors"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            aria-label="Toggle zoom"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-red-600/90 text-white hover:bg-red-700 transition-colors"
            title="Close Lightbox (Esc)"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-2 overflow-hidden">
        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white border border-stone-700 backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white border border-stone-700 backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image element with toggle zoom */}
        <div
          className={`transition-all duration-300 max-h-[75vh] flex items-center justify-center ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentItem.image}
            alt={currentItem.alt || 'Rythu Mithra Nursery'}
            className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-stone-800"
          />
        </div>
      </div>

      {/* Bottom Caption Bar */}
      <div className="w-full max-w-3xl text-center py-2 z-20">
        {currentItem.caption && (
          <p className="text-xs sm:text-sm text-stone-300 bg-stone-900/80 px-4 py-2 rounded-xl border border-stone-800 backdrop-blur-sm inline-block">
            {currentItem.caption}
          </p>
        )}
      </div>
    </div>
  );
};
