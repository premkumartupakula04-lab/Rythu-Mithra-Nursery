import React from 'react';
import { MapPin, Navigation, Truck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

export const ServiceAreaSection: React.FC = () => {
  const apDistricts = [
    'Guntur',
    'Prakasam',
    'Palnadu',
    'Bapatla',
    'Krishna',
    'NTR District',
    'Kurnool',
    'Ananthapuramu',
  ];

  const tgDistricts = [
    'Khammam',
    'Bhadradri Kothagudem',
    'Mahabubabad',
    'Warangal',
    'Nalgonda',
    'Suryapet',
    'Karimnagar',
  ];

  return (
    <section id="service-area" className="py-16 bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle map pattern lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            <span>EXTENSIVE LOGISTICS REACH</span>
          </div>

          <h2
            id="service-area-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Serving Farmers Across AP & Telangana
          </h2>

          <p
            id="service-area-text"
            className="mt-3 text-base sm:text-lg text-emerald-200/90 font-medium max-w-2xl mx-auto"
          >
            Rythu Mithra Nursery supplies chilli seedlings to farmers across Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* Two Location Highlights Cards (Mandated: ANDHRA PRADESH & TELANGANA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* ANDHRA PRADESH CARD */}
          <div className="bg-stone-900/90 border-2 border-emerald-700/60 rounded-2xl p-6 sm:p-8 shadow-xl relative group hover:border-emerald-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black text-lg shadow-md">
                AP
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-wide">
                  ANDHRA PRADESH
                </h3>
                <p className="text-xs text-emerald-400 font-semibold">
                  Home Nursery Region & Core Chilli Belt
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Dispatching hardened pro-trays directly from our Chandrapalem facility to major chilli producing mandals with protected vehicle transport.
            </p>

            <div className="mt-4 pt-4 border-t border-stone-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                Key Distribution Belts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {apDistricts.map((dist) => (
                  <span
                    key={dist}
                    className="px-2 py-1 rounded bg-emerald-950/80 border border-emerald-800/60 text-xs text-emerald-300 font-medium"
                  >
                    {dist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* TELANGANA CARD */}
          <div className="bg-stone-900/90 border-2 border-emerald-700/60 rounded-2xl p-6 sm:p-8 shadow-xl relative group hover:border-emerald-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-700 text-white flex items-center justify-center font-black text-lg shadow-md">
                TG
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-wide">
                  TELANGANA
                </h3>
                <p className="text-xs text-red-300 font-semibold">
                  Interstate Sowing & Seedling Supply
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Regular batch dispatches serving progressive farmers in Telangana with reliable root integrity and seasonal schedule coordination.
            </p>

            <div className="mt-4 pt-4 border-t border-stone-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                Key Distribution Belts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tgDistricts.map((dist) => (
                  <span
                    key={dist}
                    className="px-2 py-1 rounded bg-red-950/60 border border-red-800/50 text-xs text-red-200 font-medium"
                  >
                    {dist}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transport Safety Note */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-stone-900/70 border border-emerald-800/40 text-center flex items-center justify-center gap-3 text-xs sm:text-sm text-stone-300">
          <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            Seedling trays are secured in specialized multi-tier racks to prevent crushing or root ball disturbance during transit.
          </span>
        </div>
      </div>
    </section>
  );
};
