import React from 'react';
import { Users, Heart, Sparkles, MapPin } from 'lucide-react';
import { FARMERS_LIST } from '../data/nurseryData';

interface FarmersSectionProps {
  onOpenImage: (img: string, title: string) => void;
}

export const FarmersSection: React.FC<FarmersSectionProps> = ({ onOpenImage }) => {
  return (
    <section id="farmers" className="py-20 bg-stone-100/80 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>REAL FIELD CONNECTIONS</span>
          </div>

          <h2
            id="farmers-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Our Farmers
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Real agricultural photographs of farmers and field visits supplied for Rythu Mithra Nursery.
          </p>
        </div>

        {/* Farmer & Field Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {FARMERS_LIST.map((farmer, idx) => (
            <div
              key={farmer.id}
              id={`farmer-photo-${idx + 1}`}
              onClick={() =>
                onOpenImage(
                  farmer.image,
                  `Farmer Partner ${idx + 1} – ${farmer.locationTag || 'AP & TG Farming'}`
                )
              }
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-stone-200/90 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with precise aspect ratio */}
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-stone-100 flex items-center justify-center p-1">
                <img
                  src={farmer.image}
                  alt={farmer.alt}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center justify-between text-[10px] font-semibold text-emerald-300 mb-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {farmer.locationTag}
                  </span>
                  <span className="text-stone-300">#{idx + 1}</span>
                </div>
                <p className="text-xs font-bold text-white truncate drop-shadow-sm">
                  {farmer.cropStage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Under-Gallery Tagline (Mandated) */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 rounded-full bg-emerald-800 text-white shadow-md">
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span
              id="farmers-tagline"
              className="text-base sm:text-xl font-bold tracking-wide"
            >
              Healthy Seedlings • Happy Farmers
            </span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <p className="mt-3 text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
            Honoring the dedicated farmers who work the fields and trust Rythu Mithra Nursery for their planting material season after season.
          </p>
        </div>
      </div>
    </section>
  );
};
