import React from 'react';
import { Calendar, Sprout, Users, Truck, Check, MapPin, UserCheck, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/nurseryData';

interface AboutSectionProps {
  onOpenImage: (img: string, title: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenImage }) => {
  const highlights = [
    {
      title: '10+ Years Experience',
      desc: 'Over a decade dedicated to chilli seedling propagation and farmer advisory.',
      icon: Calendar,
      color: 'from-amber-500/20 to-amber-600/10 text-amber-700',
    },
    {
      title: 'Quality Chilli Seedlings',
      desc: 'Uniform, sturdy seedlings with dense root plugs ready for open-field transplanting.',
      icon: Sprout,
      color: 'from-emerald-500/20 to-emerald-600/10 text-emerald-700',
    },
    {
      title: 'Farmer-Focused Approach',
      desc: 'Direct interaction with farmers, honest guidance, and reliable planting stock.',
      icon: Users,
      color: 'from-blue-500/20 to-blue-600/10 text-blue-700',
    },
    {
      title: 'Supply Across AP & Telangana',
      desc: 'Timely seedling dispatch to chilli cultivating regions throughout both Telugu states.',
      icon: Truck,
      color: 'from-red-500/20 to-red-600/10 text-red-700',
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Photographs of Nursery Owner Khakmuri Venkata Reddy */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Owner Portrait */}
              <div
                onClick={() =>
                  onOpenImage(
                    IMAGES.ownerPortrait,
                    'Khakmuri Venkata Reddy – Founder & Owner, Rythu Mithra Nursery'
                  )
                }
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
              >
                <img
                  src={IMAGES.ownerPortrait}
                  alt="Khakmuri Venkata Reddy - Owner of Rythu Mithra Nursery"
                  className="w-full h-96 sm:h-[430px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600/90 text-[11px] font-bold uppercase tracking-wider mb-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>NURSERY FOUNDER & PROPRIETOR</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {BUSINESS_INFO.owner}
                  </h3>
                  <p className="text-xs text-stone-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{BUSINESS_INFO.location}</span>
                  </p>
                </div>
              </div>

              {/* Secondary Inset Image: Inspecting Pro-trays */}
              <div
                onClick={() =>
                  onOpenImage(
                    IMAGES.ownerInspecting,
                    'Khakmuri Venkata Reddy inspecting chilli seedling pro-trays'
                  )
                }
                className="absolute -bottom-6 -right-4 sm:-right-6 w-44 sm:w-52 rounded-xl overflow-hidden shadow-xl border-4 border-white cursor-pointer group bg-white hidden sm:block"
              >
                <img
                  src={IMAGES.ownerInspecting}
                  alt="Owner Khakmuri Venkata Reddy inspecting young chilli seedlings in trays"
                  className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-2 bg-emerald-900 text-white text-[10px] font-semibold text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Hands-on Seedling Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sprout className="w-3.5 h-3.5 text-emerald-700" />
              <span>AUTHENTIC CHILLI SEEDLING NURSERY</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight"
            >
              About Rythu Mithra Nursery
            </h2>

            <div className="mt-4 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p>{BUSINESS_INFO.aboutText}</p>
            </div>

            {/* Owner & Location Key Facts Card */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Proprietor / Farmer
                </span>
                <p className="text-base font-bold text-stone-900">
                  {BUSINESS_INFO.owner}
                </p>
              </div>
              <div className="h-px sm:h-8 w-full sm:w-px bg-stone-200"></div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Nursery Location
                </span>
                <p className="text-base font-bold text-stone-900">
                  {BUSINESS_INFO.location}
                </p>
              </div>
              <div className="h-px sm:h-8 w-full sm:w-px bg-stone-200"></div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Direct Line
                </span>
                <p className="text-base font-bold text-emerald-700">
                  {BUSINESS_INFO.phone}
                </p>
              </div>
            </div>

            {/* Four Core Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-stone-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-stone-600 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Andhra Pradesh & Telangana Commitment */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-stone-600">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Dedicated to supplying genuine chilli seedlings (mirapa naru) to farming communities across Guntur, Prakasam, Krishna, Khammam, Mahabubabad, and surrounding districts.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
