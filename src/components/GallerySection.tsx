import React, { useState } from 'react';
import { Images, Maximize2, Tag } from 'lucide-react';
import { FARMERS_LIST, GALLERY_ITEMS } from '../data/nurseryData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenLightboxIndex: (index: number, items: GalleryItem[]) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenLightboxIndex,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'NURSERY',
    'CHILLI VARIETIES',
    'FIELDS',
    'FARMERS',
    'SEEDLINGS',
  ];

  const filteredItems: GalleryItem[] =
    activeCategory === 'ALL'
      ? GALLERY_ITEMS
      : activeCategory === 'FARMERS'
        ? FARMERS_LIST.map((farmer, idx) => ({
            id: `farmer-gallery-${farmer.id}`,
            title: `Farmer Partner ${idx + 1}`,
            category: 'FARMERS',
            image: farmer.image,
            alt: farmer.alt,
            caption: `${farmer.cropStage} • ${farmer.locationTag}`,
          }))
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-stone-100/90 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Images className="w-3.5 h-3.5 text-emerald-700" />
            <span>PHOTOGRAPHIC ARCHIVE</span>
          </div>

          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Nursery & Field Gallery
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Real photography documenting our nursery structures, pro-trays, seedling varieties, and farmers across Andhra Pradesh & Telangana.
          </p>
        </div>

        {/* Category Filter Pills (Mandated Categories) */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20 scale-105'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid: Desktop 3 col, Tablet 2 col, Mobile 1-2 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightboxIndex(idx, filteredItems)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 cursor-pointer group flex flex-col transition-all duration-300"
            >
              {/* Image with zoom effect */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-100 flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors"></div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-900/85 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
                    <Tag className="w-2.5 h-2.5 text-emerald-400" />
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Maximize Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="mt-1 text-xs text-stone-600 line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>
                <div className="mt-3 pt-2 text-[11px] font-semibold text-emerald-700 flex items-center justify-between">
                  <span>Click to view full photo</span>
                  <span className="text-stone-400 font-normal">Rythu Mithra</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
