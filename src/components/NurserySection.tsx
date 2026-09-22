import React from 'react';
import { Eye, Layers, Maximize2 } from 'lucide-react';
import { IMAGES } from '../data/nurseryData';

interface NurserySectionProps {
  onOpenImage: (img: string, title: string) => void;
}

export const NurserySection: React.FC<NurserySectionProps> = ({ onOpenImage }) => {
  const nurseryItems = [
    {
      title: 'Green Shade Net Polyhouse Structure',
      category: 'Nursery Structure',
      image: IMAGES.nurseryStructure,
      desc: 'Engineered shade-net polyhouse maintaining 50% diffused sunlight and optimum airflow.',
    },
    {
      title: 'High-Density Seedling Pro-Trays',
      category: 'Seedling Trays',
      image: IMAGES.nurseryTrays,
      desc: 'Systematically organized black pro-trays with uniform seedling emergence and root aeration.',
    },
    {
      title: 'Healthy Young Chilli Saplings',
      category: 'Chilli Plants',
      image: IMAGES.ownerInspecting,
      desc: 'Vigorous early foliage development inspected under hands-on owner supervision.',
    },
  ];

  return (
    <section id="nursery" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>FACILITY & INFRASTRUCTURE</span>
          </div>

          <h2
            id="nursery-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Our Nursery
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Inside Rythu Mithra Nursery at Chandrapalem Mandal, Andhra Pradesh — purpose-built for healthy chilli seedling germination, irrigation, and hardening.
          </p>
        </div>

        {/* Clean 3-Column Gallery on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {nurseryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenImage(item.image, item.title)}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image with zoom on hover */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors"></div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    {item.category}
                  </span>
                </div>

                {/* Click to Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Nursery Photo</span>
                  </span>
                  <span className="text-stone-400 font-normal">Chandrapalem, AP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nursery Environment Highlight Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-900 to-stone-900 text-white p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-emerald-800/60">
            <div className="pt-4 md:pt-0 md:pr-6">
              <h4 className="text-base font-bold text-emerald-300">
                Optimal Micro-Climate
              </h4>
              <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                Filtered light transmission and humidity balance protect delicate tender shoots from thermal shock.
              </p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <h4 className="text-base font-bold text-emerald-300">
                Precision Micro-Irrigation
              </h4>
              <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                Even moisture distribution ensures uniform seedling sizing with zero root waterlogging or tray drying.
              </p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <h4 className="text-base font-bold text-emerald-300">
                Pre-Field Hardening
              </h4>
              <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                Seedlings are gradually acclimated before dispatch to maximize post-transplant survival in farmer fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
