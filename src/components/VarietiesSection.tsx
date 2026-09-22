import React from 'react';
import { Sprout, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { CHILLI_VARIETIES } from '../data/nurseryData';
import { ChilliVariety } from '../types';

interface VarietiesSectionProps {
  onEnquireClick: (varietyName?: string) => void;
  onOpenImage: (img: string, title: string) => void;
}

export const VarietiesSection: React.FC<VarietiesSectionProps> = ({
  onEnquireClick,
  onOpenImage,
}) => {
  return (
    <section id="varieties" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5 text-red-600" />
            <span>CHILLI SEEDLINGS & FIELD VARIETIES</span>
          </div>

          <h2
            id="varieties-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Our Chilli Varieties
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Five chilli varieties presented with the supplied field references and nursery information.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-stone-500 max-w-2xl mx-auto">
            Images and variety names are presented from the supplied field references. Contact Rythu Mithra Nursery for current seedling availability and exact batch specifications.
          </p>
        </div>

        {/* Varieties Cards Grid: Desktop 4 cards (or 2x2 / 4 col), Tablet 2, Mobile 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHILLI_VARIETIES.map((variety: ChilliVariety) => (
            <div
              key={variety.id}
              id={`variety-card-${variety.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-emerald-600/30 transition-all duration-300 flex flex-col group"
            >
              {/* Variety Image */}
              <div
                onClick={() =>
                  onOpenImage(variety.image, `${variety.name} – ${variety.category}`)
                }
                className="relative h-72 sm:h-80 overflow-hidden cursor-pointer bg-stone-100 flex items-center justify-center p-2"
              >
                <img
                  src={variety.image}
                  alt={`${variety.name} Chilli Variety`}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/20">
                    {variety.category}
                  </span>
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-bold tracking-tight drop-shadow-sm">
                    {variety.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-medium">
                    <span className="text-emerald-700 font-semibold">
                      Chilli Seedlings / Mirapa Naru
                    </span>
                    <span>AP & TG</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {variety.shortDescription}
                  </p>

                  {/* Factual bullet highlights (no fake specs) */}
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-stone-100">
                    {variety.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-stone-700 flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onEnquireClick(variety.name)}
                    id={`enquire-btn-${variety.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-red-600/30 active:scale-95 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on seed supply & booking */}
        <div className="mt-12 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-emerald-950 font-medium">
            Seedling booking is arranged based on seasonal sowing windows. Farmers can contact us directly for advance batch reservation and tray count planning.
          </p>
        </div>
      </div>
    </section>
  );
};
