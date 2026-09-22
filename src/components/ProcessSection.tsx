import React from 'react';
import { Sprout, SunMedium, ShieldCheck, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/nurseryData';

interface ProcessSectionProps {
  onOpenImage: (img: string, title: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenImage }) => {
  const iconMap: Record<string, React.ElementType> = {
    Sprout,
    SunMedium,
    ShieldCheck,
    Truck,
  };

  return (
    <section id="nursery-process" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>METICULOUS NURSERY METHODS</span>
          </div>

          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            NURSERY PROCESS
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-300">
            From certified seed sowing to field-hardened seedlings ready for planting.
          </p>
        </div>

        {/* Process Flow Stepper - Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connector Line across steps */}
          <div className="absolute top-28 left-16 right-16 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 z-0"></div>

          {PROCESS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.iconName] || Sprout;
            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Image Thumbnail */}
                <div
                  onClick={() => onOpenImage(step.image, `Step ${step.number}: ${step.title} – ${step.subtitle}`)}
                  className="w-full h-44 rounded-xl overflow-hidden mb-5 border-2 border-stone-700 shadow-lg cursor-pointer bg-stone-800 relative group-hover:border-emerald-500 transition-all"
                >
                  <img
                    src={step.image}
                    alt={`${step.title} stage at Rythu Mithra Nursery`}
                    className="w-full h-full object-contain transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-stone-900/90 text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                    Stage {step.number}
                  </div>
                </div>

                {/* Step Circle with Number & Icon */}
                <div className="w-14 h-14 rounded-full bg-emerald-900 border-4 border-stone-900 flex items-center justify-center text-emerald-300 shadow-xl group-hover:bg-emerald-700 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Step Number & Title */}
                <div className="mt-4">
                  <span className="text-xs font-black tracking-widest text-emerald-400 uppercase">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide mt-0.5">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-emerald-300/80 mb-2">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Stepper - Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8 relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-emerald-800/80"></div>

          {PROCESS_STEPS.map((step) => {
            const Icon = iconMap[step.iconName] || Sprout;
            return (
              <div key={step.number} className="relative pl-14 sm:pl-16">
                {/* Node */}
                <div className="absolute left-2 top-0 w-9 h-9 rounded-full bg-emerald-700 border-2 border-stone-900 flex items-center justify-center text-white shadow-md">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="bg-stone-800/90 border border-stone-700 rounded-xl p-4 sm:p-5 shadow-md">
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div
                      onClick={() => onOpenImage(step.image, `Step ${step.number}: ${step.title}`)}
                      className="w-full sm:w-36 h-28 shrink-0 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-xs font-bold">
                          {step.number}
                        </span>
                        <h3 className="text-base font-bold text-white uppercase tracking-wider">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs font-medium text-emerald-300 mt-1">
                        {step.subtitle}
                      </p>
                      <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nursery Hygiene Promise */}
        <div className="mt-14 p-5 rounded-xl bg-stone-800/80 border border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">
                Pro-Tray Disinfection & Sterile Cocopeat Substrate
              </h4>
              <p className="text-xs text-stone-400">
                Preventing soil-borne seedling damping-off and ensuring uniform root establishment.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <span>Visit Nursery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
