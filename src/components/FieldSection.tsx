import React from 'react';
import { Sprout, Eye, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data/nurseryData';

interface FieldSectionProps {
  onOpenImage: (img: string, title: string) => void;
}

export const FieldSection: React.FC<FieldSectionProps> = ({ onOpenImage }) => {
  // Select items depicting the transition from nursery to open field crops
  const fieldHighlights = GALLERY_ITEMS.filter(
    (item) => item.category === 'FIELDS' || item.id === 'gal-11' || item.id === 'gal-4'
  ).slice(0, 4);

  return (
    <section id="field-crops" className="py-20 bg-stone-100/90 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5 text-emerald-700" />
            <span>REAL AGRICULTURAL OUTCOMES</span>
          </div>

          <h2
            id="field-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            From Nursery to Field
          </h2>

          <p
            id="field-core-text"
            className="mt-4 text-base sm:text-lg text-stone-700 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            {BUSINESS_INFO.fieldSectionText}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-stone-500">
            Real field snapshots demonstrating robust plant canopies, green chillies, and mature red chilli fruit sets in Telugu agricultural lands.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fieldHighlights.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImage(item.image, item.title)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-stone-200 cursor-pointer group flex flex-col transition-all"
            >
              <div className="relative h-52 overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors"></div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="inline-block px-2 py-0.5 rounded bg-stone-900/80 text-[11px] font-semibold text-white">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-stone-600 line-clamp-2">
                    {item.caption || item.alt}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>View Field Detail</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Factual Information Strip */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs sm:text-sm text-stone-700">
              <strong className="text-stone-900">Transplant Survival:</strong> Sturdy stem girth and undisturbed root balls minimize transplant shock when seedlings are shifted to furrow or raised-bed plastic mulch fields.
            </p>
          </div>
          <div className="shrink-0 text-xs font-bold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
            AP & Telangana Soil Adapted
          </div>
        </div>
      </div>
    </section>
  );
};
